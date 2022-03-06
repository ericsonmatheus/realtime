import React, { useState, useEffect } from "react";
import "./Nav.css";
import Api from "../../Api";

import AddCircleIcon from '@material-ui/icons/AddCircle';
import NavChats from "./NavChats";
import NewChat from "./NewChat";

function Nav({setChat}) {

    useEffect(() => {
        loadAllUsers()
        getChats()
    }, [])

    const [activeChat, setActiveChat] = useState({
        idchat: 1,
        title: "Grupo de Mensagem"
    });
    const [showNewChat, setShowNewChat] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [chatlist, setChatList] = useState([]);
    

    const handleNewChat = () => {
        setShowNewChat(true)
    }

    useEffect(()=> {
        setChat(activeChat)
    }, [activeChat])

    //Carrega todos os usuários cadastrados
    const loadAllUsers = async () => {
        const result = await Api.getUsers()
        const users = []
        Object.values(result.data).forEach((value) => {
            let user = {
                id: value.id,
                name: value.name,
                login: value.login
            }
            users.push(user)
        })
        setListUsers(users);
    }

    //Carrega todos os chats cadastrados
    const getChats = async () => {
        const result = await Api.getChats()
                        .then(res => res)
        const chats = []
        Object.values(result.data).forEach((value) => {
            let chat = {
                idchat: value.id,
                title: 'Grupo de Mensagem'
            }
            chats.push(chat)
        })
        setChatList(chats)
    }

    return (
        <div className="sidebar">
            < NewChat 
                allUsers={listUsers}
                show={showNewChat}
                setShow={setShowNewChat}/>
            <header>
                <span className="header--username">Usuário</span>
                <div onClick={handleNewChat} className="header--button">
                    < AddCircleIcon style={{color: '#919191'}}/>
                </div>   
            </header>
            <div className="chatlist">
                {chatlist.map((item, key) => (
                    
                    < NavChats 
                        key={key}
                        data={item}
                        active={activeChat.idchat === chatlist[key].idchat}
                        onClick={()=> setActiveChat(chatlist[key])}
                    />
                    
                ))}
            </div>
        </div>
    )
}

export default Nav;