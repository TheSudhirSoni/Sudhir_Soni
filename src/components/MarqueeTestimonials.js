'use client';
import { useEffect } from 'react';

/**
 * Behaviour-only component (renders nothing). Drives the testimonial marquee:
 * clones cards once for a seamless loop, auto-scrolls, and supports drag-to-read.
 * Operates on the static `.marquee-track` markup already on the page.
 */
export default function MarqueeTestimonials() {
  useEffect(() => {
    const tracks = document.querySelectorAll('.marquee-track');
    const cleanups = [];

    tracks.forEach((track) => {
      if (track.dataset.marqueeInit === '1') return;
      track.dataset.marqueeInit = '1';

      const origCards = Array.from(track.children);
      origCards.forEach((card) => track.appendChild(card.cloneNode(true)));

      const speed = parseFloat(track.dataset.speed) || 1.2;
      let pos = 0, halfWidth = 0, dragging = false, startX = 0, startPos = 0, raf;

      requestAnimationFrame(() => requestAnimationFrame(() => {
        halfWidth = track.scrollWidth / 2;
        if (speed < 0) pos = halfWidth;
        track.style.transform = `translateX(${-pos}px)`;
      }));

      function clampPos() {
        if (halfWidth <= 0) return;
        pos = ((pos % halfWidth) + halfWidth) % halfWidth;
      }
      function animate() {
        if (!dragging && halfWidth > 0) {
          pos += speed; clampPos();
          track.style.transform = `translateX(${-pos}px)`;
        }
        raf = requestAnimationFrame(animate);
      }

      const onMouseDown = (e) => { dragging = true; startX = e.clientX; startPos = pos; track.classList.add('dragging'); e.preventDefault(); };
      const onMouseMove = (e) => { if (!dragging) return; pos = startPos + (startX - e.clientX); clampPos(); track.style.transform = `translateX(${-pos}px)`; };
      const onMouseUp = () => { if (!dragging) return; dragging = false; track.classList.remove('dragging'); };
      const onTouchStart = (e) => { dragging = true; startX = e.touches[0].clientX; startPos = pos; track.classList.add('dragging'); };
      const onTouchMove = (e) => { if (!dragging) return; pos = startPos + (startX - e.touches[0].clientX); clampPos(); track.style.transform = `translateX(${-pos}px)`; };
      const onTouchEnd = () => { if (!dragging) return; dragging = false; track.classList.remove('dragging'); };

      track.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      track.addEventListener('touchstart', onTouchStart, { passive: true });
      track.addEventListener('touchmove', onTouchMove, { passive: true });
      track.addEventListener('touchend', onTouchEnd);

      animate();

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        track.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        track.removeEventListener('touchstart', onTouchStart);
        track.removeEventListener('touchmove', onTouchMove);
        track.removeEventListener('touchend', onTouchEnd);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);
  return null;
}
