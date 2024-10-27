import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer style = {{backgroundColor: 'rgba(52, 52, 52, 0.1)'}} className="footer">
      <div className="content">
        <div className="branding">
          <img src="/logo/bottom-left-logo.svg" alt="Vault Logo" className="logo" />
          {/* <h2>Vault</h2>
          <p>The ultimate platform for turning coins into long-term gains.</p>
          <p>Stake, hold, and grow your assets with strategies designed for degen investors</p> */}
        </div>
        <div className="links">
          <h3>Product</h3>
          <ul>
            <li><a href="#">About product</a></li>
            <li><a href="#">Guide</a></li>
            <li><a href="#" className="discord-link">
              Join Discord <img src="/logo/discord.svg" alt="Discord" className="discord-icon" />
            </a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        2024 @metaborong all rights reserved
      </div>
    </footer>
  );
}

export default Footer;