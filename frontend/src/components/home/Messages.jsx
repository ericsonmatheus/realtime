import React from "react";
import "./Messages.css"
function Messages({data, user}) {
    return(
        <div className="messageLine"
        style={{
            justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
        }}>
            <div className="messageItem" style={{backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'}}>
                <p className="messageText">{data.body}</p>
                <div className="messageDate">15:20</div>
            </div>
        </div>
    )
}

export default Messages;