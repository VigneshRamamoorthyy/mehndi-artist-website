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
          Our website is currently getting a beautiful makeover to showcase our latest bridal, engagement, baby shower, and traditional mehndi designs. We're working behind the scenes to create an even better experience for you.
        </p>

        {/* Description / Booking nudge */}
        <p
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            color: '#6b5b4e',
            lineHeight: 1.75,
            maxWidth: '480px',
            margin: '0 auto 34px',
          }}
        >
          For immediate bookings and enquiries, please contact us directly on WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '36px',
          }}
        >
          {/* WhatsApp Button */}
          <a
            id="whatsapp-cta"
            href="https://wa.me/918940870183"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '15px 28px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #7A2434 0%, #9B2D3F 100%)',
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              boxShadow: '0 4px 20px rgba(122,36,52,0.30)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(122,36,52,0.38)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(122,36,52,0.30)';
            }}
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
            </svg>
            Book on WhatsApp
          </a>

          {/* Instagram Button */}
          <a
            id="instagram-cta"
            href="https://instagram.com/rekha_henna_artist"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '50px',
              background: 'transparent',
              color: '#7A2434',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              border: '2px solid #D4AF37',
              boxShadow: '0 2px 12px rgba(212,175,55,0.12)',
              transition: 'transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = 'rgba(212,175,55,0.08)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,175,55,0.22)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(212,175,55,0.12)';
            }}
          >
            {/* Instagram icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow on Instagram
          </a>
        </div>

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

        {/* Contact Information */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <a
            href="tel:+918940870183"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#7A2434',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ fontSize: '16px' }}>📞</span>
            +91 89408 70183
          </a>

          <a
            href="mailto:rekhamehndiartist@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#7A2434',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ fontSize: '16px' }}>📧</span>
            rekhamehndiartist@gmail.com
          </a>

          <a
            href="https://instagram.com/rekha_henna_artist"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#7A2434',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ fontSize: '16px' }}>📸</span>
            @rekha_henna_artist
          </a>
        </div>

        {/* Closing message */}
        <p
          style={{
            marginTop: '28px',
            fontSize: '0.8rem',
            color: '#b0988a',
            letterSpacing: '0.02em',
            fontStyle: 'italic',
          }}
        >
          We'll be back soon with new designs and exciting updates.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
