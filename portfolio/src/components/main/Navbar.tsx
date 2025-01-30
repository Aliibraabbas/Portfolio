import { Socials } from "@/app/constants";
import Image from "next/image";
import React from "react";
import '../../app/styles/navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <a href="#about-me" className="navbar-logo">
          <span className="navbar-logo-text">Portfolio</span>
        </a>

        <div className="navbar-links">
          <div className="navbar-links-container">
            <a href="#about-me" className="navbar-link">
              About me
            </a>
            <a href="#skills" className="navbar-link">
              Skills
            </a>
            <a href="#projects" className="navbar-link">
              Projects
            </a>
            <a href="/contact" className="navbar-link">
             Contact
            </a>
          </div>
        </div>

        <div className="navbar-socials">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="navbar-social-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
