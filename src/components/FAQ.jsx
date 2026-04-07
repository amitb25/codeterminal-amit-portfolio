import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "What technologies do you work with?", a: "I specialize in Laravel, React, Next.js, Node.js, PostgreSQL, TypeScript, and AI tools like Claude, Cursor, and Antigravity." },
  { q: "How long does a typical project take?", a: "A simple landing page takes 1-2 weeks. A full stack application with backend and database usually takes 4-8 weeks depending on complexity." },
  { q: "Do you provide post-launch support?", a: "Yes, I offer 30 days of free bug fixes and support after project delivery. Extended maintenance plans are also available." },
  { q: "Can you work with existing codebases?", a: "Absolutely. I can jump into existing projects, fix bugs, add features, optimize performance, or refactor code for better scalability." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section-light" id="faq">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label black">
          FAQs
        </motion.div>

        <div className="faq-layout">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="faq-item"
              >
                <button
                  className={`faq-btn ${openIndex === i ? 'faq-btn-active' : ''}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span><span style={{ color: '#111', marginRight: '10px', fontSize: '0.7em' }}>◆</span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-icon"
                  >
                    {openIndex === i ? <Minus size={28} /> : <Plus size={28} />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="faq-answer" style={{ paddingBottom: '30px', lineHeight: 1.7 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="faq-illustration">
            <div className="faq-anim-wrap">
              {/* Main lightbulb */}
              <motion.div
                className="faq-anim-bulb"
                animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="url(#bulbGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A6FF00" />
                      <stop offset="100%" stopColor="#5a9900" />
                    </linearGradient>
                  </defs>
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z"/>
                </svg>
              </motion.div>

              {/* Glow ring */}
              <motion.div
                className="faq-anim-ring"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating question marks */}
              {['?', '?', '?', '?'].map((q, i) => (
                <motion.span
                  key={i}
                  className={`faq-anim-q faq-anim-q-${i}`}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                  }}
                  transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >
                  {q}
                </motion.span>
              ))}

              {/* Small floating dots */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`dot-${i}`}
                  className={`faq-anim-dot faq-anim-dot-${i}`}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, i % 2 === 0 ? 8 : -8, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
