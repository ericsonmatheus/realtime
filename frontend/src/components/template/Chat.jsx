import React, { useRef, useState } from "react";
import "./Chat.css";

import SearchIcon from "@material-ui/icons/Search"
import SendIcon from "@material-ui/icons/Send"
import Messages from "./Messages";
import { useEffect } from "react";

function Chat({user}) { 

    const [text, setText] = useState('');
    const handleSendClick = () => {

    }
    const body = useRef()

    const [list, setList] = useState([
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Estou muito bem, obrigado"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Estou muito bem, obrigado"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"},
        {author: 1, body: "Tudo bem, e com voce?"},
        {author: 2, body: "Ola tudo bem?"}

    ])

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])
    return (
        <div className="contentArea">
            <div className="chatWindow">
                <div className="chat--header">
                    <div className="header--info">
                        <div className="header--name">Ericson Matheus</div>
                    </div>
                    <div className="chat--button">
                        <div className="chat--btn">
                            < SearchIcon />
                        </div>
                    </div>
                </div>
                <div ref={body} className="chat--body">
                    {list.map((item, key) => (
                        < Messages key={key}
                        data={item} user={user}/>
                    ))}
                </div>
                <div className="chat--footer">
                    <input className="chat--input" type="text" placeholder="Digite uma mensagem">
                        
                    </input>
                    <div className="chat--pos"
                    onClick={handleSendClick}>
                        < SendIcon style={{color: "#919191"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;