import React, { useEffect, useRef } from "react";
import "./../Styles/AboutUs.css";
import Companylogo from "./../Assets/Aboutus/Companylogo.png"; 
import constructionImage from "./../Assets/Aboutus/aboutus.jpg"; 

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return; // Prevent errors if ref is not assigned

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );

    const animatedElements = sectionRef.current.querySelectorAll(".fade-in-left");
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="parent" id="about" ref={sectionRef}>
      <div className="div1">
        <h2 className="fade-in-left">Who we are</h2>
        <div className="body-container">
          <img src={Companylogo} alt="Company Logo" className="aboutlogo" />
          <p className="fade-in-left">
            <strong>SA Building Solutions</strong> is a trusted expert in waterproofing and structural repair, 
            committed to protecting homes, businesses, and industrial properties from water damage and deterioration.
            With years of experience and a dedication to quality, we provide reliable, long-lasting solutions that ensure 
            the strength and durability of every structure.
          </p>
        </div>
      </div>
      <div className="div2">
        <h2 className="fade-in-left">What we do</h2>
        <div className="body-container">
          <p className="fade-in-left">
          SA Building Solutions ensures the safety and durability of your property through expert site inspections, customer-focused interactions, and precise problem analysis. We identify root causes and provide effective technical solutions for waterproofing, structural repair, and damage prevention. Using advanced techniques and quality materials, we deliver reliable, long-lasting results for homes, businesses, and industries. Trust us to protect your property with expert care
          </p>
        </div>
      </div>
      <div className="div3">
        <img className="about" src={constructionImage} alt="Construction Workers" />
      </div>
      <div className="div4">
        <h2 className="fade-in-left workexperiencetitle">Work experiences on</h2>
        <div className="work-experiences">
          <div className="fade-in-left">Sri Ramachandra Medical College</div>
          <div className="fade-in-left">Kauvery Hospitals</div>
          <div className="fade-in-left">Park Hyatt, Chennai</div>
          <div className="fade-in-left">Ramada, Chennai</div>
          <div className="fade-in-left">ETA Verde</div>
          <div className="fade-in-left">Chennai Citi Center - Multiplex</div>
          <div className="fade-in-left">SIMS Hospitals</div>
          <div className="fade-in-left">Mahindra World City, Chennai</div>
          <div className="fade-in-left">AMBIT IT Park</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
