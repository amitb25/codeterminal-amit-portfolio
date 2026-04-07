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
    <section className="faq section-dark" id="faq">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
          FAQs
        </motion.div>

        <div className="faq-list" style={{ marginTop: '0', maxWidth: '800px' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ borderBottom: '1px solid #222' }}
            >
              <button
                className="faq-btn"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span><span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '0.7em' }}>◆</span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === i ? <Minus color="#A6FF00" size={28} /> : <Plus color="#666" size={28} />}
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
                    <p className="faq-answer" style={{ color: '#A1A1A1', paddingBottom: '30px', lineHeight: 1.7 }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
