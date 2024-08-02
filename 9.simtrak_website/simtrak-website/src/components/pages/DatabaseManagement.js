import React from "react";
import "./ServicesCard.css";
import { FaDatabase } from "react-icons/fa";

const DatabaseManagement = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaDatabase />
        </i>
      </div>
      <div className="service-card">
        <h1>Database Management</h1>
      </div>
      <div className="service-para">
        <p>
        Simtrak Solutions offers comprehensive Database Management services to organize, secure, and optimize your data for informed decisions and operational efficiency. ​
        </p>
      </div>
    </div>
  );
};

export default DatabaseManagement;
