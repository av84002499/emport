import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
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
            About <span className="highlight">TradeLinkGlobal</span>
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

      <section class="hero-section">
        <div class="hero-text">
          <h1>
            We’re here to <br />
            <span>give you a best product!</span>
          </h1>
        </div>

        <div class="info-box">
          <div class="text-content">
            <p>
              Increase international business with us as we are recommended as
              highly reputed international trading company by our esteemed
              customers. Increase international business with us as we are
              recommended as highly reputed.
            </p>
          </div>
          <div class="image-illustration">
            <img src="/images/image10.png" alt="Team Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
