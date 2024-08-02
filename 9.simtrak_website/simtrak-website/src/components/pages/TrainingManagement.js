import React from "react";
import "./ServicesCard.css";
import { FaGraduationCap } from "react-icons/fa";

const TrainingManagement = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaGraduationCap />
        </i>
      </div>
      <div className="service-card">
        <h1>Training Management</h1>
      </div>
      <div className="service-para">
        <p>
        We design tailored training programs, from needs assessment to delivery, to enhance employee skills and drive organizational success with engaging, up-to-date content.
        </p>
      </div>
    </div>
  );
};

export default TrainingManagement;
