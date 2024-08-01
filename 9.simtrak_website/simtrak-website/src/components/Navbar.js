// src/components/Navbar.js

import React, { useState, useEffect } from'react';
// import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const searchSuggestions = [
    'Dashboard',
    'Reports',
    'Analytics',
    'Users',
    'Settings',
    'Profile',
    'Support',
    'Billing'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo}></img>
          Simtrak <span>Solution</span>
        </div>
        <div className="navbar-search" id="main-search">
          <input list="suggestions" name="search" placeholder="Search..." className="search-box" />
          <datalist id="suggestions">
            {searchSuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
          &nbsp;
          <button className="search-button"><i className='fa fa-search'>&nbsp;</i>Search</button>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;