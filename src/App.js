import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import AboutUs from "./Components/AboutUs";
import WhyChooseUs from "./Components/WhyChooseUs";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import LegalInfo from "./Pages/LegalInfo";
import Learnmore from "./Pages/Learnmore"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        {/* Home Page with all components */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <AboutUs />
              <WhyChooseUs />
              <Services />
              <Testimonials />
              <Faq />
              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* Legal Info Page */}
        <Route path="/legal-info" element={<LegalInfo />} />
        <Route path="/learnmore" element={<Learnmore />} />
        
      </Routes>
    </Router>
  );
}

export default App;
