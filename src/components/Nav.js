'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Bug fix: the original site sent the "Talk to Me" CTA to Calendly on some
// pages and to /book on others. Standardised here to one place.
// Change CTA_HREF to 'https://calendly.com/sudhirsoni/20min' if you prefer
// the calendar directly (and set CTA_EXTERNAL = true).
const CTA_HREF = '/book';
const CTA_EXTERNAL = false;

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/sessions', label: 'Sessions' },
  { href: '/wisdom', label: 'Wisdom' },
  { href: '/speaking', label: 'Speaking' },
];

function Cta({ className, onClick, children }) {
  if (CTA_EXTERNAL) {
    return <a href={CTA_HREF} target="_blank" rel="noopener" className={className} onClick={onClick}>{children}</a>;
  }
  return <Link href={CTA_HREF} className={className} onClick={onClick}>{children}</Link>;
}

export default function Nav({ variant = 'full' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  if (variant === 'simple') {
    return (
      <nav className={'navbar' + (scrolled ? ' scrolled' : '')} id="navbar">
        <div className="nav-inner">
          <Link href="/" className="logo">Sudhir<span className="dot"></span>Soni</Link>
          <Link href="/" className="nav-back">← Back to site</Link>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className={'navbar' + (scrolled ? ' scrolled' : '')} id="navbar" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="logo">Sudhir<span className="dot"></span>Soni</Link>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
            <li><Cta className="nav-cta">Talk to Me</Cta></li>
          </ul>
          <button
            className={'menu-toggle' + (open ? ' active' : '')}
            id="menuToggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={'mobile-menu' + (open ? ' active' : '')} id="mobileMenu" role="dialog" aria-modal="true" aria-label="Navigation">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Cta className="cta" onClick={() => setOpen(false)}>Talk to Me</Cta>
      </div>
    </>
  );
}
