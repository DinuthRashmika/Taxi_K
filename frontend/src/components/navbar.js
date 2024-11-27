import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import '../styles/navbarCSS.css';
import logo from '../styles/images/logo.png';

function NavBar() {
  return (
    <>
      {/* Top Banner */}
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
            <NavLink
              to="/homePage"
              className="nav-link"
              activeClassName="active"
              aria-label="Go to Home"
            >
              Home
            </NavLink>
            <NavLink
              to="/AboutUs"
              className="nav-link"
              activeClassName="active"
              aria-label="Go to About Us"
            >
              About Us
            </NavLink>
            <NavLink
              to="/ContactPage"
              className="nav-link"
              activeClassName="active"
              aria-label="Go to Contact Us"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/service"
              className="nav-link"
              activeClassName="active"
              aria-label="Go to Services"
            >
              Services
            </NavLink>
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