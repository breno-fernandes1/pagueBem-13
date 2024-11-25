import React, { useState } from 'react';
import logo from '../../assets/logo-pague-bem.png';
import {
  ButtonLogin,
  ErrorMessage,
  InputGroup,
  Inputs,
  Container,
  LoginForm,
  LoginLogo,
  LogoContainer,
  Text1,
  Text2,
  TitleLogin,
  LoginContainer,
  Text4,
  ContainerText5,
  Text5,
  Text6
} from './loginStyle';
import { Layout } from '../../components/layout/layout';

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
    <Layout>
      <Container>
        <LogoContainer>
          <LoginLogo src={logo} alt="Logo Pague Bem" />
          <Text1>SEJA BEM-VINDO</Text1>
          <Text2>Para se manter conectado conosco, faça login com suas informações pessoais.</Text2>
        </LogoContainer>
        <LoginContainer>
          <TitleLogin>Efetue seu login</TitleLogin>
          <LoginForm onSubmit={handleLogin}>
            <InputGroup>
              <Inputs
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
            </InputGroup>
            <InputGroup>
              <Inputs
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
              />
            </InputGroup>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <ButtonLogin type="submit">Entrar</ButtonLogin>
            <Text4>Esqueci minha senha</Text4>
            <ContainerText5>
              <Text5>Não tem uma conta?</Text5>
              <Text6>Registre-se aqui</Text6>
            </ContainerText5>
          </LoginForm>
        </LoginContainer>
      </Container>
    </Layout>
  );
}

export default Login;
