import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import Logo from '../../../assets/logo.svg'; 

export default function TemplateFrame({ children }) {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={Logo} alt="Logo da Empresa" style={{ height: '60px' }} /> 
          </Box>
          <WindowIcon sx={{ cursor: 'pointer', fontSize: 40, color: 'green'}} />
        </Toolbar>
      </AppBar>
      <main
        style={{ 
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
          padding: '22px'
        }}
      >
        {children}
      </main>
    </div>
  );
}
