import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Prevent background scrolling on mobile when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="/images/image1.png" alt="Logo" className="logo" />
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="Home" onClick={handleLinkClick}>
          Home
        </a>

        <a href="Product" onClick={handleLinkClick}>
          Product
        </a>

        <a href="Team" onClick={handleLinkClick}>
          Our Team
        </a>
        <a href="Contact" onClick={handleLinkClick}>
          Contact Us
        </a>
        
         <div className="dropdown" onClick={() => toggleDropdown("services2")}>
          <button className="btn">
            Company <FaChevronDown />
          </button>
          {activeDropdown === "services2" && (
            <div className="dropdown-menu show">
              <a className="dropdown-item" href="About" onClick={handleLinkClick}>
                About Us
              </a>
              <a className="dropdown-item" href="Certification" onClick={handleLinkClick}>
                Certification
              </a>
            </div>
          )}
          
        </div>
         <a href="Auth" onClick={handleLinkClick}>
           Authentication
        </a>
      </div>

      
       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
      <span>Login</span>
    </div>
    </header>
  );
};

export default Navbar;
