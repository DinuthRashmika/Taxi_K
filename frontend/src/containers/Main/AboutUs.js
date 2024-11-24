import React from 'react';
import '../../styles/AboutUs.css';  

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h3>About Our Company</h3>
      <h1>Fast, Reliable Rides Connecting You To Trusted Taxi Services</h1>
      <p>
        Our taxi booking system offers the most seamless way to connect with trusted drivers 
        across the city. With a focus on convenience and safety, our platform ensures every 
        journey is as smooth as possible, from start to destination.
      </p>
      <ul className="features-list">
        <li>Safe and Verified Drivers</li>
        <li>Verified Professional Drivers</li>
        <li>Customer-Friendly Booking Interface</li>
      </ul>
    </div>
  );
};

export default AboutUs;
