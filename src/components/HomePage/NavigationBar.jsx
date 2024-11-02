import React from "react";
import { FaHome, FaUsers, FaChartBar, FaBook, FaInfoCircle } from "react-icons/fa";
// import { BsController } from "react-icons/bs";
import "./css/NavigationBar.css";
// import "./NavigationBar.css";
import img1 from '../../assest/logo.svg';
import img2 from '../../assest/discord.svg';


function NavigationBar() {
  return (  
    <div className="header">
    
      <nav className="navigation-bar">
      <div className="logomenu">
        <div className="logo">
         <img src={img1} alt="Vault" className="navbar-image" />
        <div>
           <b className="tex-align">Vault</b>
        </div>
        </div>
        <div className="menu-items">
          <a href="/" className="menu-item">
            <FaHome className="icon" /> Home
          </a>
          <a href="/admin" className="menu-item">
            <FaUsers className="icon" /> Admin
          </a>
          <a href="/analytics" className="menu-item">
            <FaChartBar className="icon" /> Analytics
          </a>
          <a href="/guide" className="menu-item">
            <FaBook className="icon" /> Guide
          </a>
          <a href="/about" className="menu-item">
            <FaInfoCircle className="icon" /> About
          </a>
        </div>
        </div>
       
      </nav>
      <div className="discord-icon">
          <a href="/discord">
          {/* <img src="/public/Center-Logo.svg" alt="" className="icon" /> */}
          <img src={img2} alt="Vault" className="discover-image" />
          </a>
        </div>  
    </div>
  );
}

export default NavigationBar;
