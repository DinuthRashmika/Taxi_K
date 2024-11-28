import React, { useState } from 'react';
import '../styles/navbarCSS.css';
import logo from '../styles/images/logo.png';

function NavBar() {
  // Estado para el enlace activo
  const [activeLink, setActiveLink] = useState('home');

  // Función para manejar clics y establecer el enlace activo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* Nueva Barra Amarilla */}
      <div className="top-banner">
        <span className="top-banner-text">Llámanos: +34 324093438</span>
      </div>

      {/* Barra de Navegación */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <img
              src={logo}
              alt="Logo de Taxi"
              className="taxi-icon"
            />
          </div>

          {/* Enlaces de Navegación */}
          <div className="nav-links">
            <a
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Inicio
            </a>
            <a
              href="#about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
                Sobre  Nosotros
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contáctanos
            </a>
            <a
              href="#services"
              className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Servicios
            </a>
          </div>

          {/* Contacto y Botón */}
          <div className="nav-actions">
            <button className="book-now">Reservar Ahora</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;