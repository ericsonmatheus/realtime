import React from "react";
import "./NewChat.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function NewChat({show, setShow, allUsers}) {

    
    //Fechar janela de todos os contatos
    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className="newChat" style={{left: show? 0 : -415}}>
            <div className="newChat--head">
                <div onClick={handleClose}className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFFFFF'}}/>
                </div>
                <div className="newChat--headTitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {allUsers.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;