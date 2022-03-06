import React, { useState }  from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Api from "../../Api";

function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        let result = await Api.login({login, password});
        
        if(!result) {
            return alert('login ou senha inválido')
        } else {
            localStorage.setItem('__realtime', JSON.stringify(result.data));
            
            const chats = await Api.getChats()

            if(Object.keys(chats.data).length === 0) {
                addUserChat()
            }
            
            return window.location = '/';    
        }
    }

    const addUserChat = async() => {
        await Api.saveChat({})
    }

    return (
        <div className="login">
            <div className="form-login">
                <input
                    className="input-area"
                    type="text"
                    name="login"
                    placeholder="Digite seu login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}>
                </input>
                <input
                    className="input-area"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha "
                    value={password}
                    onChange={e => setPassword(e.target.value)}>
                </input>
                <button onClick={handleLogin}>Entrar</button>
                <span className="register-btn">Não tem cadastro? Cadastre-se <Link to="/register">aqui</Link></span>
            </div>
        </div>
    )
}

export default Login;
