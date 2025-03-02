import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./../Pages/LegalInfo.css";

const LegalInfo = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="legal-container">
        <section className="legal-section">
          <h2>Privacy Policy</h2>
          <p><strong>Last Updated:</strong> [Date]</p>
          <p>
            SA Building Solutions ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
          </p>
          <h3>1. Information We Collect</h3>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and any details you provide through our contact forms.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies to enhance user experience.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on our website, and interactions with content.</li>
          </ul>
          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>To provide and improve our waterproofing and structural repair services.</li>
            <li>To respond to inquiries and customer support requests.</li>
            <li>To send updates, promotions, or service-related communications (if you opt-in).</li>
            <li>To analyze website performance and improve user experience.</li>
          </ul>
        </section>
        
        <section className="legal-section">
          <h2>Terms of Service</h2>
          <p><strong>Effective Date:</strong> 2024</p>
          <h3>1. Use of Our Website</h3>
          <ul>
            <li>You must be at least 18 years old to use our website.</li>
            <li>You agree to use the website only for lawful purposes.</li>
            <li>You will not attempt to hack, disrupt, or misuse our website.</li>
          </ul>
          <h3>2. Services Provided</h3>
          <p>We offer waterproofing and structural repair solutions. Any service descriptions on our website are for informational purposes and may be subject to changes.</p>
        </section>
        
        <section className="legal-section">
          <h2>Cookies Settings</h2>
          <h3>1. Essential Cookies</h3>
          <p>These cookies are necessary for website functionality and cannot be disabled.</p>
          <h3>2. Performance Cookies</h3>
          <p>These cookies help us analyze website traffic and improve user experience.</p>
          <h3>3. Marketing Cookies</h3>
          <p>We use these cookies for targeted advertising and promotional content.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LegalInfo;
