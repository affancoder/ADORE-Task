import React from 'react';
import './ContentSection.css';
import image from '../assets/map.jpg';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="map-container">
                <img
                    src={image}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Map"
                />
            </div>
            <div className="contact-info">
                <h2>Get in touch</h2>
                <p>Email: <a href="mailto:contact@simtrak.in">contact@simtrak.in</a></p>
                <p>Phone: <a href="tel:+919883585647">(+91) 988 358 5647</a></p>
                <h2>Visit us</h2>
                <p>Simtrak Solutions, Garg House, JBS Haldane Avenue, Kolkata 700046</p>
            </div>
        </div>
    );
};

export default ContactSection;