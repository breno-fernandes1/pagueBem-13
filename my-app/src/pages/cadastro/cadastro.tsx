import React from 'react';
import {
  Button,
  TextField,
  Checkbox,
  Typography,
  FormControlLabel,
  SubmitContainer,
  CardContainer,
  FormBox,
  LoginLink
} from './cadastroStyle'; // Importando os componentes estilizados
import { Layout } from '../../components/layout/layout';
import { NavLink } from "react-router";

const Cadastro: React.FC = () => {
  return (
    <Layout>
      <div className='flex flex-row align-items-center justify-content-center w-screen h-screen'>
        <CardContainer>
          <FormBox>
            <Typography variant="h5" align="center" gutterBottom>
              Crie sua conta
            </Typography>
            <form>
              <TextField label="Nome completo" type="text" required />
              <TextField label="Email" type="email" required />
              <TextField label="Senha" type="password" required />
              <TextField label="Confirmar senha" type="password" required />

              <FormControlLabel>
                <Checkbox type="checkbox" required />
                Aceito os termos de uso e política de privacidade
              </FormControlLabel>

              <SubmitContainer>
                <Button type="submit">Registrar</Button>
              </SubmitContainer>

              <Typography variant="body2" align="center">
                Já tem uma conta? <LoginLink to={'/login'}>Faça login</LoginLink>
              </Typography>
            </form>
          </FormBox>
        </CardContainer>
      </div>
    </Layout>
  );
};

export default Cadastro;
