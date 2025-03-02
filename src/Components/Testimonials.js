import React,{ useRef } from "react";
import "./../Styles/Testimonials.css";
import userPlaceholder1 from "./../Assets/Testimonials/user1.jpeg";
import userPlaceholder2 from "./../Assets/Testimonials/user2.jpeg";
import userPlaceholder3 from "./../Assets/Testimonials/user3.jpeg";
import userPlaceholder4 from "./../Assets/Testimonials/user4.jpeg";
import userPlaceholder5 from "./../Assets/Testimonials/user5.jpeg";
import userPlaceholder6 from "./../Assets/Testimonials/user6.jpeg";
import userPlaceholder7 from "./../Assets/Testimonials/user7.jpeg";
import userPlaceholder8 from "./../Assets/Testimonials/user8.jpeg";
import userPlaceholder9 from "./../Assets/Testimonials/user9.jpeg";
import userPlaceholder10 from "./../Assets/Testimonials/user10.jpeg";

const Testimonials = () => {


  

  

 

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="ttcontainer">
      <h2 className="testimonials-title">Our valuable Customer's Reviews</h2>
      <p className="testimonials-subtitle">
        Hear from our satisfied clients about how SA Building Solutions has helped protect and strengthen their properties.
      </p>

      </div>

      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <h3>Dhanishka Apartments</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "Exceptional expansion joint sealing! The team’s expertise 
            and quality materials provided a lasting solution to our leakage issues."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder1} alt="User" />
              <div className="author-info">
                <strong>Srinivasan</strong>
                <span>Secretary, kandigai</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <h3>Residential House</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐ <br></br>
            "Top-notch terrace waterproofing and spalling repair! The team ensured a leak-free surface and restored the damaged concrete perfectly."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder2} alt="User" />
              <div className="author-info">
                <strong>Er.R.Radhakrishnan</strong>
                <span>ICI Secretary, Chennai</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <h3>Selvi Constructions</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "Er.Harikrishnan is the technical consultant and waterproofing solution provider, ensuring high-quality, long-lasting protection. The team’s expertise delivered excellent results for our projects."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder3} alt="User" />
              <div className="author-info">
                <strong>Er.Ravindran</strong>
                <span>Selaiyur, Chennai</span>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-card">
            <h3>Urban Housing Infra</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "SA Building Solutions provided top-notch waterproofing and structural repair services, ensuring long-lasting protection and durability for our project."</p>
            <div className="testimonial-author">
              <img src={userPlaceholder4} alt="User" />
              <div className="author-info">
                <strong>Er.Prabu Narayanan</strong>
                <span>Avadi, Chennai</span>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="testimonial-card">
            <h3>Conc. Structurals</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "With expert waterproofing and crack repair solutions, SA Building Solutions delivered exceptional results, enhancing the strength and resilience of our structures."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder5} alt="User" />
              <div className="author-info">
                <strong>Er.Muhammad Azhardeen</strong>
                <span>MountRoad, chennai</span>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="testimonial-card">
            <h3>Komfy Nest</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "From terrace waterproofing to structural repairs, SA Building Solutions executed every service with precision and professionalism, ensuring superior quality."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder6} alt="User" />
              <div className="author-info">
                <strong>Er.Karthick</strong>
                <span>Adangalur Gate, Rasipuram</span>
              </div>
            </div>
          </div>

          {/* Testimonial 7 */}
          <div className="testimonial-card">
            <h3>Kumar Builders</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "SA Building Solutions offered comprehensive waterproofing and repair solutions, significantly improving the durability and safety of our construction."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder7} alt="User" />
              <div className="author-info">
                <strong>Er.Tamizh Arasan</strong>
                <span>Sankaraburam, Kallakurichi</span>
              </div>
            </div>
          </div>

          {/* Testimonial 8 */}
          <div className="testimonial-card">
            <h3>Conc. Structurals</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "From terrace waterproofing to crack repairs, SA Building Solutions delivered outstanding service with top-quality materials. Our project is now well-protected and durable."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder8} alt="User" />
              <div className="author-info">
                <strong>Er.NaveenKumar</strong>
                <span>MountRaod, Chennai</span>
              </div>
            </div>
          </div>

          {/* Testimonial 9 */}
          <div className="testimonial-card">
            <h3>Sri Arudhra Constructions</h3>
            <p className="testimonial-text">
            ⭐⭐⭐⭐⭐<br></br>
            "Being near the seashore, our project faced severe corrosion issues. SA Building Solutions provided expert technical solutions, ensuring long-term protection and durability."
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder9} alt="User" />
              <div className="author-info">
                <strong>Er.Santhosh</strong>
                <span>Nagapattinam, TamilNadu</span>
              </div>
            </div>
          </div>

          {/* Testimonial 10 */}
          <div className="testimonial-card">
            <h3>Sapthagiri Constructions</h3>
            <p className="testimonial-text">
            "SA Building Solutions' professional waterproofing and structural repair services added strength and longevity to our buildings. Highly reliable and efficient team!"
            </p>
            <div className="testimonial-author">
              <img src={userPlaceholder10} alt="User" />
              <div className="author-info">
                <strong>Manikandan</strong>
                <span>Ballari,karnataga</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;