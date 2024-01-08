import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__about">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nibh ac nisl imperdiet efficitur.
          </p>
        </div>
        <div className="footer__social">
          <h3>Connect With Me</h3>
          <div className="footer__social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>&copy; 2024 lipa Best. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
