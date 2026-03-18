'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PaperPlaneRight, Envelope, Phone } from '@phosphor-icons/react';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        background: 'var(--surface)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(4rem, 8vw, 8rem)',
        }}
        className="md:grid-cols-2 grid-cols-1"
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
            Bookings
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.01em', color: 'var(--cream)', marginBottom: '2rem' }}
          >
            Let's Craft <br />
            <span className="shimmer-gold" style={{ fontStyle: 'italic' }}>Your Look.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'rgba(245,240,234,0.6)', fontWeight: 300, marginBottom: '3rem', maxWidth: '40ch' }}>
            Available for bridal bookings, editorial shoots, and private events in Dubai and globally. Please provide as much detail as possible to ensure accurate quoting.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Envelope size={18} color="var(--gold)" weight="light" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.4)', marginBottom: '0.2rem' }}>Email</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--cream)' }}>bookings@sheetalmukhida.ae</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={18} color="var(--gold)" weight="light" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.4)', marginBottom: '0.2rem' }}>WhatsApp</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--cream)' }}>+971 50 123 4567</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="glass"
          style={{ padding: '3rem', borderRadius: '1.25rem' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.7)' }}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,169,110,0.15)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="date" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.7)' }}>
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,169,110,0.15)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="service" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.7)' }}>
                  Service Focus
                </label>
                <select
                  id="service"
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,169,110,0.15)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    appearance: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
                >
                  <option value="bridal" style={{ background: 'var(--surface)' }}>Bridal Makeup</option>
                  <option value="editorial" style={{ background: 'var(--surface)' }}>Editorial / Fashion</option>
                  <option value="event" style={{ background: 'var(--surface)' }}>Group / Event</option>
                  <option value="other" style={{ background: 'var(--surface)' }}>Other</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.7)' }}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,169,110,0.15)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  resize: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.15)')}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98, y: 1 }}
              style={{
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                width: '100%',
                padding: '1.2rem',
                borderRadius: '0.5rem',
                background: 'var(--gold)',
                color: 'var(--bg)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Submit Request
              <PaperPlaneRight size={16} weight="fill" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
