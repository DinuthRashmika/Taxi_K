import React from "react";
import "../../styles/homeCSS.css"

import homePageContainer from "../../styles/images/homePageContainer.svg"
import taxiCab from "../../styles/images/Taxicab.png"
import profilePicture from "../../styles/images/profilePicture.png"

const HomePage = () => {
    return (
        <div>

           <div className="background">
                <div className="container">
                    <div >
                        <div className="text-content">
                            <h1 >YOUR RIDE</h1>
                        </div>
                        <div className="text-content2">
                            <h1>OUR PRIORITY...</h1>
                        </div>
                        <div className="button-container">
                        <div className="button-booknow">
                            <button>Book Now</button>
                            
                        </div>
                        <div className="button-Schedule">
                            <button>Schedule A Trip</button>
                        </div>
                        </div>
                    </div>
                    <div className="image-content">
                        <img src={homePageContainer} alt="Sample" />
                    </div>
                </div>
            </div>
            <div className="topDrivers-container">
            <div className="">
                        <img src={taxiCab} alt="Sample" />
                    </div>
                <div className="title">
                    <h1>Top Drivers</h1>
                </div>
            </div>
            <div>
                <div>
                    <h2>John Doily</h2>
                </div>
                <div>
                    <img src={profilePicture} alt="Sample" />
                </div>
                <div>
                    <p>Name : 25</p>
                    <p>Name : 5 Years</p>
                    <p>Vehicle Number : 4354rgvc</p>
                    <p>Diver’s License Number : 2993-04043</p>
                    <p>Ratings : 4.5</p>
                </div>
            </div> 
        </div>
    );
};

export default HomePage;