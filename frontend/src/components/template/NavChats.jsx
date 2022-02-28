import React from "react";
import "./NavChats.css"

function NavChats() {

    return (
        <div className="navChats">
            <div className="lines">
                <div className="line">
                    <div className="name">Ericson Matheus</div>
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
