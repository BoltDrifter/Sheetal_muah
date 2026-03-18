'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Star,
  Sparkle,
  Scissors,
  Drop,
  Users,
  AirplaneTilt,
} from '@phosphor-icons/react';

const services = [
  {
    id: 'svc-bridal',
    icon: Star,
    title: 'Bridal Makeup',
    desc: 'A flawless, all-day bridal look tailored to your vision — from soft romance to high-glam drama.',
    accent: true,
    wide: false,
  },
  {
    id: 'svc-editorial',
    icon: Sparkle,
    title: 'Editorial & Fashion',
    desc: 'High-impact looks for fashion shoots, campaigns, and runway productions.',
    accent: false,
    wide: false,
  },
  {
    id: 'svc-hair',
    icon: Scissors,
    title: 'Hair Styling',
    desc: 'From sleek blowouts and braided updos to cascading waves — hair crafted to complement every look.',
    accent: false,
    wide: true,
  },
  {
    id: 'svc-airbrush',
    icon: Drop,
    title: 'Airbrush Makeup',
    desc: 'Ultra-fine, camera-ready airbrushed finishes that last through the hottest Dubai evenings.',
    accent: false,
    wide: false,
  },
  {
    id: 'svc-group',
    icon: Users,
    title: 'Group & Event',
    desc: 'Full-team coordination for weddings, private events, and large productions.',
    accent: false,
    wide: false,
  },
  {
    id: 'svc-location',
    icon: AirplaneTilt,
    title: 'On-Location & Travel',
    desc: 'Available for destination weddings, international shootings, and tours across the GCC.',
    accent: false,
    wide: true,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any } },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        background: 'rgba(201,169,110,0.02)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
        borderBottom: '1px solid rgba(201,169,110,0.1)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.7rem' }}>
            What I Offer
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.01em', color: 'var(--cream)', fontStyle: 'italic' }}
          >
            Services
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                id={svc.id}
                variants={item}
                className="glass"
                style={{
                  gridColumn: svc.wide ? 'span 2' : 'span 1',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  background: svc.accent
                    ? 'linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0.04) 100%)'
                    : undefined,
                  border: svc.accent ? '1px solid rgba(201,169,110,0.35)' : undefined,
                  cursor: 'default',
                }}
                whileHover={{ scale: 1.018, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              >
                {/* Gold accent glow for featured card */}
                {svc.accent && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-20%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                <Icon
                  size={28}
                  weight="light"
                  style={{
                    color: 'var(--gold)',
                    marginBottom: '1.25rem',
                    display: 'block',
                  }}
                />

                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: 'var(--cream)',
                    marginBottom: '0.7rem',
                    fontStyle: 'italic',
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: 'rgba(245,240,234,0.55)',
                    fontWeight: 300,
                    maxWidth: '48ch',
                  }}
                >
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
