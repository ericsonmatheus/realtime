import React from "react";
import "./NavChats.css"

function NavChats({onClick, active, data}) {

    return (
        <div className={`navChats ${active ? 'active' : ''}`} onClick={onClick}>
            <div className="lines">
                <div className="line">
                    <div className="name">{`${data.title} ---> ${data.idchat}`}</div>
                </div>
            </div>
        </div>
    )
}

export default NavChats;
