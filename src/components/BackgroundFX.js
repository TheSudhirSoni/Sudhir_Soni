'use client';
import { useEffect, useRef } from 'react';

/**
 * Global background: nebula glow + grain + interactive particle canvas.
 * Bug fix vs original index.html: guards against division by zero
 * (md2 > 0) when the cursor lands exactly on a particle.
 */
export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], mouse = { x: -9999, y: -9999 };
    let raf, resizeTimer;
    const COUNT = 80, MAX_DIST = 145, COLOR = '224,180,112';

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.width = window.innerWidth * dpr;
      H = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      canvas.dataset.dpr = dpr;
    }
    function init() {
      resize();
      const dpr = Number(canvas.dataset.dpr || 1);
      particles = [];
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3 * dpr,
          vy: (Math.random() - 0.5) * 0.3 * dpr,
          r: (Math.random() * 1.5 + 0.5) * dpr,
        });
      }
    }
    function draw() {
      const dpr = Number(canvas.dataset.dpr || 1);
      ctx.clearRect(0, 0, W, H);
      const md = MAX_DIST * dpr;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x, dy = p1.y - p2.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < md) {
            ctx.strokeStyle = `rgba(${COLOR},${(1 - d / md) * 0.25})`;
            ctx.lineWidth = 0.5 * dpr;
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y, md2 = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md2 < 100 * dpr && md2 > 0) { // <-- bug fix: avoid divide-by-zero -> NaN
          const f = (1 - md2 / (100 * dpr)) * 0.5;
          p.x += (mdx / md2) * f; p.y += (mdy / md2) * f;
        }
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.fillStyle = `rgba(${COLOR},.7)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    function setMouse(x, y) { const dpr = Number(canvas.dataset.dpr || 1); mouse.x = x * dpr; mouse.y = y * dpr; }
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(init, 150); };
    const onMove = (e) => setMouse(e.clientX, e.clientY);
    const onTouch = (e) => { if (e.touches[0]) setMouse(e.touches[0].clientX, e.touches[0].clientY); };
    const onTouchEnd = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onTouch, { passive: true });
    document.addEventListener('touchend', onTouchEnd);
    init(); draw();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onTouch);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="nebula-bg" aria-hidden="true"><div className="nebula-third"></div></div>
      <div className="grain" aria-hidden="true"></div>
      <canvas id="particleCanvas" ref={canvasRef} aria-hidden="true"></canvas>
    </>
  );
}
