import React, { useState } from "react";
import "./../Styles/Navbar.css";
import companylogo from "./../Assets/Navigationbar/Companylogo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <img src={companylogo} alt="SA Building Solutions Logo" />
        <span>SA Building Solutions</span>
      </div>

     

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
       
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="navbutton">
        <a href="#contact" className="button">Book Service</a>
      </div>
    </nav>
  );
}

export default Navbar;
