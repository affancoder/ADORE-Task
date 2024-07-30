import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="stats">
        <div className="stat">
          <h3>100+</h3>
          <p>Members</p>
        </div>
        <div className="stat">
          <h3>70k+</h3>
          <p>Hours Worked</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Excellence</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Services</p>
        </div>
      </div>
      <div className="features">
        <h2>Elevate Your Experience with Our Features!</h2>
        <ul>
          <li>
            <strong>Client-Centric Approach:</strong> We go the extra mile with our Client-Centric Approach, crafting tailored solutions to exceed your expectations and deliver unmatched value.
          </li>
          <li>
            <strong>Cutting-Edge Technology:</strong> We harness Cutting-Edge Technology to empower your business with innovative solutions and a competitive edge in the market.
          </li>
          <li>
            <strong>Punctuality and Reliability:</strong> We ensure your projects are executed seamlessly and with the utmost trust in our commitment.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSection;
