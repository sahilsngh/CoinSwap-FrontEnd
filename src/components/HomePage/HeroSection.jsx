import React from "react";
import "./css/HeroSection.css";
import { BsController } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import img3 from '../../assest/holding.svg'
import img4 from '../../assest/flex,.png';
import img5 from '../../assest/it.png';
import img6 from '../../assest/strategy.svg'; 
import img7 from '../../assest/discord.svg';
import img8 from '../../assest/launchapp.svg';
import img9 from '../../assest/logo.svg';


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="banner"> 
      <img src={img3} alt="Vault" className="" /> 
      <img src={img4} alt="Vault" className="" />
      </div>
      <div className="banner"> 
      <img src={img5} alt="Vault" className="" />
      <img src={img6} alt="Vault" className="" />
      </div>
      <div className="button-group">
        <button className="couple-btn">
        <img src={img7} alt="Vault" className="" />
        </button>
        <button className="couple-btn">
        <img src={img8} alt="Vault" className="" />
        </button>
      </div>
      <div className="icons-group">
      <img src={img9} alt="Vault" className="" />
      </div>
    </section>
  );
}

export default HeroSection;
