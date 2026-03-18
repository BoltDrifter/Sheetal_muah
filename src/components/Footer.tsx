'use client';

import { InstagramLogo, TiktokLogo, Envelope } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(201,169,110,0.1)',
        padding: '3rem clamp(1.5rem, 6vw, 6rem)',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Brand */}
        <div>
          <h3
            className="font-display"
            style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--cream)', marginBottom: '0.2rem' }}
          >
            Sheetal Mukhida
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,234,0.4)' }}>
            Dubai, United Arab Emirates
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Portfolio', 'Services', 'T&C'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,234,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(245,240,234,0.6)')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a href="#" style={{ color: 'rgba(245,240,234,0.5)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(245,240,234,0.5)')}>
            <InstagramLogo size={20} weight="light" />
          </a>
          <a href="#" style={{ color: 'rgba(245,240,234,0.5)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(245,240,234,0.5)')}>
            <TiktokLogo size={20} weight="light" />
          </a>
          <a href="#" style={{ color: 'rgba(245,240,234,0.5)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(245,240,234,0.5)')}>
            <Envelope size={20} weight="light" />
          </a>
        </div>
      </div>
    </footer>
  );
}
