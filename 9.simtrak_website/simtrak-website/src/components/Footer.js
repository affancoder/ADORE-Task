import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Simtrak is dedicated to providing cutting-edge solutions for tracking and management. Our mission is to deliver exceptional service and innovative technology to meet your needs.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@simtrak.com">info@simtrak.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: 123 Simtrak Street, Suite 456, City, Country</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://facebook.com/simtrak" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className='fab fa-facebook'></i>
            </a>
            <a href="https://twitter.com/simtrak" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className='fab fa-twitter'></i>
            </a>
            <a href="https://instagram.com/simtrak" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className='fab fa-instagram'></i>
            </a>
            <a href="https://instagram.com/simtrak" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className='fab fa-threads'></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Simtrak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
