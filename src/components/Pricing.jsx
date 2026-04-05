import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    tag: 'Single Page',
    name: 'Starter',
    desc: 'A clean, responsive single-page website or landing page perfect for personal brands and small businesses.',
    price: '15,000',
    currency: '₹',
    features: [
      'Responsive single page design',
      'React / Next.js frontend',
      'Contact form integration',
      'SEO optimization',
      'Mobile-first approach',
      '1 round of revisions'
    ]
  },
  {
    tag: 'Full Stack',
    name: 'Pro',
    desc: 'A complete full stack web application with frontend, backend API, database, and deployment.',
    price: '40,000',
    currency: '₹',
    features: [
      'Everything in Starter',
      'Custom backend API (Node.js / Laravel)',
      'Database design (Supabase / MongoDB)',
      'User authentication',
      'Admin dashboard',
      'Deployment on Railway / Render',
      '3 rounds of revisions'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="pricing section-light" id="pricing">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label black">
          PRICING PLAN
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pricing-card"
            >
              <div className="tag black-tag" style={{ display: 'inline-block', marginBottom: '20px' }}>{plan.tag}</div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '16px', color: '#111', fontWeight: 600, letterSpacing: '-0.5px' }}>{plan.name}</h3>
              <p style={{ color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>{plan.desc}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '10px' }}>
                <span className="pricing-per" style={{ fontSize: '1rem', color: '#888' }}>from</span>
                <span className="pricing-amount" style={{ fontSize: '3rem', color: '#111', fontWeight: 700, letterSpacing: '-1px' }}>{plan.currency}{plan.price}</span>
                <span className="pricing-per" style={{ fontSize: '1rem', color: '#888' }}>/ Project</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.08 + 0.2 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className="btn btn-dark magnetic-element"
                style={{ marginTop: '35px', background: '#111' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <span className="btn-icon" style={{ background: 'var(--accent)', color: '#000' }}>&rarr;</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
