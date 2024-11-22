import React, { useState } from 'react';
import '../styles/navbarCSS.css';
import logo from '../styles/images/logo.png';

function NavBar() {
  // State for active link
  const [activeLink, setActiveLink] = useState('home');

  // Function to handle click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* New Yellow Div */}
      <div className="top-banner">
        <span className="top-banner-text">Call us: +34 324093438</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <img
              src={logo}
              alt="Taxi Logo"
              className="taxi-icon"
            />
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <a
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact Us
            </a>
            <a
              href="#services"
              className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </a>
          </div>

          {/* Contact and Button */}
          <div className="nav-actions">
            <button className="book-now">Book Now</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
