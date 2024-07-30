import React from 'react';
import './Features.css';
import featuresImage from '../assets/feature.webp';

const Features = () => {
  return (
    <div className="features-section">
      <div className="features-content">
        <div className="features-image">
          <img src={featuresImage} alt="Features" />
        </div>
        <div className="features-text">
          <h2>Features</h2>
          <ul>
            <li>Dedicated Personalized Support System</li>
            <li>Allocation/Reallocation of Tasks</li>
            <li>Email Alert/Reminders of Tasks</li>
            <li>Priority Settings</li>
            <li>Noting System</li>
            <li>Task Progress Monitoring</li>
            <li>Follow-ups</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
