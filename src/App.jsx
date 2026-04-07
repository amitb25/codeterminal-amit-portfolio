import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Numeric from './components/Numeric';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);
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

    // Back to top visibility
    const handleScroll = () => {
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        setShowBackToTop(rect.top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
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

      <div className="noise-overlay" />

      {!loading && (
        <div className="app-content-fade">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Experience />
            <Services />
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
