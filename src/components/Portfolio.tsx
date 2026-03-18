'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';

const works = [
  {
    id: 'portfolio-hero',
    src: '/hero_portrait.png',
    label: 'Smoky Couture',
    category: 'Editorial',
    size: 'tall', // spans 2 rows
  },
  {
    id: 'portfolio-bridal',
    src: '/bridal_look.png',
    label: 'Bridal Radiance',
    category: 'Bridal',
    size: 'normal',
  },
  {
    id: 'portfolio-editorial',
    src: '/editorial_look.png',
    label: 'Avant-Garde Noir',
    category: 'Fashion',
    size: 'normal',
  },
  {
    id: 'portfolio-glam',
    src: '/natural_glam.png',
    label: 'Golden Hour Glam',
    category: 'Natural Glam',
    size: 'wide', // spans 2 cols
  },
];

function TiltCard({ work }: { work: typeof works[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      id={work.id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        borderRadius: '1rem',
        overflow: 'hidden',
        cursor: 'pointer',
        gridRow: work.size === 'tall' ? 'span 2' : 'span 1',
        gridColumn: work.size === 'wide' ? 'span 2' : 'span 1',
        aspectRatio: work.size === 'tall' ? undefined : work.size === 'wide' ? '16/7' : '4/5',
        minHeight: work.size === 'tall' ? '100%' : undefined,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{ scale: 1.025, boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {/* Spotlight border glow */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1rem',
            border: '1px solid rgba(201,169,110,0.5)',
            zIndex: 10,
            pointerEvents: 'none',
            boxShadow: 'inset 0 0 30px rgba(201,169,110,0.08)',
          }}
        />
      )}

      <Image
        src={work.src}
        alt={work.label}
        fill
        style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(13,12,11,0.85) 0%, rgba(13,12,11,0.1) 60%)'
            : 'linear-gradient(to top, rgba(13,12,11,0.6) 0%, transparent 50%)',
          transition: 'background 0.4s ease',
          zIndex: 3,
        }}
      />

      {/* Label slide-up */}
      <motion.div
        animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: '1.4rem',
          left: '1.5rem',
          zIndex: 4,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '0.3rem',
          }}
        >
          {work.category}
        </div>
        <div
          className="font-display"
          style={{ fontSize: '1.4rem', fontWeight: 300, color: 'var(--cream)', fontStyle: 'italic' }}
        >
          {work.label}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.7rem' }}>
            Selected Work
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.01em', color: 'var(--cream)' }}
          >
            The Portfolio
          </h2>
        </div>
        <a
          href="#contact"
          id="portfolio-view-all"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,234,0.4)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(245,240,234,0.2)',
            paddingBottom: '2px',
          }}
        >
          Commission a Look
        </a>
      </motion.div>

      {/* Masonry grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '1rem',
        }}
      >
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
            style={{
              gridRow: work.size === 'tall' ? 'span 2' : 'span 1',
              gridColumn: work.size === 'wide' ? 'span 2' : 'span 1',
            }}
          >
            <TiltCard work={work} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
