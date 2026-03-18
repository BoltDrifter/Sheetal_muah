'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

const links = ['Work', 'Services', 'About', 'Contact'];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          role="navigation"
          aria-label="Main navigation"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          style={{
            position: 'fixed',
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '0.75rem 2rem',
            borderRadius: '9999px',
            background: 'rgba(13, 12, 11, 0.72)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(201,169,110,0.18)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Brand mark */}
          <span
            className="font-display shimmer-gold"
            style={{ fontSize: '1.05rem', letterSpacing: '0.12em', fontWeight: 400 }}
          >
            S·M
          </span>

          {/* Nav links */}
          <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  id={`nav-${link.toLowerCase()}`}
                  onMouseEnter={() => setActive(link)}
                  onMouseLeave={() => setActive('')}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: active === link ? 'var(--gold)' : 'rgba(245,240,234,0.65)',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div style={{ width: '1px', height: '16px', background: 'rgba(201,169,110,0.25)' }} />

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              id="nav-instagram"
              style={{ color: 'rgba(245,240,234,0.5)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(245,240,234,0.5)')}
            >
              <InstagramLogo size={16} weight="light" />
            </a>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              id="nav-whatsapp"
              style={{ color: 'rgba(245,240,234,0.5)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(245,240,234,0.5)')}
            >
              <WhatsappLogo size={16} weight="light" />
            </a>
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            id="nav-book-now"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97, y: 1 }}
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.2rem',
              borderRadius: '9999px',
              background: 'var(--gold)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
          >
            Book Now
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
