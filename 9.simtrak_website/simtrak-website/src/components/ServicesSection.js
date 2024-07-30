import React from 'react';
import './ServicesSection.css';
import {
  FaUserTie,
  FaBriefcase,
  FaTasks,
  FaPalette,
  FaBullseye,
  FaChartLine,
  FaHeadset,
  FaChalkboardTeacher,
  FaDatabase,
  FaComments,
  FaGraduationCap,
  FaLaptopCode
} from 'react-icons/fa';

const services = [
  {
    title: "Profile Building",
    description: "Enhance your professional profile with our expert guidance.",
    icon: <FaUserTie />
  },
  {
    title: "Recruitment Management",
    description: "Streamline your recruitment process with our comprehensive solutions.",
    icon: <FaBriefcase />
  },
  {
    title: "Task Management",
    description: "Efficiently manage your tasks and projects with our tools.",
    icon: <FaTasks />
  },
  {
    title: "Graphic Designing",
    description: "Get stunning graphics and designs tailored to your needs.",
    icon: <FaPalette />
  },
  {
    title: "Lead Generation",
    description: "Boost your business with high-quality leads.",
    icon: <FaBullseye />
  },
  {
    title: "Market Research",
    description: "Gain valuable market insights with our research services.",
    icon: <FaChartLine />
  },
  {
    title: "Virtual Assistant",
    description: "Get professional virtual assistance for your business needs.",
    icon: <FaHeadset />
  },
  {
    title: "Webinar and Workshop Management",
    description: "Organize and manage your webinars and workshops effortlessly.",
    icon: <FaChalkboardTeacher />
  },
  {
    title: "Database Management",
    description: "Keep your data organized and secure with our management solutions.",
    icon: <FaDatabase />
  },
  {
    title: "Customer Feedback",
    description: "Collect and analyze customer feedback to improve your services.",
    icon: <FaComments />
  },
  {
    title: "Training Management",
    description: "Effectively manage training programs for your team.",
    icon: <FaGraduationCap />
  },
  {
    title: "Software Services",
    description: "Get top-notch software solutions tailored to your needs.",
    icon: <FaLaptopCode />
  }
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
