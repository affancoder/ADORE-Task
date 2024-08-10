// src/components/Hero.js

import React from "react";
import "./Detail2.css";
// import heroImage1 from '../assets/hero-image-1.webp'; // replace with actual image
// import heroImage2 from '../assets/hero-image-2.webp'; // replace with actual image
import heroImage3 from "../assets/hero-image-3.webp"; // replace with actual image

const Detail2 = () => {
  return (
    <div className="hero-section1">
      <div className="hero-images">
        {/* <img src={heroImage1} alt="Business Growth" width={'400vw'}/> */}
        {/* <img src={heroImage2} alt="Market Analysis" width={"200vw"}/> */}
        <img src={heroImage3} alt="Team Collaboration" width={"250px"} />
      </div>
      <div className="hero-content">
        <h1>Why Choose Us?</h1>
        <h1>We’ll Turn Your Visions into Victories!</h1>
        <ul>
          <li>
            ✔ Comprehensive Services: Your all-in-one solution for business
            success.
          </li>
          <li>
            ✔ Tailored Strategies: Customized plans that align with your goals.
          </li>
          <li>
            ✔ Expertise at Your Service: A dedicated team of industry experts.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail2;
