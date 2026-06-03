'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Behaviour-only component (renders nothing). Adds the `.visible` class to
 * any `.reveal` element when it scrolls into view. Re-scans on route change
 * so client-side navigation keeps the reveal animations working.
 */
export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);
  return null;
}
