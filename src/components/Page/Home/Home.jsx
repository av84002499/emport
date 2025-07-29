import React from "react";
import "./Home.css";
import Servcs from "../Servics/Servics";
import About from "../About/About";
const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <div className="home-content">
          <h1 className="title">
            <span className="highlight">Chaudhary Global Trade</span>
          </h1>
          <h6 className="subtitle">
            Connecting Worlds, Exporting Opportunities!!
          </h6>
          <p className="description">
            Boost global business with our highly recommended trading company.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>

        <div className="image-section">
          <img
            src="/images/image1.png"
            alt="Global Trade Visual"
            className="hero-image"
          />
        </div>
      </section>

      <Servcs />

      <About />

      <div className="stats-container">
        <div className="overlay" />
        <section className="stats-section">
          <div className="stat-box1">
            <img src="/images/image5.png" alt="Consignment" />
            <h2>1500+</h2>
            <p>Consignment Done</p>
          </div>
          <div className="stat-box2">
            <img src="/images/image5.png" alt="Happy Buyers" />
            <h2>150+</h2>
            <p>Happy Buyers</p>
          </div>
          <div className="stat-box1">
            <img src="/images/image5.png" alt="Years Experience" />
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>
        </section>
      </div>

      
    </>
  );
};

export default Home;
