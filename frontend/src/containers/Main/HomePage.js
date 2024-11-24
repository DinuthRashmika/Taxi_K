import React from "react";
import "../../styles/homeCSS.css"
import NavBar from "../../components/navbar";
import homePageContainer from "../../styles/images/homePageContainer.svg"
import { Navigate, useNavigate } from "react-router-dom";
import profilePicture from "../../styles/images/profilePicture.png"
import taxiCab from "../../styles/images/Taxicab.png"

const HomePage = () => {
    const navigate = useNavigate();

    const handleButtonClick1 = () => {
        navigate('/ContactPage');
    };

    const handleButtonClick2 = () => {
        navigate('/ContactPage');
    };

    return (
        <div>
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
                    <div className="profile">
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
                    <div className="profile">
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
            </div>
            <div>
            <div className="title-container">
                    <div className="title">
                        <h1>Our Working Process</h1>
                    </div>
                </div>
            </div> */
        </div>
    );
};

export default HomePage;
