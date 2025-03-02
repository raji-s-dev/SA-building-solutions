import React, { useEffect, useRef } from "react";
import "./../Styles/Footer.css";
import logo from "./../Assets/Footer/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const footerElements = footerRef.current.querySelectorAll(".column, .footer-bottom");
    footerElements.forEach((element) => observer.observe(element));

    return () => {
      footerElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="footer-container">
        {/* Left Section: Logo */}
        <div className="footer-logo">
          <img src={logo} alt="SA Building Solutions" />
          <div className="fcontact">
          <h4>Contact</h4>
          <ul>
              <li><a href="#contact">7397413355 / 9345949576</a></li>
              <li><a href="#contact"> sabuildingsolutions2021@gmail.com</a></li>
          </ul> 
          </div> 
        </div>

        {/* Middle Section: Links */}
        <div className="footer-links">
          <div className="column">
            <h4>Water Proofing</h4>
            <ul>
              <li><a href="#sump">Sump Waterproofing</a></li>
              <li><a href="#bathroom">Bathroom Waterproofing</a></li>
              <li><a href="#terrace">Terrace Waterproofing</a></li>
              <li><a href="#bituminous">Bituminous Waterproofing</a></li>
              <li><a href="#liftpit">Lift Pit Waterproofing</a></li>
              <li><a href="#overhead">Overhead Tank</a></li>
              <li><a href="#pressure">Pressure / PU Grouting</a></li>
              <li><a href="#expansion">Expansion Joint</a></li>
            </ul>
          </div>

          <div className="column">
            <h4>Structural Repair</h4>
            <ul>
              <li><a href="#crack">Crack Repair</a></li>
              <li><a href="#buckling">Buckling Repair (Columns & Beams)</a></li>
              <li><a href="#micro">Micro Concreting</a></li>
            </ul>
          </div>

          <div className="column">
            <h4>Painting Services</h4>
            <ul>
              <li><a href="#interior">Interior Painting</a></li>
              <li><a href="#exterior">Exterior Painting</a></li>
              <li><a href="#protective">Protective Coatings</a></li>
              <li><a href="#roof">Roof Painting</a></li>
              <li><a href="#textured">Textured Painting</a></li>
              <li><a href="#metal">Metal & Wood Painting</a></li>
            </ul>
          </div>
        </div>

        <div className="column">
            <h4 >Quick Links</h4>
            <ul>
              <li ><a href="#about">About Us</a></li>
              <li ><a href="#services">Services</a></li>
              <li ><a href="#testimonials">Testimonials</a></li>
              <li ><a href="#contact">Contact Us</a></li>
              
            </ul>
          </div>

        {/* Right Section: Social Media */}
        <div className="column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61567334670270&name=xhp_nt_fbaction_open_user"><FaFacebook className="fa-facebook"/> Facebook</a>
            <a href="https://www.instagram.com/sa_building_solutions_/?hl=en"><FaInstagram className="fa-instagram" /> Instagram</a>
            <a href="https://x.com/sabuildingsol"><FaTwitter className="fa-twitter"/> X</a>
            <a href="https://www.linkedin.com/in/sa-building-solutions-undefined-636237354?trk=contact-info"><FaLinkedin className="fa-linkedin" /> LinkedIn</a>
            <a href="https://www.youtube.com/@SABuildingSolutions"><FaYoutube className="fa-youtube" /> YouTube</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2024 SA Building Solutions. All rights reserved.</p>
        <div className="footer-policy">
        <Link to="/legal-info">Privacy Policy</Link>
        <Link to="/legal-info" id="terms">Terms and Service</Link>
        <Link to="/legal-info">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
