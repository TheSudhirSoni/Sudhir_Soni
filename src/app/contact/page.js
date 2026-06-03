import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import './contact.css';
import FormScripts from '@/components/FormScripts';

export const metadata = {
  title: 'Contact Sudhir Soni - Indian Philosopher | Guide of the Inner Life',
  description: 'Reach Sudhir Soni by email, WhatsApp, or contact form. All messages read personally and treated with complete discretion.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <>
      <Nav />
      {/* ===== page content (ported 1:1 from contact.html) ===== */}
<main>
<div className="contact-page">
  <div className="contact-left reveal">
    <div className="contact-eyebrow"><span className="contact-eyebrow-line" aria-hidden="true"></span>Get in touch</div>
    <h1 className="contact-title">Every conversation begins with a <em>first word.</em></h1>
    <p className="contact-sub">There is no wrong way to reach out. Write whatever feels true. Sudhir reads every message personally and responds with the same care he brings to every conversation.</p>
    <div className="direct-options">
      <a href="mailto:hello@sudhirsoni.com" className="direct-option glass-card">
        <div className="direct-option-icon">Mail</div>
        <div className="direct-option-text">
          <div className="direct-option-label">Email</div>
          <div className="direct-option-value">hello@sudhirsoni.com</div>
        </div>
      </a>
      <a href="https://wa.me/919351309293" className="direct-option glass-card" target="_blank" rel="noopener">
        <div className="direct-option-icon">WA</div>
        <div className="direct-option-text">
          <div className="direct-option-label">WhatsApp</div>
          <div className="direct-option-value">+91 93513 09293</div>
        </div>
      </a>
      <a href="https://calendly.com/sudhirsoni/20min" className="direct-option glass-card" target="_blank" rel="noopener">
        <div className="direct-option-icon">Cal</div>
        <div className="direct-option-text">
          <div className="direct-option-label">Book a free conversation</div>
          <div className="direct-option-value">calendly.com/sudhirsoni/20min</div>
        </div>
      </a>
    </div>
  </div>

  <div className="contact-right reveal">
    <div className="contact-form-wrap glass-card">
      <h2 className="contact-form-title">Send a message</h2>
      <form className="contact-form fs-form" action="https://formspree.io/f/xgodqdko" method="POST">
        <input type="hidden" name="_subject" value="New inquiry from sudhirsoni.com" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" />
        <div className="form-row">
          <input className="form-field" type="text" placeholder="Your name" name="name" autoComplete="name" />
          <input className="form-field" type="email" placeholder="Email address" name="email" autoComplete="email" />
        </div>
        <input className="form-field" type="text" placeholder="Subject — or leave this blank" name="subject" />
        <textarea className="form-field" name="message" placeholder="Write whatever feels true. There is no wrong way to begin." rows="6"></textarea>
        <button className="form-submit" type="submit"><span>Send message</span></button>
        <p className="form-note">All messages are read personally and treated with complete discretion. Response within 48 hours.</p>
      </form>
      <div className="form-success" id="contact-success" role="alert">
        <div className="form-success-icon">✦</div>
        <div className="form-success-title">Your message has been sent.</div>
        <p className="form-success-sub">Sudhir reads every message personally. You will hear back within 48 hours.</p>
      </div>
      <div className="form-error" id="contact-error" role="alert">
        <p className="form-error-text"></p>
      </div>
    </div>
  </div>
</div>
</main>

      <Footer quote={'"The first word spoken honestly is already half the conversation done."'} />
      <FloatingButtons />
      <FormScripts />
    </>
  );
}
