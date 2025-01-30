import React from "react";
import HeroContent from "../sub/HeroContent";
import '../../app/styles/Hero.css'; 

const Hero = () => {
  return (
    <div className="hero-container" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="hero-video"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
