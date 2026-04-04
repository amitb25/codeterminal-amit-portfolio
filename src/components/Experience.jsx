import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const cards = [
  {
    date: '2024 - Present',
    title: 'Full Stack Developer',
    tags: ['React', 'Node.js', 'Laravel'],
    num: '01',
  },
  {
    date: '2024 - Present',
    title: 'App Developer',
    tags: ['React Native', 'Supabase'],
    num: '02',
  },
  {
    date: '2023 - Present',
    title: 'AI-Powered Development',
    tags: ['Claude', 'Cursor', 'Antigravity'],
    num: '03',
  },
];

const DURATION = 5000;

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = null;
    let animId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        setActiveIndex((prev) => (prev + 1) % cards.length);
        start = null;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [activeIndex]);

  return (
    <section className="experience section-dark" id="experience">
      <div className="container container-bento">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="section-label"
        >
          EXPERIENCE
        </motion.div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="section-heading"
        >
          Building scalable web applications with modern technologies and clean architecture.
        </motion.h2>

        <div className="exp-cards">
          {cards.map((card, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={card.num}
                className={`exp-card ${isActive ? 'exp-card-active' : ''}`}
                layout
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="exp-card-header">
                  <span className="exp-date">{card.date}</span>
                  {isActive && (
                    <motion.span
                      className="exp-icon"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      ✦
                    </motion.span>
                  )}
                </div>
                <h3 className="exp-title">{card.title}</h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="exp-tags"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="exp-card-footer">
                  <span className="exp-num">{card.num}</span>
                </div>
                <div className="exp-progress-track">
                  {isActive && (
                    <motion.div
                      className="exp-progress-fill"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
