import React, { useState } from "react";
import "./../Styles/Faq.css";

const faqData = [
  {
    question: "Why is waterproofing important for my property?",
    answer:
      "Waterproofing protects your building from water damage, leaks, and structural deterioration. It prevents issues like mold growth, cracks, and seepage, ensuring durability and long-term safety.",
  },
  {
    question: "Which areas of my property need waterproofing?",
    answer:
      "Key areas include terraces, bathrooms, balconies, sumps, overhead tanks, expansion joints, and structural cracks. Any surface exposed to water or moisture should be properly waterproofed.",
  },
  {
    question: "How long does waterproofing last?",
    answer:
      "The lifespan depends on the materials and methods used, but a professionally done waterproofing job can last 8–15 years. Regular maintenance enhances durability.",
  },
  {
    question: "What are the signs that my building needs structural repairs?",
    answer:
      "Common signs include cracks in walls, water seepage, peeling paint, damp patches, and buckling columns or beams. Early repair prevents further damage and costly fixes.",
  },
  {
    question: "How do I choose the right waterproofing solution?",
    answer:
      "Our experts assess your property and recommend customized waterproofing and repair solutions based on the specific needs, material quality, and environmental factors.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <p className="faq-subtitle">Got Questions? We've Got Answers!</p>

        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "1000px" : "0",
                padding: activeIndex === index ? "10px 15px" : "0 15px",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}

        <div className="faq-footer" id="number">
          <h3>Still have questions?</h3>
          <p>
            We're here to help! If you need more information or a personalized
            solution, feel free to reach out to our experts for guidance and
            support.
          </p>
          <a className="contact-btn" href="#contact" >Contact: 7397413355</a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
