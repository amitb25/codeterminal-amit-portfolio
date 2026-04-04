import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer section-dark" id="contact">
      <div className="container">
        <div className="footer-grid">
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="footer-left">
              <h2>Let's Build Together</h2>
              <a href="mailto:amit@codeterminal.in" className="footer-email magnetic-element" style={{ display: 'inline-block' }}>amit@codeterminal.in</a>
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }} className="footer-right">
             <form className="contact-form">
               <input type="email" placeholder="Your Email" />
               <input type="text" placeholder="Your Phone" />
               <textarea placeholder="Tell me about your project"></textarea>
               <button type="submit" className="btn btn-light style-submit magnetic-element">Send Request</button>
             </form>
           </motion.div>
        </div>
        <div className="footer-bottom">
           <p>&copy; Code Terminal 2026</p>
           <a href="#home" className="back-to-top magnetic-element">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
