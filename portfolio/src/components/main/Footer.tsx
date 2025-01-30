import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import '../../app/styles/Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-title">Community</div>
          <p className="footer-link">
            <FaYoutube />
            <span className="footer-link-text">Youtube</span>
          </p>
          <p className="footer-link">
            <RxGithubLogo />
            <span className="footer-link-text">Github</span>
          </p>
          <p className="footer-link">
            <RxDiscordLogo />
            <span className="footer-link-text">Discord</span>
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-title">Social Media</div>
          <p className="footer-link">
            <FaYoutube />
            <span className="footer-link-text">Instagram</span>
          </p>
          <p className="footer-link">
            <RxGithubLogo />
            <span className="footer-link-text">Twitter</span>
          </p>
          <p className="footer-link">
            <RxDiscordLogo />
            <span className="footer-link-text">Linkedin</span>
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-title">About</div>
          <p className="footer-link">
            <span className="footer-link-text">Become Sponsor</span>
          </p>
          <p className="footer-link">
            <span className="footer-link-text">Learning about me</span>
          </p>
          <p className="footer-link">
            <span className="footer-link-text">mifwebchain@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; WebChain Dev 2023 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
