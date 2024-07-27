// src/components/Hero.js

import React from 'react';
import './Detail.css';
// import heroImage1 from '../assets/hero-image-1.webp'; // replace with actual image
import heroImage2 from '../assets/hero-image-2.webp'; // replace with actual image
// import heroImage3 from '../assets/hero-image-3.webp'; // replace with actual image

const Detail = () => {
  return (
    <div className="hero-section1">
      <div className="hero-content">
        <h1>Unlock Your Business's Full Potential with Us</h1>
        <p>Transform your business into a thriving powerhouse as we offer a wide array of services designed to streamline your operations and boost your brand’s presence!</p>
        <ul>
          <li>✔ Tailored Success: Get a custom plan for your company.</li>
          <li>✔ Market Strength: Establish a strong position.</li>
          <li>✔ Unleash Growth: Maximize your potential.</li>
        </ul>
        <p>At Simtrak Solutions, we refuse to accept anything less than excellence. Join us in redefining success and embracing a future of unparalleled achievement. Your success story begins here, with Simtrak Solutions by your side.</p>
      </div>
      <div className="hero-images">
        {/* <img src={heroImage1} alt="Business Growth" width={'400vw'}/> */}
        <img src={heroImage2} alt="Market Analysis" width={"200vw"}/>
        {/* <img src={heroImage3} alt="Team Collaboration" width={'250px'}/> */}
      </div>
    </div>
  );
};

export default Detail;
