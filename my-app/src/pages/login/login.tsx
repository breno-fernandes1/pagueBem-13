import React, { useState } from 'react';
import logo from '../../assets/logo-pague-bem.png';
import { ButtonLogin, ErrorMessage, InputGroup, Inputs, LabelName, LoginContainer, LoginForm, LoginLogo, TitleLogin } from './loginStyle';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError('');
      console.log('Tentando logar com', { email, password });
    }
  };

  return (
    <LoginContainer>
      <LoginLogo src={logo} alt="Logo Pague Bem"/>
      <TitleLogin>Login</TitleLogin>
      <LoginForm onSubmit={handleLogin}>
        <InputGroup>
          <LabelName>Email</LabelName>
          <Inputs
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </InputGroup>
        <InputGroup>
          <LabelName>Senha</LabelName>
          <Inputs
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </InputGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
