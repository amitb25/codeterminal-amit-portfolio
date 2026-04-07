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
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label black">FAQs</div>
            <h2 className="faq-heading">Got Questions?<br/><span className="faq-heading-accent">We've Got Answers.</span></h2>
          </motion.div>
        </div>

        <div className="faq-layout">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`faq-item ${openIndex === i ? 'faq-item-active' : ''}`}
              >
                <button
                  className={`faq-btn ${openIndex === i ? 'faq-btn-active' : ''}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="faq-q-wrap">
                    <span className="faq-num">0{i + 1}</span>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`faq-icon-wrap ${openIndex === i ? 'faq-icon-active' : ''}`}
                  >
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
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
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="faq-illustration">
            <video
              className="faq-video"
              src="/faq-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
