// src/ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { title } = useParams();

  // For demo purposes, we'll just display the title.
  // You can fetch more detailed data based on the title here.
  return (
    <div>
      <h1>{title}</h1>
      <p>Here you can add more detailed information about the {title} service.</p>
    </div>
  );
};

export default ServiceDetail;
