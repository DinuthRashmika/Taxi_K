import React from "react";
import "../../styles/service.css";
import NavBar from "../../components/navSpanish";
import Footer from "../../components/footerSpanish";
import Header from "../../components/Header";
import ride from '../../styles/images/rideshare.jpg'; 
import long from '../../styles/images/ride.jpg'; 
import parcel from '../../styles/images/delevery.jpg'; 
import air from '../../styles/images/air.jpg'; 

const Services = () => {
  return (
    <div>
      <NavBar />
      
      {/* Header Section */}
      <div className="header-section">
        <Header
          title="Nuestros Servicios"
          breadcrumbs={[
            { text: "Inicio", link: "./containers/Main/HomePage" },
            { text: "Servicios", link: "./containers/Main/ServicePage" },
          ]}
        />
      </div>

      {/* Service Content Section */}
      <div className="service-content">
        <div className="service-item ride-sharing">
          <img src={ride} alt="Compartir Viaje" />
          <div className="service-text">
            <h3>Compartir Viaje</h3>
            <p>
              Compartir viaje permite a los clientes compartir un viaje con otros pasajeros que se dirigen en la misma dirección. Esta opción ayuda a reducir los costos de viaje mientras es amigable con el medio ambiente, ya que disminuye la cantidad de vehículos en la carretera. Los pasajeros pueden disfrutar de un viaje cómodo mientras comparten la tarifa, siendo una solución económica para traslados diarios o viajes largos.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-text">
            <h3>Transporte al Aeropuerto</h3>
            <p>
              El transporte al aeropuerto ofrece viajes confiables y puntuales hacia y desde el aeropuerto. Ya sea que llegues o salgas, este servicio asegura una experiencia sin estrés, con conductores que conocen los procedimientos y horarios del aeropuerto. Los clientes pueden disfrutar de recogidas y dejadas sin complicaciones, incluyendo asistencia con el equipaje.
            </p>
          </div>
          <img src={air} alt="Transporte al Aeropuerto" />
        </div>

        <div className="service-item">
          <img src={long} alt="Larga Distancia" />
          <div className="service-text">
            <h3>Larga Distancia</h3>
            <p>
              El servicio de larga distancia está dirigido a clientes que viajan a otra ciudad o región. Con vehículos cómodos y conductores experimentados, este servicio proporciona transporte seguro y conveniente para viajes más largos. Ya sea por negocios, ocio o una emergencia, los clientes pueden contar con viajes puntuales y cómodos entre ciudades o estados.
            </p>
          </div>
        </div>

        <div className="service-item parcel-delivery">
          <div className="service-text">
            <h3>Entrega de Paquetes</h3>
            <p>
              El servicio de entrega de paquetes permite a los clientes enviar documentos, paquetes o mercancías de manera segura y rápida a su destino. Ya sea para propósitos personales o comerciales, este servicio garantiza entregas rápidas y confiables con seguimiento en tiempo real para mantener a los clientes informados sobre el estado de su paquete.
            </p>
          </div>
          <img src={parcel} alt="Entrega de Paquetes" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;