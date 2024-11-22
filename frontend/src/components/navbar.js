import React from 'react';
import '../styles/navbarCSS.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="taxi-text">T</span>
          <img
            src="path-to-car-icon.png"
            alt="Taxi Logo"
            className="taxi-icon"
          />
          <span className="taxi-text">XI</span>
          <span className="highlight-text">K</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home" className="nav-link active">
            Home
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
        </div>

        {/* Contact and Button */}
        <div className="nav-actions">
          
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
