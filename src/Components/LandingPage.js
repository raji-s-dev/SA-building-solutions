import React, { useState, useEffect } from "react";

import "./../Styles/LandingPage.css";
import graph from "./../Assets/Landingpage/graph.svg";
import waterprotection from "./../Assets/Landingpage/waterprotection.svg";
import salogo from "./../Assets/Landingpage/slideshow/salogo.jpg";
import hardwork from "./../Assets/Landingpage/slideshow/hardwork.jpg";
import dedication from "./../Assets/Landingpage/slideshow/dedication.jpg";
import effort from "./../Assets/Landingpage/slideshow/effort.jpg";
import discipline from "./../Assets/Landingpage/slideshow/discipline.jpg";
import productivity from "./../Assets/Landingpage/slideshow/productivity.jpg";
import determination from "./../Assets/Landingpage/slideshow/determination.jpg";
import quality from "./../Assets/Landingpage/slideshow/quality.jpg";
import excellence from "./../Assets/Landingpage/slideshow/excellence.jpg";
import reliability from "./../Assets/Landingpage/slideshow/reliability.jpg";
import perfection from "./../Assets/Landingpage/slideshow/perfection.jpg";
import innovation from "./../Assets/Landingpage/slideshow/innovation.jpg";
import durability from "./../Assets/Landingpage/slideshow/durability.jpg";
import strength from "./../Assets/Landingpage/slideshow/strength.jpg";
import willpower from "./../Assets/Landingpage/slideshow/willpower.jpg";
import consistency from "./../Assets/Landingpage/slideshow/consistency.jpg";




const LandingPage = () => {
    
  const images = [salogo,hardwork, dedication, effort, discipline, productivity, determination, quality, excellence, reliability, perfection, innovation, durability, strength, willpower, consistency];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

   


  return (
    <div>
    <section className="hero">
      <div className="hero-content">
        <h1>
          Reliable technical solutions to{" "}
          <span>Prevent Water Leakages</span>
        </h1>
        <p>
          Expert services to protect your property from water leaks and ensure
          structural integrity
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary">
            Book Service
          </a>
          <a href="#number" className="btn secondary">
            Expert Consult
          </a>
        </div>
      </div>
    </section>

    <section className="stats">
      <div className="stat-card stat-card1">
      <img
            src={images[index]}
            alt="slideshow"
            className="slideshow-image"
          />

      </div>

      <div className="stat-card stat-card2">
        <h1>100+</h1>
        <p>Our Esteemed clients and partners</p>
      </div>

      <div className="stat-card stat-card3">
        <div className="file">
          <img src={graph} alt="Graph" />
        </div>
        <p className="title">Total Projects </p>
        <p className="value">1950+</p>
        <p className="increase">increase of 120 this month</p>
      </div>

      <div className="stat-card stat-card4">
        <h1>8+</h1>
        <p>Years of Dedicated Service</p>
      </div>

      <div className="stat-card stat-card5">
        <div className="file">
          <img src={waterprotection} alt="Water Protection" />
        </div>
        <h1>100%</h1>
        <p>Water Proofing Success Rate</p>
      </div>
    </section>
  </div>
);
};

export default LandingPage;
