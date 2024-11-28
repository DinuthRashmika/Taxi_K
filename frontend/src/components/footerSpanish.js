import React from 'react';
import '../styles/Footer.css'; // Importar CSS para estilos
import logo from '../styles/images/logo.png';
import what from '../styles/images/whatsapp.png';
import insta from '../styles/images/instagram.png';
import face from '../styles/images/facebook.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección del Logo */}
        <div className="footer-section logo-section">
          <div className="logo">
            <img src={logo} alt="Logo de Taxi" className="taxi-icon" />
          </div>
          <p className="footer-description">
            Servicio de taxi confiable y rápido, disponible las 24 horas, los 7 días de la semana,
            para llevarte donde necesites. ¡Cuenta con nosotros para viajes seguros, cómodos y
            asequibles por la ciudad y más allá!
          </p>
        </div>

        {/* Sección de Ayuda */}
        <div className="footer-section help-section">
          <h3>Necesitas Ayuda</h3>
          <p>Conéctate con Nosotros</p>
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

        {/* Sección de Sucursales */}
        <div className="footer-section branches-section">
          <h3>Nuestras Sucursales</h3>
          <p>No15,</p>
          <p>Texas,</p>
          <p>Estados Unidos de América</p>
        </div>
      </div>

      {/* Sección Inferior del Footer */}
      <div className="footer-bottom">
        <p>
          TAXI K &copy; Copyright 2024. Todos los Derechos Reservados. Diseñado por NexWave
        </p>
      </div>
    </footer>
  );
};

export default Footer;