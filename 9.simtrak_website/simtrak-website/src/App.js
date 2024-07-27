import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Ensure the path matches the actual directory structure
import Hero from './components/Hero'; 
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Detail />  
    </div>
  );
}

export default App;
