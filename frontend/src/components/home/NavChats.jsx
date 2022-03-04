import React from "react";
import "./NavChats.css"

function NavChats({onClick, active, data}) {

    return (
        <div className={`navChats ${active ? 'active' : ''}`} onClick={onClick}>
            <div className="lines">
                <div className="line">
                    <div className="name">{data.title}</div>
                    <div className="date">19:22</div>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>Estudou para a prova?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavChats;
