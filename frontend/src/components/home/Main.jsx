import React, { useEffect, useState } from "react";
import "./Main.css";

import Api from "../../Api"

import Nav from "./Nav";
import Chat from "./Chat";

function Main() {

    useEffect(() => {
        const validateUser = () => {
            try {
                const user = JSON.parse(localStorage.__realtime)
                setUser(user)
            } catch (msg) {
                return [window.location = '/login', alert('Faça login')]
            }
        }
        validateUser()
    }, [])

    const [user, setUser] = useState({})

    const [activeChat, setActiveChat] = useState({
        idchat: 1,
        title: "Grupo de Mensagem"
    })
    
    return (
        <React.Fragment>
            < Nav setChat={setActiveChat} />
            < Chat user={user} chat={activeChat} />
        </React.Fragment>
    )
}

export default Main;

