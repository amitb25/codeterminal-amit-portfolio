import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    const step = Math.ceil(end / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Numeric() {
  const stats = [
    { value: 95, suffix: '%', color: '#A6FF00', label: 'Client Satisfaction' },
    { value: 30, suffix: '+', color: '#FFF', label: 'Projects Delivered' },
    { value: 15, suffix: '+', color: '#FFF', label: 'Tech Stack Mastered' },
  ];

  return (
    <section className="numeric section-dark" id="numeric">
      <div className="container">
        <div className="numeric-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="numeric-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 style={{ fontSize: '4rem', color: stat.color, lineHeight: 1, fontWeight: 600 }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </h2>
              <p style={{ color: '#A1A1A1', marginTop: '10px', fontSize: '1rem', letterSpacing: '0.5px' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
