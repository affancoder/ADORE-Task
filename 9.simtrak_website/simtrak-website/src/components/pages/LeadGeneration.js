import React from "react";
import "./ServicesCard.css";
import { FaBullseye } from "react-icons/fa";

const LeadGeneration = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaBullseye />
        </i>
      </div>
      <div className="service-card">
        <h1>Lead Generation</h1>
      </div>
      <div className="service-para">
        <p>
        We deliver quality leads tailored to your industry and goals, enabling your sales team to focus on closing deals and driving revenue.Harness our strategic expertise and data-driven insights to capture high-value leads, boosting conversions and ensuring sustainable business growth
        </p>
      </div>
    </div>
  );
};

export default LeadGeneration;