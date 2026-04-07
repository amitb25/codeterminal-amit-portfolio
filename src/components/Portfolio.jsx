import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    date: '2025',
    client: 'ShopEase',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/work1.jpg',
    bg: '#000000',
  },
  {
    title: 'Task Management App',
    date: '2024',
    client: 'TechNova',
    tags: ['Next.js', 'PostgreSQL', 'Socket.io'],
    image: '/work2.jpg',
    bg: '#0e0e0e',
  },
  {
    title: 'Portfolio Website',
    date: '2024',
    client: 'Code Terminal',
    tags: ['React', 'Framer Motion', 'Vite'],
    image: '/work1.jpg',
    bg: '#131313',
  },
];

function WhatYouGetHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '40px' }}
    >
      <div className="section-label" style={{ marginBottom: '10px' }}>WHAT YOU GET</div>
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
        style={{ fontSize: '1.2rem', color: '#A1A1A1', maxWidth: '600px', margin: '15px auto 0', lineHeight: 1.7, paddingBottom: 0 }}
      >
        I'm a full stack developer passionate about building performant, scalable, and user-friendly digital products.
      </motion.p>
    </motion.div>
  );
}

function CardContent({ project, isFirst }) {
  return (
    <>
      {isFirst && <WhatYouGetHeader />}
      <div className="portfolio-glow"></div>
      <div className="portfolio-top">
        <span className="portfolio-label">MY WORK</span>
        <h2 className="portfolio-title">{project.title}</h2>
      </div>
      <div className="portfolio-center">
        <div className="portfolio-side portfolio-left">
          <div className="portfolio-meta">
            <span className="portfolio-meta-text">DATE: {project.date}</span>
            <div className="portfolio-meta-line"></div>
          </div>
          <button className="portfolio-nav-btn"><ChevronLeft size={18} /></button>
        </div>
        <div className="portfolio-image-wrap">
          <img src={project.image} alt={project.title} className="portfolio-image" />
        </div>
        <div className="portfolio-side portfolio-right">
          <div className="portfolio-meta">
            <span className="portfolio-meta-text">{project.client.toUpperCase()}</span>
            <div className="portfolio-meta-line"></div>
          </div>
          <button className="portfolio-nav-btn"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="portfolio-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="portfolio-tag">{tag}</span>
        ))}
      </div>
    </>
  );
}

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      {/* Mobile: separate card for WHAT YOU GET */}
      {isMobile && (
        <div
          className="pf-stack-card"
          style={{ zIndex: 1, background: '#000000' }}
        >
          <WhatYouGetHeader />
        </div>
      )}

      {projects.map((project, i) => (
        <div
          key={i}
          className="pf-stack-card"
          style={{ zIndex: isMobile ? i + 2 : i + 1, background: project.bg }}
        >
          <CardContent project={project} isFirst={!isMobile && i === 0} />
        </div>
      ))}
    </section>
  );
}
