import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key.

const MapForm = () => {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [distance, setDistance] = useState("");

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 6.9271, // Example center point (Colombo, Sri Lanka)
    lng: 79.8612,
  };

  const calculateDistance = () => {
    if (!pickup || !dropoff) return;

    const origin = new window.google.maps.LatLng(pickup.lat, pickup.lng);
    const destination = new window.google.maps.LatLng(dropoff.lat, dropoff.lng);

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        
        destinations: [destination],
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          const distanceText = response.rows[0].elements[0].distance.text;
          setDistance(distanceText);
        } else {
          console.error("Error calculating distance: ", status);
        }
      }
    );
  };

  const handleMapClick = (e, type) => {
    const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    if (type === "pickup") setPickup(location);
    if (type === "dropoff") setDropoff(location);
  };

  return (
    <div>
      <h3>Book Your Ride</h3>
      <div>
        <h4>Select Pickup and Drop-off Locations</h4>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onClick={(e) => handleMapClick(e, "pickup")}
          >
            {pickup && <Marker position={pickup} label="Pickup" />}
            {dropoff && <Marker position={dropoff} label="Dropoff" />}
          </GoogleMap>
        </LoadScript>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={calculateDistance}>Calculate Distance</button>
        {distance && <p>Distance: {distance}</p>}
      </div>
    </div>
  );
};

export default MapForm;
