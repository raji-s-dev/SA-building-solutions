import React,{ useEffect, useRef } from "react";
import "./../Styles/WhyChooseUs.css";
import expertiseIcon from "./../Assets/Whychooseus/expertsolution.svg";
import reliabilityIcon from "./../Assets/Whychooseus/reliability.svg";
import sustainabilityIcon from "./../Assets/Whychooseus/sustainability.svg";
import professionalismIcon from "./../Assets/Whychooseus/professionalism.svg";


const WhyChooseUs = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const cards = sectionRef.current.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);



  return (
    <section className="wcucontainer"  ref={sectionRef}>
      <div className="header">
        <h2>Why Choose Us</h2>
        <p>
        At SA Building Solutions, quality is our priority. Our expert team identifies root causes with precision and delivers effective technical solutions. Backed by highly skilled labor and advanced engineering, we ensure durable and reliable results. With a 100% success rate, trust us for excellence in craftsmanship and long-lasting protection
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Expertise Solutions</h3>
          <p>
            Skilled professionals with extensive experience in waterproofing and
            structural repair
          </p>
          <img className="reliabilityicon" src={expertiseIcon} alt="Expertise Icon" />
        </div>
        <div className="card">
          <h3>Reliability</h3>
          <p>
            We use high-quality materials and advanced techniques to ensure
            long-term durability
          </p>
          <img src={reliabilityIcon} alt="Reliability Icon" />
        </div>
        <div className="card">
          <h3>Sustainability</h3>
          <p>Eco-friendly practices that prioritize environmental safety and structural durability</p>
          <img src={sustainabilityIcon} alt="Sustainability Icon" />
        </div>
        <div className="card">
          <h3>Professionalism</h3>
          <p>
            Commitment to timely project delivery with attention to detail and
            client satisfaction
          </p>
          <img src={professionalismIcon} alt="Professionalism Icon" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
