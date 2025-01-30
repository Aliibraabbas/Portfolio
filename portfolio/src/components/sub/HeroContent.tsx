"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import '../../app/styles/HeroContent.css'; // Importez le fichier CSS

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="hero-content-container"
    >
      <div className="hero-content-text">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box"
        >
          <SparklesIcon className="sparkles-icon" />
          <h1 className="welcome-text">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="hero-main-text"
        >
          <span>
            Providing
            <span className="highlight-text"> the best </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="hero-description"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="learn-more-btn"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hero-image-container"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
