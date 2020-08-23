import React from 'react';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
