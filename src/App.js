// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './views/Routes';
import './styles/variables.css';
import './styles/globals.css';
import './App.css';

function App() {
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
