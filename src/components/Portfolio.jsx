import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    date: '2025',
    client: 'ShopEase',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/work1.jpg',
  },
  {
    title: 'Task Management App',
    date: '2024',
    client: 'TechNova',
    tags: ['Next.js', 'PostgreSQL', 'Socket.io'],
    image: '/work2.jpg',
  },
  {
    title: 'Portfolio Website',
    date: '2024',
    client: 'Code Terminal',
    tags: ['React', 'Framer Motion', 'Vite'],
    image: '/work1.jpg',
  },
];

function ProjectCard({ project, index, totalProjects }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.88]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div
      ref={cardRef}
      className="portfolio-card-wrapper"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="portfolio-card"
        style={index < totalProjects - 1 ? { scale, y } : {}}
      >
        {/* Glow */}
        <div className="portfolio-glow"></div>

        {/* Top */}
        <div className="portfolio-top">
          <span className="portfolio-label">MY WORK</span>
          <h2 className="portfolio-title">{project.title}</h2>
        </div>

        {/* Center */}
        <div className="portfolio-center">
          {/* Left */}
          <div className="portfolio-side portfolio-left">
            <div className="portfolio-meta">
              <span className="portfolio-meta-text">DATE: {project.date}</span>
              <div className="portfolio-meta-line"></div>
            </div>
            <button className="portfolio-nav-btn">
              <ChevronLeft size={18} />
            </button>
          </div>

          {/* Image */}
          <div className="portfolio-image-wrap">
            <img src={project.image} alt={project.title} className="portfolio-image" />
          </div>

          {/* Right */}
          <div className="portfolio-side portfolio-right">
            <div className="portfolio-meta">
              <span className="portfolio-meta-text">{project.client.toUpperCase()}</span>
              <div className="portfolio-meta-line"></div>
            </div>
            <button className="portfolio-nav-btn">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="portfolio-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="portfolio-tag">{tag}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
          index={i}
          totalProjects={projects.length}
        />
      ))}
    </section>
  );
}
