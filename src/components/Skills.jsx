import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: '35px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'baseline' }}>
        <span className="skill-name" style={{ fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.3px' }}>{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
          style={{ color: '#A6FF00', fontSize: '0.9rem', fontWeight: 500 }}
        >
          {skill.fill}
        </motion.span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: skill.fill } : { width: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = [
    { name: 'Laravel / PHP', fill: '92%' },
    { name: 'React / Next.js', fill: '88%' },
    { name: 'React Native', fill: '84%' },
    { name: 'Node.js / Express', fill: '88%' },
    { name: 'Supabase / MongoDB / PostgreSQL', fill: '85%' },
    { name: 'Vercel / Railway / Render / Hostinger', fill: '80%' },
    { name: 'AI Tools (Claude / Cursor / Antigravity)', fill: '90%' },
    { name: 'TypeScript / Tailwind', fill: '88%' },
  ];

  return (
    <section className="skills section-dark" id="skills">
      <div className="container container-bento">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
          TECH STACK
        </motion.div>

        <div className="skills-list" style={{ marginTop: '40px', maxWidth: '800px' }}>
          {skills.map((skill, i) => (
            <SkillBar key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
