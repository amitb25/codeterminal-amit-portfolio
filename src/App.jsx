import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Services from './components/Services';
import WhatYouGet from './components/WhatYouGet';
import Portfolio from './components/Portfolio';
import Numeric from './components/Numeric';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Preloader timer
    const timer = setTimeout(() => setLoading(false), 2200);

    // Smooth scrolling
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Mouse position
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Magnetic button effect
    const magneticElements = document.querySelectorAll('.magnetic-element');
    const handleMagneticMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    const handleMagneticLeave = (e) => {
      e.currentTarget.style.transform = 'translate(0, 0)';
    };

    magneticElements.forEach(el => {
      el.addEventListener('mousemove', handleMagneticMove);
      el.addEventListener('mouseleave', handleMagneticLeave);
    });

    // Cursor grow on hoverable elements
    const hoverTargets = document.querySelectorAll('a, button, .work-item, .premium-card');
    const enterHover = () => setCursorVariant('hover');
    const leaveHover = () => setCursorVariant('default');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', enterHover);
      el.addEventListener('mouseleave', leaveHover);
    });

    // Back to top visibility
    const handleScroll = () => {
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        setShowBackToTop(rect.top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
      magneticElements.forEach(el => {
        el.removeEventListener('mousemove', handleMagneticMove);
        el.removeEventListener('mouseleave', handleMagneticLeave);
      });
      hoverTargets.forEach(el => {
        el.removeEventListener('mouseenter', enterHover);
        el.removeEventListener('mouseleave', leaveHover);
      });
    };
  }, [loading]);

  return (
    <>
      {/* Premium Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="preloader"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div className="preloader-content">
              <motion.div
                className="preloader-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="preloader-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Amit Balapure
              </motion.span>
              <motion.span
                className="preloader-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Portfolio
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <div
        className={`cursor-dot ${cursorVariant === 'hover' ? 'cursor-hover' : ''}`}
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div
        className={`cursor-outline ${cursorVariant === 'hover' ? 'cursor-outline-hover' : ''}`}
        style={{ left: mousePos.x, top: mousePos.y, transition: 'all 0.15s ease-out' }}
      />
      <div className="noise-overlay" />

      {!loading && (
        <div className="app-content-fade">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Experience />
            <Services />
            <WhatYouGet />
            <Portfolio />
            <Numeric />
            <Testimonials />
            <Skills />
            <Pricing />
            <FAQ />
            <Footer />
          </main>
        </div>
      )}

      <AnimatePresence>
        {showBackToTop && (
          <motion.a
            href="#home"
            className="back-to-top-float"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
