import React from 'react';
import NavBar from "../../components/navSpanish";
import Footer from "../../components/footerSpanish";
import '../../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="about-us-container">
        <h3>Sobre Nuestra Empresa</h3>
        <h1>Rápidos, Confiables y Conectando Te con Servicios de Taxi de Confianza</h1>
        <p>
          Nuestro sistema de reserva de taxis ofrece la manera más fluida de conectarte con
          conductores confiables en toda la ciudad. Con un enfoque en la comodidad y la seguridad,
          nuestra plataforma garantiza que cada viaje sea lo más cómodo posible, desde el inicio
          hasta el destino.
        </p>
        <ul className="features-list">
          <li>Conductores Seguros y Verificados</li>
          <li>Conductores Profesionales Verificados</li>
          <li>Interfaz de Reserva Amigable para el Cliente</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
