import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./../Styles/ContactForm.css";
import contact from "./../Assets/Contactus/contact.jpg"


const ContactForm = () => {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xv6cytv", // Replace with your EmailJS Service ID
        "template_np39nkr", // Replace with your EmailJS Template ID
        form.current,
        "qTdqlo1u-2d4xs1o6" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset form after successful submission
          setConfirmationMessage("✅ Form submitted successfully! Our team will contact you soon.");

          // Hide message after 10 seconds
          setTimeout(() => {
            setConfirmationMessage("");
          }, 10000);
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
          setConfirmationMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Get in Touch with SA Building Solutions</p>

        

        <form ref={form} onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                pattern="[A-Za-z\s]+" 
                title="Name should only contain alphabets." 
                required 
              />
            </div>
            <div className="input-field">
              <label>Phone number</label>
              <input 
                type="text" 
                name="phone" 
                placeholder="Enter your phone number" 
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-field">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required
              />
            </div>
            <div className="input-field">
              <label>Place</label>
              <input 
                type="text" 
                name="place" 
                placeholder="City/Area" 
                required 
              />
            </div>
          </div>

          <div className="radio-group">
            <label>Construction Type</label>
            <div className="radio-options">
              <input type="radio" id="repair" name="constructionType" value="Repair" required />
              <label htmlFor="repair">New Construction</label>

              <input type="radio" id="renovation" name="constructionType" value="Renovation" required />
              <label htmlFor="renovation">Repair</label>
            </div>
          </div>

          <div className="input-field">
            <label> Briefly Describe Your Project</label>
            <textarea 
              name="message" 
              placeholder="Tell us about your Service needs..."
              required
            ></textarea>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I accept the <a href="#terms">Terms</a></label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
          {/* Confirmation Message */}
        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
        </form>
      </div>
      <div className="contact-image"> <img src={contact} alt="contact"></img></div>
    </div>
  );
};

export default ContactForm;
