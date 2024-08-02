import React from "react";
import "./ServicesCard.css";
import { FaHeadset } from "react-icons/fa";

const VirtualAssistant = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaHeadset />
        </i>
      </div>
      <div className="service-card">
        <h1>Virtual Assistant</h1>
      </div>
      <div className="service-para">
        <p>
        Our dedicated professionals handle administrative tasks, freeing your time to focus on strategic growth and goals. With flexible engagement options, you can scale our assistance to meet your specific needs, allowing you to offload administrative burdens and drive business growth.
        </p>
      </div>
    </div>
  );
};

export default VirtualAssistant;
