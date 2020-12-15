import React from 'react';
import { Routes } from './routes'
import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar';
import { FaBeer } from 'react-icons/fa';
import Select from './components/home/selectt';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      {/* <Routes /> */}
      <Navbar />
      <Home />
      <Footer />


    </div>
  );
}

export default App;
