import React from "react";
import "./ServicesCard.css";
import { FaTasks } from "react-icons/fa";

const TaskManagement = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaTasks />
        </i>
      </div>
      <div className="service-card">
        <h1>Task Management</h1>
      </div>
      <div className="service-para">
        <p>
        Streamline workflows, meet deadlines, and achieve optimal efficiency, guided by our experienced team and advanced tools.
        </p>
      </div>
    </div>
  );
};

export default TaskManagement;
