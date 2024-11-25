import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from '../pages/login/login';
import Cadastro from '../pages/cadastro/cadastro';
import Home from '../pages/home/home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };