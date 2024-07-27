// src/components/Hero.js

import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <div className="hero-section" >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Experience Excellence in Business Development
        with Simtrak Solutions</h2>
        <p>Simtrak Solutions is your comprehensive partner for all your business growth needs, streamlining your workload and helping you achieve robust business development. With a client-centric approach and a diverse range of services, we deliver personalized solutions that empower your success. Simtrak Solutions is the trusted choice to unlock your business’s full potential.</p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
