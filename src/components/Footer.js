import Link from 'next/link';

export default function Footer({ quote }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top-glow" aria-hidden="true"></div>
        <p className="footer-quote">{quote}</p>
        <p className="footer-author">— Sudhir Soni</p>
        <div className="footer-divider" aria-hidden="true"></div>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">Sudhir<span className="dot" aria-hidden="true"></span>Soni</div>
            <p>Thinker, philosopher, and guide of the inner life. Available worldwide for individuals seeking clarity beyond achievement, identity, and noise.</p>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/sessions">Sessions</Link>
            <Link href="/wisdom">Wisdom</Link>
            <Link href="/speaking">Speaking</Link>
            <Link href="/book">Book a Conversation</Link>
          </div>
          <div className="footer-col">
            <h4>Reach</h4>
            <a href="mailto:hello@sudhirsoni.com">hello@sudhirsoni.com</a>
            <a href="https://wa.me/919351309293">WhatsApp · +91 93513 09293</a>
            <a href="https://calendly.com/sudhirsoni/20min" target="_blank" rel="noopener">Book free 20-minute conversation</a>
            <p>Conversations available worldwide</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Sudhir Soni · All Rights Reserved</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/confidentiality">Session Confidentiality</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
