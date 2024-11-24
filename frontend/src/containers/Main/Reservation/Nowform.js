import React from "react";
import "../../../styles/Nowform.css";
import Footer from "../../../components/footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Nowform() {
  return (
    <>
      <div className="maincontainer">
        <div className="formcontainer">
          <div className="subformcontainer">
            <form>
              <div className="radiooption">
                <button>Now</button>
                <button>Schedule</button>
                {/* <label>
                  <input type="radio"></input> Now
                </label>
                <label>
                  <input type="radio"></input> Schedule
                </label> */}
              </div>
              <div className="inputfild">
                <label>
                  Name<span>*</span>
                </label>
                <input placeholder="Enter Your Name"></input>
              </div>
              <div className="inputfild">
                <label>
                  Phone Number<span>*</span>
                </label>
                <input placeholder="Enter Your Phone Number"></input>
              </div>
              <div className="inputfild">
                <label>
                  Drop Location<span>*</span>
                </label>
                <input placeholder="Enter Your Drop Location"></input>
              </div>
              <div className="inputfild">
                <label>
                  Pick Location<span>*</span>
                </label>
                <input placeholder="Enter Your Pick Location"></input>
              </div>
              <div className="inputfild">
                <label>
                  Number Of Passenger<span>*</span>
                </label>
                <input type="number" placeholder="Enter Your Name"></input>
              </div>
              <div className="inputfild">
                <label>
                  Message <span>*</span>
                </label>
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="next">
                <div className="pricing">
                  <p>
                    Meter Drop: <span>$2</span>
                  </p>
                  <p>
                    Wait Time Per Hour: <span>$25</span>
                  </p>
                  <p>
                    Mileage: <span>$2 Per Mile</span>
                  </p>
                  <p>
                    Extras: <span>$1</span>
                  </p>
                </div>
                <div className="submitbutton">
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Map Container */}
        <div className="mapcantainer">
          <MapContainer
            center={[37.7749, -122.4194]} // Default coordinates (San Francisco)
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={[37.7749, -122.4194]}>
              <Popup>Pickup Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nowform;
