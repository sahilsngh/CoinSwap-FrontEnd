import React from "react";
import { FaHome, FaUsers, FaChartBar, FaBook, FaInfoCircle } from "react-icons/fa";
// import { BsController } from "react-icons/bs";
import "./css/NavigationBar.css";
// import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="header">
      <nav className="navigation-bar">
        <div className="logo">
          <img src="/public/center-logo.svg" alt="" />
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
        <div className="discord-icon">
          <a href="/discord">
          {/* <img src="/public/Center-Logo.svg" alt="" className="icon" /> */}
          <img height={50} src="/test.png" alt="" className="icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
