// src/pages/ProfileBuilding.js

import React from "react";
import "./ServicesCard.css";
import { FaUserTie } from "react-icons/fa";

const ProfileBuilding = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaUserTie />
        </i>
      </div>
      <div className="service-card">
        <h1>Profile Building</h1>
      </div>
      <div className="service-para">
        <p>
          Elevate your personal brand with Simtrak Solutions’ Profile Building
          Services. We craft compelling online identities that resonate with
          your audience, boost visibility, and leave a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default ProfileBuilding;
