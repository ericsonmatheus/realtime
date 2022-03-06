import React from "react";
import "./Messages.css"

function Messages({ data, user }) {
    return (
        <div className="messageLine"
            style={{
                justifyContent: user.id === data.iduser ? 'flex-end' : 'flex-start'
            }}>
            <div className="messageItem" style={{ backgroundColor: user.id === data.iduser ? '#DCF8C6' : '#FFF' }}>
                <p className="messageText"><strong>{user.id === data.iduser ? '': data.name}</strong></p>
                <p className="messageText">{data.body}</p>
                <div className="messageDate">{data.time}</div>
            </div>
        </div>
    )
}

export default Messages;