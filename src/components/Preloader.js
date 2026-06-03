'use client';
import { useEffect, useRef, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const barRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    const DURATION = 2800;
    let raf, start;
    function tick(now) {
      if (start === undefined) start = now;
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 2.8);
      const pct = Math.round(eased * 100);
      if (barRef.current) barRef.current.style.width = pct + '%';
      if (numRef.current) numRef.current.textContent = pct + '%';
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setHidden(true), 400);
    }
    const startTimer = setTimeout(() => { raf = requestAnimationFrame(tick); }, 100);
    return () => { clearTimeout(startTimer); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className={'preloader' + (hidden ? ' hidden' : '')} id="preloader">
      <div className="pl-bg"></div>
      <div className="pl-grid"></div>
      <div className="ring ring-outer"></div>
      <div className="ring ring-mid"></div>
      <div className="ring ring-inner"></div>
      <div className="center-orb"></div>
      <div className="pl-content">
        <div className="pl-eyebrow">Entering the Inner World</div>
        <p className="pl-name" aria-hidden="true"><span>Sudhir</span><span className="dot"></span><span>Soni</span></p>
        <p className="pl-subtitle">Where ancient wisdom meets future consciousness</p>
        <div className="pl-progress-wrap"><div className="pl-progress-bar" id="progressBar" ref={barRef}></div></div>
        <div className="pl-status"><span>Preparing the space</span><span id="progressNum" ref={numRef}>0%</span></div>
      </div>
    </div>
  );
}
