import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInCard from './SignInCard'; // Você pode criar esse componente simples
import TemplateFrame from './TemplateFrame'; // Pode ser uma div ou um container básico

export default function TelaDeLogin() {
  const [mode, setMode] = React.useState('light');
  const defaultTheme = createTheme({ palette: { mode } });

  // Alternar entre modos claro e escuro
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <TemplateFrame mode={mode} toggleColorMode={toggleColorMode}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <Stack
          direction="column"
          component="main"
          sx={{
            justifyContent: 'center',
            height: '100vh',
            backgroundImage:
              mode === 'dark'
                ? 'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))'
                : 'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
            backgroundSize: 'cover',
          }}
        >
          <SignInCard /> {/* Componente do cartão de login */}
        </Stack>
      </ThemeProvider>
    </TemplateFrame>
  );
}
