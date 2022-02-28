import React, { useState, useEffect } from "react";
import "./Nav.css";


import AddCircleIcon from '@material-ui/icons/AddCircle';
import NavChats from "./NavChats";

function Nav(props) {

    const [chatlist, setChatList] = useState([
        {chatId: 1, title:'Ericson'},
        {chatId: 2, title:'Bruno'},
        {chatId: 3, title:'Eduardo'},
        {chatId: 4, title:'Matheus'},
        {chatId: 5, title:'João'}
    ]);

    const [activeChat, setActiveChat] = useState({});

    return (
        <div className="sidebar">
            <header>
                <span className="header--username">Usuário</span>
                <div className="header--button">
                    < AddCircleIcon style={{color: '#919191'}}/>
                </div>   
            </header>
            <div className="chatlist">
                {chatlist.map((item, key) => (
                    < NavChats 
                        key={key}
                        data={item}
                        active={activeChat.chatId === chatlist[key].chatId}
                        onClick={()=> setActiveChat(chatlist[key])}
                    />
                ))}
            </div>
        </div>
    )
}

export default Nav;