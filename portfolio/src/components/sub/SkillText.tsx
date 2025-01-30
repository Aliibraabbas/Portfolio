"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/app/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import '../../app/styles/SkillText.css'; // Importez le fichier CSS

const SkillText = () => {
  return (
    <div className='skill-text-container'>
      <motion.div
        variants={slideInFromTop}
        className="welcome-box"
      >
        <SparklesIcon className="sparkles-icon" />
        <h1 className="welcome-text">
          Think better with Next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='main-text'
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive-text'
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillText
