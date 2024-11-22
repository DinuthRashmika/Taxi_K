import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making HTTP requests
import '../../styles/contactCSS.css';

const ContactForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace the URL with your API endpoint
      const response = await axios.post('http://localhost:3004/contact/add', formData);
      console.log(response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Get In Touch</h2>
        <p><i className="fa fa-whatsapp"></i> Call Us Anytime 0000000000</p>
        <p><i className="fa fa-phone"></i> 0000000000</p>
        <p><i className="fa fa-envelope"></i> www@gmail.com</p>
        <p>Feel free to ask for details, don’t save any questions!</p>
        <p className="contact-description">
          We’re here to help! Whether you need assistance or want to learn more about our products, these are the ways to contact us.
        </p>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            name="fullname" 
            value={formData.fullname} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;