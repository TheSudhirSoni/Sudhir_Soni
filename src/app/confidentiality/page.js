import Nav from '@/components/Nav';
import FloatingButtons from '@/components/FloatingButtons';
import './confidentiality.css';

export const metadata = {
  title: 'Session Confidentiality - Sudhir Soni',
  description: 'Everything shared in a session with Sudhir Soni is held in absolute confidence. The complete session confidentiality policy.',
  alternates: { canonical: '/confidentiality' },
};

export default function Page() {
  return (
    <>
      <Nav variant="simple" />
      {/* ===== page content (ported 1:1 from confidentiality.html) ===== */}
      <main>
<div className="policy-page">
  <div className="policy-eyebrow">Session Policy</div>
  <h1 className="policy-title">Session Confidentiality Policy</h1>
  <p className="policy-date">Last updated: May 2026</p>

  <div className="policy-intro">
    Everything that is said in a session is kept in complete confidence. This is not a legal formality — it is the foundational principle on which the entire work rests. A conversation cannot be honest unless the space is truly safe.
  </div>

  <div className="policy-section">
    <h2>1. The principle of complete confidentiality</h2>
    <p>Everything shared during a session — spoken, written, or implied — is held in absolute confidence. Nothing is disclosed to any third party, under any circumstances, without your explicit written consent.</p>
    <p>This applies to: the content of what you share, the fact that you are working with Sudhir, your name and contact details, and any identifying information about your situation, relationships, or life circumstances.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>2. No recording</h2>
    <p>Sessions are never recorded — audio, video, or otherwise — without your explicit prior consent. In the rare case where a recording is requested by you for personal use, this is discussed and agreed upon before the session begins. No recordings are retained by Sudhir Soni beyond the agreed purpose.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>3. No notes shared externally</h2>
    <p>Any private notes made in the context of working together are held confidentially and are never shared with any person, organization, or institution. They exist only to support the quality of the work and are not accessible to any third party.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>4. Testimonials and references</h2>
    <p>Testimonials featured on this website are shared only with the explicit written consent of the person who provided them. Names are initialized and identifying details are adjusted or omitted to protect identity. No testimonial appears without direct permission, and permission may be withdrawn at any time.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>5. Group sessions</h2>
    <p>In group inquiry sessions, all participants are expected to hold what is shared within the group in confidence. While Sudhir Soni cannot guarantee the behavior of other participants, group sessions open with an explicit shared agreement on confidentiality. Sensitive personal information is never required to be shared in group settings.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>6. Limits of confidentiality</h2>
    <p>In the extremely rare circumstance where there is immediate and serious risk to life — yours or another person's — Sudhir Soni may, at his discretion, suggest or encourage contact with emergency services. This is not a clinical or legal obligation in the context of this work, but a basic human one. Every effort would be made to discuss this with you directly before any action is taken.</p>
  </div>

  <div className="policy-divider"></div>

  <div className="policy-section">
    <h2>7. Your trust is the work</h2>
    <p>This policy exists because the quality of a conversation depends entirely on the safety of the space it happens in. If you ever have any concern about how your information is being held, please write directly to <a href="mailto:hello@sudhirsoni.com">hello@sudhirsoni.com</a>. Any such concern will be treated with the same care as everything else.</p>
  </div>

  <a href="/" className="back-link">← Return to the site</a>
</div>
      </main>
      <FloatingButtons />
    </>
  );
}
