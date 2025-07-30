import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
    <div className="footer-top">
      <div className="logo-login">
        <div className="logo">Logo</div>
        <div className="auth-buttons">
          <a href="!" className="login">Login</a>
          <button className="signup">Sign Up</button>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-content">
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><a href="!">➞ Features</a></li>
            <li><a href="!">➞ Integration</a></li>
            <li><a href="!">➞ Roadmap</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="!">➞ About</a></li>
            <li><a href="!">➞ Term Of Services</a></li>
            <li><a href="!">➞ Privacy Policy</a></li>
            <li><a href="!">➞ Licenses & Regulation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Stay In Touch</h4>
          <p>Keep Updated!</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter Your Email" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 All Rights Reserved.</p>
      <div className="bottom-links">
        <a href="!">Term Of Service</a>
        <a href="!">Policy Service</a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
