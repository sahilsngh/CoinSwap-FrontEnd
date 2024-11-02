import React from "react";
import "./css/Footer.css";
import img10 from '../../assest/vault.svg'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-item col-lg-12">
      <div className="branding col-lg-6">
      <img src={img10} alt="Vault" className="f-image" /> 
     </div>
      <div className="footer-links col-lg 6">
      <h3>Product</h3>
        <a href="/about">About Product</a>
        <a href="/guide">Guide</a>
        <a href="/discord">Join Discord</a>
      </div>
      </div>
      <div className="copyrights">
        <p>2024 metaborog all rights reserved  </p>
      </div>
    </footer>
  
  );
}

export default Footer;
