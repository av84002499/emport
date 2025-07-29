import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
            <section className="aboutpage">
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

        <div className="about-image">
          <img
            src="/images/image3.png"
            alt="Global Trade Visual"
            className="hero-image"
          />
        </div>
      </section>
    </div>
  )
}

export default About
