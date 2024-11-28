import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "../../components/navSpanish";
import Footer from "../../components/footerSpanish";
import '../../styles/contactCSS.css';
import whatsappp from '../../styles/images/whatsappp.png';
import calll from '../../styles/images/calll.png';
import emaill from '../../styles/images/emaill.png';

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
      alert('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar tu mensaje.');
    }
  };

  return (
    <div>
      <NavBar />

      <div className="contact-container">
        <div className="whatsappp">
          <img src={whatsappp} alt="WhatsApp" />
        </div>

        <div className="calll">
          <img src={calll} alt="Teléfono" />
        </div>

        <div className="emaill">
          <img src={emaill} alt="Correo Electrónico" />
        </div>
        <div className="contact-details">
          <h2 className="get">Contáctanos</h2>

          <div className="com">
            <p>
              <a href="https://wa.me/17135176270" target="_blank" rel="noopener noreferrer">
                &nbsp;&nbsp;Llámanos en WhatsApp al +1 (713) 517-6270
              </a>
            </p>

            <p>
              <i className="fas fa-phone contact-icon"></i>
              <a href="tel:+17135176270">Llámanos en cualquier momento al +1 (713) 517-6270</a>
            </p>

            <p>
              <i className="fas fa-envelope contact-icon"></i>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=greenhazesmokeshop@gmail.com" target="_blank" rel="noopener noreferrer">
                greenhazesmokeshop@gmail.com
              </a>
            </p>
          </div>
          <p className="highlighted-text">¡No dudes en pedir detalles, no guardes ninguna pregunta!</p>
          <p className="contact-description">
            ¡Estamos aquí para ayudarte! Ya sea que necesites asistencia o quieras saber más sobre nuestros productos, estas son las formas de contactarnos.
          </p>
        </div>

        <div className="contact-form">
          <h2>Escríbenos</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre Completo"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;