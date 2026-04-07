import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { text: "Amit built our entire e-commerce platform from scratch. His full stack skills are top-notch — the frontend is blazing fast and the backend handles thousands of requests seamlessly.", author: "RAHUL SHARMA", role: "Founder, ShopEase", rating: 5 },
  { text: "We hired Amit to revamp our internal dashboard. He delivered a clean, responsive React frontend with a robust Node.js API. The project was completed ahead of schedule.", author: "PRIYA MEHTA", role: "CTO, TechNova Solutions", rating: 5 },
  { text: "Amit's expertise in React Native helped us launch our mobile app in record time. His code quality and attention to detail are exceptional.", author: "VIKRAM SINGH", role: "CEO, AppForge", rating: 5 },
  { text: "From database design to deployment, Amit handled everything. The app runs smoothly on Railway and the code is clean and maintainable.", author: "ANKIT JOSHI", role: "Product Manager, DevStack", rating: 5 },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const goNext = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const goPrev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const pair = reviews.slice(page * perPage, page * perPage + perPage);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="testimonials section-dark" id="testimonials">
      <div className="container">
        <div className="testi-header">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            TESTIMONIALS
          </motion.div>
          <div className="testi-nav-arrows">
            <button className="testi-arrow" onClick={goPrev}><ChevronLeft size={20} /></button>
            <button className="testi-arrow" onClick={goNext}><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="testi-slider-wrap">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              className="testi-pair"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {pair.map((review, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <span key={j} className="testimonial-star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{review.text}"</p>
                  <div className="testimonial-author-wrap">
                    <div className="testimonial-author-info">
                      <div className="testimonial-avatar">{review.author.charAt(0)}</div>
                      <div>
                        <h4 className="testimonial-author-name">{review.author}</h4>
                        <p className="testimonial-author-role">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === page ? 'testimonial-dot-active' : ''}`}
              onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
