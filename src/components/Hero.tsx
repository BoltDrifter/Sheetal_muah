'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin } from '@phosphor-icons/react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const textVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as any } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100dvh',
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Left: Text ── */}
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 6rem)',
          position: 'relative',
          zIndex: 2,
          y: textY,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location pill */}
        <motion.div variants={textVariant} style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid rgba(201,169,110,0.3)',
              borderRadius: '9999px',
              padding: '0.35rem 0.9rem',
              fontFamily: 'var(--font-body)',
            }}
          >
            <MapPin size={11} weight="fill" />
            Dubai, UAE
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={textVariant}
          className="font-display"
          style={{
            fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            fontWeight: 300,
            color: 'var(--cream)',
            marginBottom: '0.15em',
          }}
        >
          Sheetal
        </motion.h1>
        <motion.h1
          variants={textVariant}
          className="font-display shimmer-gold"
          style={{
            fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            fontStyle: 'italic',
            marginBottom: '0.6em',
          }}
        >
          Mukhida
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={textVariant}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,234,0.45)',
            marginBottom: '2rem',
          }}
        >
          Luxury Makeup &amp; Hair Artist
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={textVariant}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            lineHeight: 1.75,
            color: 'rgba(245,240,234,0.6)',
            maxWidth: '42ch',
            fontWeight: 300,
            marginBottom: '3rem',
          }}
        >
          Crafting transformative beauty for brides, editorials, and high-fashion
          productions across the UAE. Every look is a work of art.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={textVariant} style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <motion.a
            href="#contact"
            id="hero-book-cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97, y: 1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 2rem',
              borderRadius: '9999px',
              background: 'var(--gold)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Book a Consultation
            <ArrowRight size={14} weight="bold" />
          </motion.a>

          <a
            href="#work"
            id="hero-view-work"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,234,0.5)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(245,240,234,0.2)',
              paddingBottom: '2px',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
          >
            View Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={textVariant}
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(201,169,110,0.12)',
          }}
        >
          {[
            { num: '8+', label: 'Years in Dubai' },
            { num: '600+', label: 'Bridal Looks' },
            { num: '40+', label: 'Fashion Editorials' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                className="font-display"
                style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}
              >
                {num}
              </div>
              <div
                style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.4)', marginTop: '0.35rem' }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right: Image ── */}
      <motion.div
        style={{
          position: 'relative',
          overflow: 'hidden',
          y: imgY,
        }}
      >
        {/* Gradient fade left edge */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, var(--bg) 0%, transparent 35%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Gradient fade bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--bg) 0%, transparent 30%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <Image
          src="/hero.png"
          alt="Sheetal Mukhida — Dubai Luxury Makeup Artist"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />

        {/* Floating availability badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.7, type: 'spring', stiffness: 200, damping: 20 }}
          className="animate-float glass"
          style={{
            position: 'absolute',
            bottom: '4rem',
            left: '2rem',
            zIndex: 10,
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ADE80',
                boxShadow: '0 0 8px #4ADE80',
                display: 'inline-block',
              }}
            />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--cream)', letterSpacing: '0.06em' }}>
              Accepting Bookings 2026
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--gold)', marginTop: '0.3rem', fontStyle: 'italic' }}>
            Bridal season now open
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
