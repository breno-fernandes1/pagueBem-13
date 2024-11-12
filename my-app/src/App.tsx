import React from 'react';
import './App.css';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Header from './components/header/header';
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Cadastro/> */}
      <Login/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
