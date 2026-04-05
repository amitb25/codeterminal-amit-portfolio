import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [formData, setFormData] = useState({ email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e33ec794-5212-4a6b-a2de-53ea89b6c33b',
          from_name: 'Portfolio Contact',
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setSending(false);
  };

  return (
    <footer className="footer section-dark" id="contact">
      <div className="container">
        <div className="footer-grid">
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="footer-left">
              <h2>Let's Build Together</h2>
              <a href="mailto:icodeterminal@gmail.com" className="footer-email magnetic-element" style={{ display: 'inline-block' }}>icodeterminal@gmail.com</a>
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }} className="footer-right">
             <form className="contact-form" onSubmit={handleSubmit}>
               <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
               <input type="text" placeholder="Your Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
               <textarea placeholder="Tell me about your project" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
               <button type="submit" className="btn btn-light style-submit magnetic-element" disabled={sending}>{sending ? 'Sending...' : 'Send Request'}</button>
               {status === 'success' && <p style={{ color: '#A6FF00', marginTop: '10px', fontSize: '0.9rem' }}>Message sent successfully!</p>}
               {status === 'error' && <p style={{ color: '#ff4444', marginTop: '10px', fontSize: '0.9rem' }}>Something went wrong. Try again.</p>}
             </form>
           </motion.div>
        </div>
        <div className="footer-bottom">
           <p>&copy; Code Terminal 2026</p>
        </div>
      </div>
    </footer>
  );
}
