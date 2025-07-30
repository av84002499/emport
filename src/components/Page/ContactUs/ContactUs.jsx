import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="form-container">
          <h2>
            Get In <span className="highlight">Touch</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Quasi, dicta necessitatibus
          </p>

          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone No." required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>

          <div className="social-icons">
            <a href="!"><i className="bi bi-facebook"></i></a>
            <a href="!"><i className="bi bi-whatsapp"></i></a>
            <a href="!"><i className="bi bi-linkedin"></i></a>
            <a href="!"><i className="bi bi-instagram"></i></a>
            <a href="!"><i className="bi bi-twitter"></i></a>
          </div>
        </div>

        <div className="map-container">
         <iframe
  title="Google Maps location of Lucknow"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.447001240816!2d80.92669459999999!3d26.8466937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a05c46f21b%3A0x586fd64c6c2ce36f!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>

        </div>
      </section>
    </div>
  );
};

export default Contactus;
