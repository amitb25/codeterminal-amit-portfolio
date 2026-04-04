import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 60, filter: 'blur(8px)' },
    visible: {
      opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const name1 = "Amit".split("");
  const name2 = "Balapure".split("");

  return (
    <header className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-bg-grid"></div>
        <div className="hero-bg-orb"></div>
      </div>
      <div className="container hero-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="hero-content"
          style={{ perspective: "1200px" }}
        >
          <h1 className="hero-title">
            <span className="first-name">
              <motion.span variants={letterVariants} className="greeting">
                <span className="greeting-line"></span>
                Hello My Name Is
              </motion.span>
              {name1.map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="hero-letter">{char}</motion.span>
              ))}
            </span>
            <motion.div className="name-divider" variants={lineVariants} />
            <span className="last-name">
              {name2.map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="hero-letter">{char}</motion.span>
              ))}
            </span>
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Full Stack Developer &bull; App Developer &bull; AI-Powered Builder
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hero-image-wrap"
        >
          <div className="hero-image-glow"></div>
          <motion.video
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/hero-avatar.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="portrait-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hero-actions container"
      >
        <div className="scroll-ind">
          Scroll down &darr;
        </div>
        <div className="action-buttons">
          <a href="#portfolio" className="btn btn-dark">
            View My Works
            <span className="btn-icon">&rarr;</span>
          </a>
          <a href="#contact" className="btn btn-light">
            Contact Me
            <span className="btn-icon">&rarr;</span>
          </a>
        </div>
      </motion.div>
    </header>
  );
}
