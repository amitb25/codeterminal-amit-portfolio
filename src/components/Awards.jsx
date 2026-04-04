import React from 'react';
import { motion } from 'framer-motion';

const awardsList = [
  { name: 'Full Stack Web Development', brand: 'Udemy', date: '2024' },
  { name: 'React Developer Certification', brand: 'Meta', date: '2023' },
  { name: 'Node.js Backend Specialization', brand: 'Coursera', date: '2023' },
];

export default function Awards() {
  return (
    <section className="awards section-light" id="awards">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label black">
          CERTIFICATIONS
        </motion.div>

        <div style={{ marginTop: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', paddingBottom: '20px', borderBottom: '1px solid #ddd', color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <div>Platform</div>
            <div>Certification</div>
            <div style={{ textAlign: 'right' }}>Year</div>
          </div>

          {awardsList.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="award-row magnetic-element"
            >
              <div style={{ fontWeight: 600 }}>{award.brand}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 500 }}>{award.name}</div>
              <div style={{ textAlign: 'right', color: '#666' }}>{award.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
