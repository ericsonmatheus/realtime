import React, { useRef, useState } from "react";
import "./Chat.css";

import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SendIcon from "@material-ui/icons/Send"

import Messages from "./Messages";
import Enter from "./Enter"

import { useEffect } from "react";
import Api from "../../Api";
import { io } from "socket.io-client";


const socket = io("ws://localhost:5050");
socket.on("connect", () => console.log('Conectado'))

function Chat({ chat }) {

    const body = useRef()
    const [messageList, setMessageList] = useState([])
    const [text, setText] = useState('');
    const [user, setUser] = useState({})
    const [isEnter, setIsEnter] = useState(false)

    //Carrega todas as pessoas anteriores a abertura do chat.
    useEffect(() => {
        const user = JSON.parse(localStorage.__realtime)
        setUser(user);

        const getChatsByUser = async () => {

            const result = await Api.getByUser(user.id)
                .then(res => res)

            if (Object.keys(result.data).length > 0) {
                setIsEnter(true)
            } else {
                setIsEnter(false)
            }
        }
        getChatsByUser()
        loadMessages()
    }, [chat.idchat])

    const loadMessages = async () => {
        const result = await Api.getMessageByChat(chat.idchat)
        const messages = []
        Object.values(result.data).forEach((value) => {
            let message = {
                id: value.id,
                body: value.body,
                name: value.name,
                iduser: value.iduser,
                idchat: value.idchat,
                dateHour: value.dateHour
            }
            messages.push(message)
        })
        setMessageList(messages)
        console.log(result.data)
    }
    //Envia a mensagem para o chat
    const handleSendClick = async() => {
        if (text !== '') {
            const result = await Api.getUserByID(user.id)
            socket.emit('chat.message', {
                body: text,
                name: result.data.name,
                iduser: user.id,
                idchat: chat.idchat
            })
            setText('');
        }
    }

    //Envia a mensagem com a tecla Enter
    const handleInputKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSendClick();
        }
    }

    const handleEnter = async () => {
        await Api.saveUserChats({
            iduser: user.id,
            idchat: chat.idchat
        })

        setIsEnter(true)
    }


    const handleExit = async () => {
        const result = await Api.deleteUserChats(user.id)
        console.log(result)
        setIsEnter(false)
    }

    //Desce a conversa para a ultima enviada automaticamente
    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }

        const handleNewMessage = newMessage => {
            setMessageList([...messageList, newMessage])
        }
        socket.on('chat.message', handleNewMessage)
        return () => socket.off('chat.message', handleNewMessage)
    }, [messageList])

    return (
        <div className="contentArea">
            <div className="chatWindow">
                <div className="chat--header">
                    <div className="header--info">
                        <div className="header--name">Ericson Matheus</div>
                    </div>
                    <div className="chat--button">
                        <div className="chat--btn">
                            {isEnter ? < ExitToAppIcon onClick={handleExit} /> : < VpnKeyIcon onClick={handleEnter} />}
                        </div>
                    </div>
                </div>
                <div ref={body} className="chat--body">
                    {isEnter ? messageList.map((item, key) => (
                        < Messages
                            key={key}
                            data={item}
                            user={user}
                        />
                    )) : < Enter />}
                </div>
                <div className="chat--footer">
                    {isEnter ?
                        <input
                            className="chat--input"
                            type="text"
                            placeholder="Digite uma mensagem"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyUp={handleInputKeyUp}>
                        </input> : ''}
                    {isEnter ?
                        <div className="chat--pos"
                            onClick={handleSendClick}>
                            < SendIcon style={{ color: "#919191" }} />
                        </div>
                        : ''}
                </div>
            </div>
        </div>
    )
}

export default Chat;