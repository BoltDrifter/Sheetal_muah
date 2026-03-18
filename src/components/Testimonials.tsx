'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

const reviews = [
  {
    id: 'rev-1',
    name: 'Aisha K.',
    loc: 'Dubai, UAE',
    text: 'Layla created the exact bridal look I had dreamed of. My makeup stayed flawless through a July wedding without feeling heavy. True artistry.',
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    loc: 'Vogue Arabia Shoot',
    text: 'Her understanding of light, skin textures, and camera angles is unmatched. The only MUA I trust for my high-fashion editorial spreads.',
  },
  {
    id: 'rev-3',
    name: 'Sarah M.',
    loc: 'Doha, Qatar',
    text: 'Flew Layla out for my destination wedding. She brought such a calming presence and gave me the most luminous, elegant glow. Absolutely worth it.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as any } },
};

function TiltReview({ review }: { review: typeof reviews[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

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
      variants={item}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="glass"
      style={{
        position: 'relative',
        padding: '3rem 2.5rem',
        borderRadius: '1.25rem',
        cursor: 'default',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      whileHover={{ scale: 1.025, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {/* Subtle hover glow */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1.25rem',
            border: '1px solid rgba(201,169,110,0.4)',
            zIndex: 10,
            pointerEvents: 'none',
            boxShadow: 'inset 0 0 20px rgba(201,169,110,0.06)',
          }}
        />
      )}

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem', WebkitTransform: 'translateZ(20px)', transform: 'translateZ(20px)' }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={16} weight="fill" color="var(--gold)" />
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          lineHeight: 1.8,
          color: 'rgba(245,240,234,0.7)',
          fontWeight: 300,
          fontStyle: 'italic',
          marginBottom: '2.5rem',
          flexGrow: 1,
          WebkitTransform: 'translateZ(30px)',
          transform: 'translateZ(30px)',
        }}
      >
        "{review.text}"
      </p>

      <div style={{ WebkitTransform: 'translateZ(40px)', transform: 'translateZ(40px)', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '1.5rem' }}>
        <h4 className="font-display shimmer-gold" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          {review.name}
        </h4>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.4)', marginTop: '0.25rem' }}>
          {review.loc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: '3.5rem', textAlign: 'center' }}
      >
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.7rem' }}>
          Client Words
        </p>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.01em', color: 'var(--cream)' }}
        >
          Testimonials
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
      >
        {reviews.map((rev) => (
          <div key={rev.id} style={{ perspective: 1000 }}>
            <TiltReview review={rev} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
