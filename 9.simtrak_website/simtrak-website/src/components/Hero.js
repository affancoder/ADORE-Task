// src/components/Hero.js

import React from 'react';
import videoconfig from "../assets/bg-hero2.mp4";

import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section" >
      <video src={videoconfig} autoPlay loop muted></video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Experience Excellence in Business Development
        with Simtrak Solutions</h2>
        <div className="heropara">
        <p>Simtrak Solutions is your comprehensive partner for all your business growth needs, streamlining your workload and helping you achieve robust business development. With a client-centric approach and a diverse range of services, we deliver personalized solutions that empower your success. Simtrak Solutions is the trusted choice to unlock your business’s full potential.</p>
        </div>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
