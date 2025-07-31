import React from "react";
import "./Home.css";
import Servcs from "../Servics/Servics";
import Team from "../Team/Team"

const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <div className="home-content">
          <h1 className="title">
            <span className="highlight">Patel Global Trade</span>
          </h1>
          <h6 className="subtitle">
            Connecting Worlds, Exporting Opportunities!!
          </h6>
          <p className="description">
            Boost global business with our highly recommended trading company.
          </p>
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

     <section className="aboutpage">
        <div className="about-image">
          <img
            src="/images/image3.png"
            alt="Global Trade Visual"
            className="hero-image"
          />
        </div>

        <div className="about-content">
          <h1 className="title3">
            About <span className="highlight">Patel Global Trade</span>
          </h1>
          <h5 className="subtitle">
            Insights and Resources to help drive your Business Forward Faster.
          </h5>
          <p className="description">
            We build results-oriented brand strategy and continually refine the
            campaign for the greatest outcome. From full-scale branding
            strategy, we are reaching to almost desired buyers throughout the
            world.
          </p>
        </div>
      </section>

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

      <div>
        <section className="workpage">
          <div className="work-content">
            <h1 className="title4">
              <span className="highlight">Introducing Our Work</span>
            </h1>
            <h5 className="subtitle">
              Tailoring services for global exporters with personalized
              attention .
            </h5>
            <p className="description">
              Our creativity is driven by depth study in an effort to give you
              the best result and position of your product successfully in
              International market. We're on a mission to start studying the
              exact market for your products worldwide and establish the product
              in appropriate market.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/images/image8.png"
              alt="Global Trade Visual"
              className="hero-image"
            />
          </div>
        </section>
      </div>

      <Team />

      <section className="clients-section">
        <h2 className="title">
          “<span>Our clients</span>”
        </h2>

        <div className="stats">
          <div className="stat">
            <span className="number">50+</span>
            Happy Customers
          </div>
          <div className="stat">
            <span className="number">20+</span>
            Partners
          </div>
          <div className="stat">
            <span className="number">10+</span>
            Collaborations
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
