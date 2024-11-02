import React from 'react';
import './App.css'; 
import Login from './Login'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Login /> 
    </div>
  );
}

export default App;