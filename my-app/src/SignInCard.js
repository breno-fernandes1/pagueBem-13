import React from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';

export default function SignInCard() {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            variant="outlined"
            type="password"
          />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
