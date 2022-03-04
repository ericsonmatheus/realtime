import React, { useState } from "react";
import "./Main.css";

import Nav from "./Nav";
import Chat from "./Chat";

function Main() {    
    const [user, setUser] = useState({
        id: 1,
        name: 'Ericson Matheus'
    })

    return (<React.Fragment>
        < Nav user={user}/>
        < Chat user={user}/>
    </React.Fragment>)
}

export default Main; 
    
