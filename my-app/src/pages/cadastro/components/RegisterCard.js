import React from 'react';
import { Button, TextField, Card, CardContent, Typography, FormControlLabel, Checkbox } from '@mui/material';

export default function RegisterCard() {
  return (
    <Card 
      sx={{ 
        maxWidth: 500, 
        maxHeight: 600,
        margin: 'auto', 
        padding: 10, 
        mt: '10px',
        boxShadow: '3px 0 8px rgba(0, 0, 0, 0.4)',
      }}
    >
      <CardContent>
        <Typography 
          variant="h5" 
          align="center" 
          gutterBottom
          sx={{ fontSize: '26px', fontWeight: 'bold' }}
        >
          Crie sua conta
        </Typography>
        <form>
          <TextField
            fullWidth
            margin="normal"
            label="Nome completo"
            variant="outlined"
            type="text"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            type="email"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            variant="outlined"
            type="password"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirmar senha"
            variant="outlined"
            type="password"
            required
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox required />}
            label="Aceito os termos de uso e política de privacidade"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }}
          />
          <div style={{ marginTop: '16px' }}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              sx={{ 
                backgroundColor: '#578F47', 
                color: 'white', 
                fontWeight: 'bold', 
                height: '53px', 
                width: '192px', 
                borderRadius: '12px'  
              }}
            >
              Registrar
            </Button>
          </div>
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ marginTop: '16px', fontSize: '14px' }}
          >
            Já tem uma conta? <a href="" style={{ color: '#578F47', textDecoration: 'none' }}>Faça login</a>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
}
