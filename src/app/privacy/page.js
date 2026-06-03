import Nav from '@/components/Nav';
import FloatingButtons from '@/components/FloatingButtons';
import './privacy.css';

export const metadata = {
  title: 'Privacy Policy - Sudhir Soni',
  description: 'Privacy policy for sudhirsoni.com. Minimal data collection, no third-party advertising, complete discretion.',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <>
      <Nav variant="simple" />
      {/* ===== page content (ported 1:1 from privacy.html) ===== */}
      <main>
<div className="policy-page">
  <div className="policy-eyebrow">Legal</div>
  <h1 className="policy-title">Privacy Policy</h1>
  <p className="policy-date">Last updated: May 2026</p>

  <div className="policy-intro">
    This website collects minimal information and does not share your personal data with third parties. Privacy is not a legal formality here — it is a principle of how this work is held.
  </div>

  <div className="policy-section">
    <h2>1. Who we are</h2>
    <p>This website is operated by Sudhir Soni, a philosopher and guide of the inner life, reachable at <a href="mailto:hello@sudhirsoni.com">hello@sudhirsoni.com</a>. All data collected through this website is handled personally by Sudhir Soni and his immediate team.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>2. What information we collect</h2>
    <p>We collect only what is necessary to respond to your inquiry or provide the service requested:</p>
    <ul>
      <li>Your name and email address, when you submit a contact or inquiry form</li>
      <li>Your email address, if you subscribe to the newsletter</li>
      <li>Basic booking information (name, email, time zone), when you book a conversation via Calendly</li>
      <li>Standard web analytics data (page views, general location, browser type) via privacy-respecting analytics tools — this data is never linked to personally identifiable information</li>
    </ul>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>3. How we use your information</h2>
    <p>Information you provide is used only to:</p>
    <ul>
      <li>Respond to your message or inquiry</li>
      <li>Send you newsletter content you have subscribed to</li>
      <li>Coordinate and manage scheduled conversations</li>
    </ul>
    <p>Your information is never sold, shared with advertisers, or used for any purpose other than direct communication with you.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>4. Third-party services</h2>
    <p>This website uses the following third-party services, each with their own privacy policies:</p>
    <ul>
      <li><strong>Calendly</strong> — for booking management. See <a href="https://calendly.com/privacy" target="_blank" rel="noopener">calendly.com/privacy</a></li>
      <li><strong>Google Fonts</strong> — for typography. Font requests are made to Google's servers.</li>
    </ul>
    <p>No social media tracking pixels, advertising networks, or data brokers are used on this website.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>5. Cookies</h2>
    <p>This website uses only essential cookies required for basic functionality. No tracking cookies, advertising cookies, or third-party analytics cookies are set without your knowledge. You may disable cookies in your browser settings without affecting your ability to use this site.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>6. Data retention</h2>
    <p>Contact form submissions and email correspondence are retained only as long as necessary to respond to your inquiry and maintain a record of communication. Newsletter subscriber data is retained until you unsubscribe. You may request deletion of your data at any time by emailing <a href="mailto:hello@sudhirsoni.com">hello@sudhirsoni.com</a>.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>7. Your rights</h2>
    <p>You have the right to request access to the personal data we hold about you, to correct inaccurate data, to request deletion of your data, and to withdraw consent for communications at any time. To exercise any of these rights, contact <a href="mailto:hello@sudhirsoni.com">hello@sudhirsoni.com</a>.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>8. Contact</h2>
    <p>For any questions regarding this privacy policy or the handling of your personal information, please contact: <a href="mailto:hello@sudhirsoni.com">hello@sudhirsoni.com</a></p>
  </div>

  <a href="/" className="back-link">← Return to the site</a>
</div>
      </main>
      <FloatingButtons />
    </>
  );
}
