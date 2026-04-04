import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const servicesList = [
  {
    num: "01.",
    title: "Frontend Development",
    tags: ["REACT", "NEXT.JS", "TAILWIND"],
    desc: "Building responsive, high-performance user interfaces with React, Next.js, and modern CSS frameworks that deliver exceptional user experiences.",
  },
  {
    num: "02.",
    title: "App Development",
    tags: ["REACT NATIVE", "SUPABASE", "EXPO"],
    desc: "Building cross-platform mobile applications with React Native, powered by Supabase for real-time databases and authentication.",
  },
  {
    num: "03.",
    title: "Backend & Deployment",
    tags: ["LARAVEL", "NODE.JS", "RAILWAY", "RENDER", "VERCEL", "HOSTINGER"],
    desc: "Developing robust backend APIs with Node.js and Laravel, deployed on Railway, Render, Vercel, and Hostinger for seamless scalability and performance.",
  },
  {
    num: "04.",
    title: "AI-Powered Development",
    tags: ["CLAUDE", "CURSOR", "ANTIGRAVITY"],
    desc: "Leveraging AI tools like Claude, Cursor, and Antigravity to accelerate development, automate workflows, and build smarter applications.",
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="services section-light" id="services">
      <div className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="section-header-split"
          style={{ paddingBottom: '60px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
        >
          <div>
            <div className="section-label black">SERVICES</div>
          </div>
          <div>
            <p className="service-desc" style={{ fontSize: '1.5rem', color: '#333' }}>
              I'm a full stack developer building end-to-end web applications with clean code and scalable architecture.
            </p>
          </div>
        </motion.div>

        <div className="services-list-new">
          {servicesList.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`service-row-new ${isActive ? 'service-row-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="service-row-num">{service.num}</div>
                <h2 className={`service-row-title ${isActive ? 'service-title-active' : 'service-title-inactive'}`}>
                  {service.title}
                </h2>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="service-row-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="service-row-tags">
                        {service.tags.map(tag => (
                          <span key={tag} className="service-tag-new">{tag}</span>
                        ))}
                      </div>
                      <p className="service-row-desc">{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
