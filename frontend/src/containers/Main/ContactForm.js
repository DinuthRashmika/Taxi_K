import React, { useState } from 'react';
import axios from 'axios';  
import '../../styles/contactCSS.css'; 
const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3004/Contact/add', formData);
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
      
        <p>
          <i className="fab fa-whatsapp contact-icon"></i> 
          <a href="https://wa.me/17135176270" target="_blank" rel="noopener noreferrer">
            Call Us Anytime whatsapp +1 (713) 517-6270
          </a>
        </p>
       
        <p>
          <i className="fas fa-phone contact-icon"></i> 
          <a href="tel:+17135176270">Call Us Anytime +1 (713) 517-6270</a>
        </p>
        
        <p>
          <i className="fas fa-envelope contact-icon"></i> 
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=greenhazesmokeshop@gmail.com" target="_blank" rel="noopener noreferrer">
            greenhazesmokeshop@gmail.com
          </a>
        </p>
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