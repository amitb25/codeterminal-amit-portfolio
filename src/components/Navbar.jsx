import React, { useState } from 'react';
import { ChevronsLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const menuItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'What You Get', href: '#whatyouget' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Awards', href: '#awards' },
  { label: 'Numeric', href: '#numeric' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Skills', href: '#skills' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="navbar"
      >
        <div className="nav-left">
          <span className="open-to-work-btn">
            <span className="status-dot blink"></span>
            <span className="location">Open To Work</span>
          </span>
        </div>
        <div className="nav-center">
          <img src={logo} alt="Code Terminal" className="nav-logo" />
        </div>
        <div className="nav-right">
          <button className="menu-btn magnetic-element" aria-label="Menu" onClick={toggleDrawer}>
            <ChevronsLeft size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeDrawer}
            />
            <motion.div
              className="drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Close button */}
              <button className="drawer-close" onClick={closeDrawer} aria-label="Close menu">
                <X size={20} />
              </button>

              {/* Menu Section */}
              <div className="drawer-section">
                <span className="drawer-section-title">Menu</span>
                <div className="drawer-menu-grid">
                  {menuItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="drawer-menu-item"
                      onClick={closeDrawer}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Section */}
              <div className="drawer-section">
                <span className="drawer-section-title">Social Network</span>
                <div className="drawer-social-row">
                  {socials.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      className="drawer-social-link"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                    >
                      {s.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
