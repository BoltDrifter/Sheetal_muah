export default function Marquee() {
  const items = [
    'Bridal', 'Editorial', 'High Glam', 'Hair Styling',
    'Airbrush', 'Avant-Garde', 'On-Location', 'Dubai',
    'Bridal', 'Editorial', 'High Glam', 'Hair Styling',
    'Airbrush', 'Avant-Garde', 'On-Location', 'Dubai',
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid rgba(201,169,110,0.12)',
        borderBottom: '1px solid rgba(201,169,110,0.12)',
        padding: '1.1rem 0',
        background: 'rgba(201,169,110,0.03)',
        userSelect: 'none',
      }}
    >
      <div className="marquee-track" style={{ display: 'flex', width: 'max-content' }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: i % 2 === 0 ? 'var(--gold)' : 'rgba(245,240,234,0.35)',
              paddingRight: '3rem',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold)', opacity: 0.4, fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
