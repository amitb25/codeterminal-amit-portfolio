import React from 'react';
import { motion } from 'framer-motion';

export default function WhatYouGet() {
  return (
    <section className="what-you-get section-dark" id="what-you-get">
      <div className="container" style={{ textAlign: 'center', padding: '40px 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label" style={{ marginBottom: '40px' }}>WHAT YOU GET</div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            maxWidth: '900px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--accent) 0%, #d4ff80 50%, var(--accent) 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer-text 3s ease-in-out infinite',
            letterSpacing: '-1px'
          }}>
            Transforming Ideas into<br /> Powerful Web Applications
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ marginTop: '30px', fontSize: '1.2rem', color: '#A1A1A1', maxWidth: '600px', margin: '30px auto 0', lineHeight: 1.7 }}
          >
            I'm a full stack developer passionate about building performant, scalable, and user-friendly digital products.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
