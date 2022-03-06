import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Main from "./components/home/Main";
import SingIn from "./components/singin/Login";
import SingUp from "./components/singup/Register";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<SingIn />}/>
                <Route path="/register" element={<SingUp />}/>
            </Switch>
        </Router>
    );
}

export default Routes;