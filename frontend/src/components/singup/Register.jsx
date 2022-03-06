import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Api from "../../Api";

function Register() {

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        let result = await Api.register({name, login, password, confirmPassword})
    
        if(!result) {
            return alert('Falha ao cadastrar')
        } else {
            return [window.location = "/login", alert('Criado com Sucesso')]
        }
    }

    return (
        <div className="register">
            <div className="form-register">
                <input
                    className="input-area"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}>
                </input>
                <input
                    className="input-area"
                    type="text"
                    name="password"
                    placeholder="Digite um login "
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
                <input
                    className="input-area"
                    type="password"
                    name="password"
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}>
                </input>
                <button onClick={handleRegister}>Cadastrar</button>
                <span className="register-btn">Já possui uma conta? <Link to="/login">Faça Login</Link></span>
            </div>
        </div>
    )
}

export default Register;