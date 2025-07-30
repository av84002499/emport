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
              <a className="dropdown-item" href="#" onClick={handleLinkClick}>
                Another action
              </a>
              <a className="dropdown-item" href="#" onClick={handleLinkClick}>
                Something else here
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        {/* Desktop Search */}
        <div className="search-box desktop-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search here..." />
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
