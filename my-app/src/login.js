import React, { useState } from 'react';
import './App.css';  
import logo from './logo-pague-bem.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validação para verificar se os campos estão vazios
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError('');
      // Lógica de login aqui, como enviar os dados para uma API
      console.log('Tentando logar com', { email, password });
    }
  };

  return (
    <div className="login-container">
      {/* Adiciona a imagem da logo */}
      <img src={logo} alt="Logo Pague Bem" className="login-logo"/>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
