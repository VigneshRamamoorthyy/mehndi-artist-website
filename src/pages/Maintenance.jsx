import React, { useEffect, useState } from 'react';

const Maintenance = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F8F4EF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Poppins', sans-serif",
        overscrollBehaviorY: "none",
      }}
    >
      {/* Mehndi SVG Pattern Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%237A2434' stroke-width='0.8' opacity='0.08'%3E%3Ccircle cx='100' cy='100' r='80'/%3E%3Ccircle cx='100' cy='100' r='60'/%3E%3Ccircle cx='100' cy='100' r='40'/%3E%3Ccircle cx='100' cy='100' r='20'/%3E%3Cpath d='M100 20 Q120 60 100 100 Q80 60 100 20'/%3E%3Cpath d='M100 180 Q120 140 100 100 Q80 140 100 180'/%3E%3Cpath d='M20 100 Q60 120 100 100 Q60 80 20 100'/%3E%3Cpath d='M180 100 Q140 120 100 100 Q140 80 180 100'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%237A2434' opacity='0.15'/%3E%3Cpath d='M100 40 L108 60 L100 55 L92 60 Z'/%3E%3Cpath d='M100 160 L108 140 L100 145 L92 140 Z'/%3E%3Cpath d='M40 100 L60 108 L55 100 L60 92 Z'/%3E%3Cpath d='M160 100 L140 108 L145 100 L140 92 Z'/%3E%3Cellipse cx='100' cy='100' rx='75' ry='30'/%3E%3Cellipse cx='100' cy='100' rx='30' ry='75'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '220px 220px',
          opacity: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(248,244,239,0.6) 0%, rgba(248,244,239,0.15) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '640px',
          width: '100%',
          background: 'rgba(255, 252, 248, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: '0 8px 40px rgba(122, 36, 52, 0.10), 0 2px 12px rgba(212, 175, 55, 0.08), 0 0 0 1px rgba(212,175,55,0.08)',
          padding: '52px 48px 48px',
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
          transition: 'opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Corner ornaments */}
        <span aria-hidden="true" style={{ position: 'absolute', top: 18, left: 22, color: '#D4AF37', fontSize: '22px', opacity: 0.6, lineHeight: 1 }}>✦</span>
        <span aria-hidden="true" style={{ position: 'absolute', top: 18, right: 22, color: '#D4AF37', fontSize: '22px', opacity: 0.6, lineHeight: 1 }}>✦</span>
        <span aria-hidden="true" style={{ position: 'absolute', bottom: 18, left: 22, color: '#D4AF37', fontSize: '22px', opacity: 0.6, lineHeight: 1 }}>✦</span>
        <span aria-hidden="true" style={{ position: 'absolute', bottom: 18, right: 22, color: '#D4AF37', fontSize: '22px', opacity: 0.6, lineHeight: 1 }}>✦</span>

        {/* Logo */}
        <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://res.cloudinary.com/dwcp6zcbi/image/upload/v1781248006/RM_logo_efinfm.png"
            alt="Rekha Mehndi Logo"
            style={{
              height: '110px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(122,36,52,0.12))',
            }}
          />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.1rem)',
            fontWeight: 700,
            color: '#7A2434',
            lineHeight: 1.25,
            marginBottom: '12px',
            letterSpacing: '-0.01em',
          }}
        >
          🌸 We're Updating Our Website
        </h1>

        {/* Gold Divider */}
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            margin: '18px auto 20px',
            maxWidth: '320px',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
          <span style={{ color: '#D4AF37', fontSize: '16px', flexShrink: 0 }}>❧</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
        </div>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            fontWeight: 500,
            color: '#7A2434',
            marginBottom: '14px',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}
        >
          We're adding our latest bridal, engagement, baby shower and traditional mehndi designs.
          Our website will be back very soon with an improved experience.
        </p>






        {/* Thin gold separator */}
        <div
          aria-hidden="true"
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
            margin: '0 auto 28px',
          }}
        />




      </div>
    </div>
  );
};

export default Maintenance;
