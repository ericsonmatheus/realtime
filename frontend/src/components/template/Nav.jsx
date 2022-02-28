import React, { useState, useEffect } from "react";
import "./Nav.css";


import AddCircleIcon from '@material-ui/icons/AddCircle';
import NavChats from "./NavChats";

function Nav(props) {

    const [chatlist, setChatList] = useState([{}, {},{},{}, {},{},{}, {},{},{}, {},{},{}, {},{},{}]);

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
                    />
                ))}
            </div>
        </div>
    )
}

export default Nav;