import React from "react";
import { Home, Users, BarChart2, BookOpen, Info } from 'lucide-react';
import { BsController } from "react-icons/bs";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./css/NavigationBar.css";
// import "./NavigationBar.css";

function NavigationBar() {
  return (
    <header style = {{backgroundColor: 'rgba(52, 52, 52, 0.1)'}} className="header">
      <div className="logo">
        <img src="/logo/logo.svg" alt="Vault Logo" className="logo-img" />
        <span className="logo-text">Vault</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-item"><Home size={18} /> Home</a>
        <a href="#" className="nav-item"><Users size={18} /> Admin</a>
        <a href="#" className="nav-item"><BarChart2 size={18} /> Analytics</a>
        <a href="#" className="nav-item"><BookOpen size={18} /> Guide</a>
        <a href="#" className="nav-item"><Info size={18} /> About</a>
      </nav>
      <div className="actions">
        <button className="discord-button">
          <img src="/logo/discord.svg" alt="Discord" className="discord-icon" />
        </button>
        <ConnectButton />
      </div>
    </header>
  );
}

export default NavigationBar;
