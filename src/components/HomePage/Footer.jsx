import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="branding">
        <h2>Vault</h2>
        <p>
          The ultimate platform for turning coins into long-term gains.
          Stake, hold, and grow your assets with strategies designed for degen
          investors.
        </p>
      </div>
      <div className="footer-links">
        <a href="/about">About Product</a>
        <a href="/guide">Guide</a>
        <a href="/discord">Join Discord</a>
      </div>
    </footer>
  );
}

export default Footer;
