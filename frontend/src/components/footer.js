import React from 'react';
import '../styles/Footer.css'; // Import CSS for styling
import logo from '../styles/images/logo.png';
import what from '../styles/images/whatsapp.png';
import insta from '../styles/images/instagram.png';
import face from '../styles/images/facebook.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <div className="logo">
            <img src={logo} alt="Taxi Logo" className="taxi-icon" />
          </div>
          <p className="footer-description">
            Reliable and quick taxi service, available 24/7 to take you wherever you need to go.
            Count on us for safe, comfortable, and affordable rides around the city and beyond!
          </p>
        </div>

        {/* Help Section */}
        <div className="footer-section help-section">
          <h3>Need Help</h3>
          <p>Connect With Us</p>
          <p>
            <i className="fas fa-phone"></i> <strong>+34 32 40 93 438</strong>
          </p>
          <p>
            <i className="fas fa-envelope"></i> <strong>taxik@gmail.com</strong>
          </p>
          <div className="social-icons">
            <img src={what} alt="WhatsApp" />
            <img src={insta} alt="Instagram" />
            <img src={face} alt="Facebook" />
          </div>
        </div>

        {/* Branches Section */}
        <div className="footer-section branches-section">
          <h3>Our Branches</h3>
          <p>No15,</p>
          <p>Texas,</p>
          <p>United States of America</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          TAXI K &copy; Copyright 2024. All Rights Reserved. Designed by NexWave
        </p>
      </div>
    </footer>
  );
};

export default Footer;
