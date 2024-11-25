import React, { useState, useEffect } from "react";
import "../../styles/homeCSS.css"
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import homePageContainer from "../../styles/images/homePageContainer.svg";
import { Navigate, useNavigate } from "react-router-dom";
import profilePicture from "../../styles/images/profilePicture.png";
import taxiCab from "../../styles/images/Taxicab.png";
import car1 from "../../styles/images/car1.svg";
import car2 from "../../styles/images/car2.svg";
import car3 from "../../styles/images/car3.svg";

const HomePage = () => {
    const navigate = useNavigate();
    const [experience, setExperience] = useState(0);

    const handleButtonClick1 = () => {
        navigate('/ContactPage');
    };

    const handleButtonClick2 = () => {
        navigate('/ContactPage');
    };

  useEffect(() => {
    const startingYear = 2020;
    const currentYear = new Date().getFullYear();
    setExperience(currentYear - startingYear);
  }, []);

    return (
        <div>
            <NavBar />
            <div style={{ paddingTop: '1360px' }}>
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        backgroundImage: `url('https://th.bing.com/th/id/R.05da3f562c718462602ea8355261ff48?rik=HTjjIx%2bLP8pc%2bQ&pid=ImgRaw&r=0')`, // Replace with your image URL
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        textAlign: "center",
                        backgroundAttachment: "scroll"
                    }}
                >
                    <div className="container">
                        <div>
                            <div className="text-content">
                                <div className="text-content">
                                    <h1>Your Ride...</h1>
                                </div>
                                <div className="text-content2">
                                    <h1>Our Priority...</h1>
                                </div>
                                <div className="button-container">
                                    <div className="button-booknow">
                                        <button
                                            onClick={handleButtonClick1}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                    <div className="button-Schedule">
                                        <button
                                            onClick={handleButtonClick2}
                                        >
                                            Schedule A Trip
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-content">
                            <img src={homePageContainer} alt="Sample" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="title-container">
                        <div className="">
                            <img src={taxiCab} alt="Sample" />
                        </div>
                        <div className="title">
                            <h1>Top Drivers</h1>
                        </div>
                    </div>
                    <div className="profile-container">
                        <div className="profile">
                            <h2>John Doiley</h2>
                            <img src={profilePicture} alt="John Doiley" />
                            <div className="profile-details">
                                <p><strong>Age</strong>: 25</p>
                                <p><strong>Experience</strong>: <span className="highlight">5 Years</span></p>
                                <p><strong>Vehicle Number</strong>: 68-f-gsj</p>
                                <p><strong>Driver’s License Number</strong>: 2993-04043</p>
                                <p><strong>Ratings</strong>: 4.5
                                    <span className="stars">★★★★★</span>
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <h2>John Doiley</h2>
                            <img src={profilePicture} alt="John Doiley" />
                            <div className="profile-details">
                                <p><strong>Age</strong>: 25</p>
                                <p><strong>Experience</strong>: <span className="highlight">5 Years</span></p>
                                <p><strong>Vehicle Number</strong>: 68-f-gsj</p>
                                <p><strong>Driver’s License Number</strong>: 2993-04043</p>
                                <p><strong>Ratings</strong>: 4.5
                                    <span className="stars">★★★★★</span>
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <h2>John Doiley</h2>
                            <img src={profilePicture} alt="John Doiley" />
                            <div className="profile-details">
                                <p><strong>Age</strong>: 25</p>
                                <p><strong>Experience</strong>: <span className="highlight">5 Years</span></p>
                                <p><strong>Vehicle Number</strong>: 68-f-gsj</p>
                                <p><strong>Driver’s License Number</strong>: 2993-04043</p>
                                <p><strong>Ratings</strong>: 4.5
                                    <span className="stars">★★★★★</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="title-container">
                        <div className="title">
                            <h1>Our Working Process</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="stats-section">
                        <div className="stat-item">
                            <i className="icon icon-experience"></i>
                            <p><strong>Years Of Experience</strong></p>
                            <h2>{experience} +</h2>
                        </div>
                        <div className="stat-item">
                            <i className="icon icon-members"></i>
                            <p><strong>Members</strong></p>
                            <h2>6 +</h2>
                        </div>
                        <div className="stat-item">
                            <i className="icon icon-satisfaction"></i>
                            <p><strong>Client Satisfaction</strong></p>
                            <h2>450 +</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="title-container">
                        <div className="title">
                            <h1>Our Services</h1>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="service">
                            <img src={car1} alt="John Doiley" />
                            <div className="service-details">
                                <h2>Rider Sharing</h2>
                                <p>Whether it's an airport transfer, a car service, or general    transportation</p>
                            </div>
                        </div>
                        <div className="service">
                            <img src={car2} alt="John Doiley" />
                            <div className="service-details">
                                <h2>Rider Sharing</h2>
                                <p>Whether it's an airport transfer, a car service, or general    transportation</p>
                            </div>
                        </div>
                        <div className="service">
                            <img src={car3} alt="John Doiley" />
                            <div className="service-details">
                                <h2>Rider Sharing</h2>
                                <p>Whether it's an airport transfer, a car service, or general    transportation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
