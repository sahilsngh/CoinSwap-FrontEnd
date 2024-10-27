import React from "react";
import "./css/HeroSection.css";
import { BsController } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>
        <span className="highlight">Hodling</span> isn’t just a flex, <br />
        it is a <span className="highlight">Strategy</span>
      </h1>
      <div className="button-group">
        <button className="discord-button">
          <BsController className="icon" /> Discord
        </button>
        <button className="launch-button">
          Launch App <FaRocket className="icon" />
        </button>
      </div>
      <div className="icons-group">
        <img src="/path/to/doge.png" alt="Doge" /> {/* Replace with the actual paths for icons */}
        <img src="/path/to/other-icon.png" alt="Other Icon" />
      </div>
    </section>
  );
}

export default HeroSection;
