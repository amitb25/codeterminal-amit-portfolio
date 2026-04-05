import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    date: '2025',
    client: 'ShopEase',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/work1.jpg',
    bg: '#0a0a0a',
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

function CardContent({ project }) {
  return (
    <>
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

  if (isMobile) {
    return (
      <section className="portfolio-section" id="portfolio">
        {projects.map((project, i) => (
          <div key={i} className="portfolio-card-wrapper">
            <div className="portfolio-card">
              <CardContent project={project} />
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="portfolio-section" id="portfolio">
      {projects.map((project, i) => (
        <div
          key={i}
          className="pf-stack-card"
          style={{ zIndex: i + 1, background: project.bg }}
        >
          <CardContent project={project} />
        </div>
      ))}
    </section>
  );
}
