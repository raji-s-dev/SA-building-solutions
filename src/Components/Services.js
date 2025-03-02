import React from "react";
import { Link } from "react-router-dom";
import "./../Styles/Services.css";

//waterproofing images
import sump from "./../Assets/Ourservices/Waterproofing/sump.jpg";
import bathroom from "./../Assets/Ourservices/Waterproofing/bathroom.jpg";
import terrace from "./../Assets/Ourservices/Waterproofing/terrace.jpg";
import bituminous from "./../Assets/Ourservices/Waterproofing/bituminous.jpg";
import liftpit from "./../Assets/Ourservices/Waterproofing/liftpit.jpg";
import overheadtank from "./../Assets/Ourservices/Waterproofing/overhead tank.jpg";
import pressure from "./../Assets/Ourservices/Waterproofing/pressure.jpg";
import ejs from "./../Assets/Ourservices/Waterproofing/expansionjoint.jpg";

//structural repair images
import crack from "./../Assets/Ourservices/Structuralsolutions/crackrepair.jpg";
import buckling from "./../Assets/Ourservices/Structuralsolutions/bucklingrepair.jpg";
import micro from "./../Assets/Ourservices/Structuralsolutions/microConcrete.jpg"

//painting images
import interior from "./../Assets/Ourservices/painting/interior.jpg";
import exterior from "./../Assets/Ourservices/painting/exterior.jpg";
import protective from "./../Assets/Ourservices/painting/protectivecoating.jpg";
import roof from "./../Assets/Ourservices/painting/roof.jpg";
import textured from "./../Assets/Ourservices/painting/texturepaint.jpg";
import metal from "./../Assets/Ourservices/painting/metalwoodpaint.jpg";

const Services = () => {
  return (  
    <div id="services">
      <div className="servicetitle">
        <h2>Our services</h2>
        <h1 id="ws">Waterproofing Solutions</h1>
        <p>
          Explore our comprehensive range of waterproofing services designed to
          protect every part of your building from water damage and ensure
          long-lasting durability.
        </p>
      </div>

      <div className="servicecontainer">
        <div className="service">
          <div className="text">
            <h2 id="sump">Sump Waterproofing</h2>
            <p>
              Protect your sump areas from groundwater seepage with advanced
              waterproofing solutions. Our specialized coatings ensure dry,
              functional, and long-lasting sump structures.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#navbar" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={sump} alt="Sump Waterproofing" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={bathroom} alt="Bathroom Waterproofing" />
          </div>
          <div className="text">
            <h2 id="bathroom">Bathroom Waterproofing</h2>
            <p>
              Stop moisture from seeping through floors and walls, preventing
              mold growth and structural weakening. Our advanced techniques
              ensure a dry and damage-free bathroom.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#bathroom" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="terrace">Terrace Waterproofing</h2>
            <p>
              Shield your terrace from rainwater infiltration and weather damage
              with durable, leak-proof membranes. Our solutions enhance roof
              longevity and interior protection.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#terrace" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={terrace} alt="Terrace Waterproofing" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={bituminous} alt="Bituminous Waterproofing" />
          </div>
          <div className="text">
            <h2 id="bituminous">Bituminous Waterproofing</h2>
            <p>
              Protect surfaces with highly durable bituminous coatings, ideal
              for roofs, basements, and foundations. This method provides strong
              resistance against water penetration and harsh weather conditions,
              ensuring long-term reliability.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#bituminous" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="liftpit">Lift Pit Waterproofing</h2>
            <p>
              Eliminate water accumulation in small pits with efficient sealing
              techniques. This prevents dampness, seepage, and deterioration of
              surrounding structures.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#liftpit" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={liftpit} alt="Lift Pit Waterproofing" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={overheadtank} alt="Overhead tank Waterproofing" />
          </div>
          <div className="text">
            <h2 id="overhead">Overhead Tank Waterproofing</h2>
            <p>
              Prevent leaks and cracks in overhead tanks with high-performance
              waterproofing coatings. This protects against structural damage,
              water contamination, and long-term deterioration.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#overhead" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="pressure">Pressure/PU Grouting</h2>
            <p>
              Inject high-quality polyurethane grouting to seal cracks and
              voids, ensuring watertight, reinforced structures with superior
              protection.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#pressure" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={pressure} alt="Pressure/PU Grouting" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={ejs} alt="Expansion Joint Sealing " />
          </div>
          <div className="text">
            <h2 id="expansion">Expansion Joint Sealing</h2>
            <p>
              Seal structural joints to prevent water ingress and accommodate
              movement. Our solutions enhance durability, flexibility, and
              overall building stability.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#expansion" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="servicecontainer">
        <div className="servicetitle" style={{marginTop: "60px"}} >
          <h1 id="srs"> Structural Repair Services</h1>
          <p>
            Explore our comprehensive range of waterproofing services designed to protect every part of your building from water damage and ensure long-lasting durability.
          </p>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="crack">Crack Repair</h2>
            <p>
              Restore cracked walls, ceilings, and floors with high-strength repairs. Our solutions prevent further damage and maintain structural integrity.
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#crack" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={crack} alt="Crack Repair" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={buckling} alt="Buckling Repair (Columns & Beams)" />
          </div>
          <div className="text">
            <h2 id="buckling">Buckling Repair (Columns & Beams)</h2>
            <p>
              Strengthen weakened columns and beams affected by buckling or stress. Our expert reinforcement restores load-bearing capacity and safety
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#buckling" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="micro">Micro Concreting</h2>
            <p>
              Reinforce damaged structural elements with high-performance micro concrete. This ensures enhanced strength, durability, and long-term stability
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#micro" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={micro} alt="Micro Concreting" />
          </div>
        </div>
      </div>

      <div className="servicecontainer">
        <div className="servicetitle" style={{marginTop: "60px"}} >
          <h1 id="ps"> Painting Services (After Waterproofing)</h1>
          <p>
            Enhance and protect your space with expert painting solutions that add durability, 
            beauty, and moisture resistance. Our premium finishes ensure long-lasting protection and a flawless look for every surface
          </p>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={interior} alt="Interior" />
          </div>
          <div className="text">
            <h2 id="interior">Interior Painting</h2>
            <p>
              Enhance your interiors with smooth, high-quality finishes for walls and ceilings. Our expert painting ensures a fresh, refined, and long-lasting look
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#interior" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="exterior">Exterior Painting</h2>
            <p>
              Protect and beautify your building’s exterior with weather-resistant coatings. Our solutions safeguard against harsh elements while enhancing curb appeal
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#exterior" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={exterior} alt="Exterior" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={protective} alt="Protective" />
          </div>
          <div className="text">
            <h2 id="protective">Protective Coatings</h2>
            <p>
              Extend the life of your surfaces with moisture-resistant, durable coatings. These specialized treatments provide extra protection against wear and tear
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#protective" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="roof">Roof Painting</h2>
            <p>
              Apply heat-reflective and waterproof coatings to reduce temperature buildup and prevent leaks. This improves energy efficiency and roof longevity
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#roof" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={roof} alt="Roof Painting" />
          </div>
        </div>

        <div className="service reverse">
          <div className="image">
            <img src={textured} alt="Textured Painting" />
          </div>
          <div className="text">
            <h2 id="textured">Textured Painting</h2>
            <p>
              Add style and protection with decorative textured finishes. Our solutions create unique aesthetics while strengthening wall surfaces
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#textured" className="learn">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="text">
            <h2 id="metal">Metal & Wood Painting</h2>
            <p>
              Shield doors, windows, and other structures with protective coatings. Our paints prevent rust, decay, and long-term damage, ensuring lasting durability
            </p>
            <div className="buttons">
              <a href="#contact" className="book">
                Book Service
              </a>
              <Link to="/learnmore#metal" className="learn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="image">
            <img src={metal} alt="Metal and Wood Painting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
