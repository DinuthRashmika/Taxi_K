import React from "react";
import "../../styles/service.css";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import ride from '../../styles/images/rideshare.jpg';
import long from '../../styles/images/ride.jpg';
import parcel from '../../styles/images/delevery.jpg';
import air from '../../styles/images/air.jpg';

const Services = () => {
  return (
    <div>
      <NavBar />
      <div>
        {/* Header Section */}
        <div className="header-section">
          <Header
            title="Our Services"
            breadcrumbs={[
              { text: "Home", link: "./containers/Main/HomePage" },
              { text: "Services", link: "./containers/Main/ServicePage" },
            ]}
          />
        </div>

        {/* Service Content Section */}
        <div className="service-content">
          <div className="service-item ride-sharing">
            <img src={ride} alt="Ride Sharing" />
            <div className="service-text">
              <h3>Ride Sharing</h3>
              <p>
                Ride sharing allows clients to share a ride with other passengers going in the same direction. This option helps reduce travel costs while being eco-friendly, as it lowers the number of vehicles on the road. Passengers can enjoy a comfortable ride while splitting the fare, making it a cost-effective solution for daily commutes or longer trips.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-text">
              <h3>Airport Transportation</h3>
              <p>
                Airport transportation offers reliable, on-time rides to and from the airport. Whether you're arriving or departing, this service ensures a stress-free experience, with drivers who are familiar with airport procedures and schedules. Clients can enjoy hassle-free pickups and drop-offs, including assistance with luggage.
              </p>
            </div>
            <img src={air} alt="Airport Transportation" />
          </div>

          <div className="service-item">
            <img src={long} alt="Long-Distance" />
            <div className="service-text">
              <h3>Long-Distance</h3>
              <p>
                Long-distance service caters to clients traveling to another city or region. With comfortable vehicles and experienced drivers, this service provides safe and convenient transportation for longer journeys. Whether it's for business, leisure, or an emergency, clients can count on timely and comfortable trips across cities or states.
              </p>
            </div>
          </div>

          <div className="service-item parcel-delivery">
            <div className="service-text">
              <h3>Parcel Delivery</h3>
              <p>
                Parcel delivery service allows clients to send documents, packages, or goods safely and swiftly to their destination. Whether it's for personal or business purposes, this service ensures quick, reliable delivery with real-time tracking to keep clients informed about their package's status.
              </p>
            </div>
            <img src={parcel} alt="Parcel Delivery" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
