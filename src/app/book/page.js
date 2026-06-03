import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import './book.css';

export const metadata = {
  title: 'Book a Free Conversation - Sudhir Soni | First Session Always Free',
  description: 'Book a free 20-minute conversation with Sudhir Soni. No commitment. No payment. Just a first honest conversation.',
  alternates: { canonical: '/book' },
};

export default function Page() {
  return (
    <>
      <Nav />
      {/* ===== page content (ported 1:1 from book.html) ===== */}
{/* MAIN BOOK PAGE */}
<main>
<div className="book-page">

  {/* LEFT — Reassurance */}
  <div className="book-left reveal">
    <div className="book-eyebrow">
      <span className="book-eyebrow-line" aria-hidden="true"></span>
      The first conversation is free
    </div>
    <h1 className="book-title">Choose a time. <em>Begin.</em></h1>
    <p className="book-sub">Twenty minutes. No payment. No commitment. No need to arrive with the right words or a perfectly formed question. Just choose a time and show up honestly.</p>

    <div className="expect-list">
      <div className="expect-item">
        <div className="expect-mark"></div>
        You speak about whatever is most present for you right now
      </div>
      <div className="expect-item">
        <div className="expect-mark"></div>
        Sudhir listens — really listens — without an agenda
      </div>
      <div className="expect-item">
        <div className="expect-mark"></div>
        No intake form, no assessment, no checklist
      </div>
      <div className="expect-item">
        <div className="expect-mark"></div>
        By the end, you will know if this feels right for you
      </div>
    </div>

    <div className="alt-contact glass-card">
      <div className="alt-contact-label">Prefer to reach out directly?</div>
      <div className="alt-contact-item">
        <div className="alt-dot"></div>
        <a href="mailto:hello@sudhirsoni.com" className="alt-link">hello@sudhirsoni.com</a>
      </div>
      <div className="alt-contact-item">
        <div className="alt-dot"></div>
        <a href="https://wa.me/919351309293" className="alt-link">WhatsApp · +91 93513 09293</a>
      </div>
    </div>
  </div>

  {/* RIGHT — Calendly */}
  <div className="book-right reveal">
    <div className="calendly-wrap glass-card">
      <div className="calendly-loading" id="calendlyLoading">
        <div className="loading-orb"></div>
        <span className="loading-text">Loading calendar</span>
      </div>
      <iframe src="https://calendly.com/sudhirsoni/20min?embed_domain=sudhirsoni.com&embed_type=Inline&hide_gdpr_banner=1&background_color=02060d&text_color=F1F5F9&primary_color=E0B470" title="Book a free conversation with Sudhir Soni" id="calendlyFrame" loading="lazy"></iframe>
    </div>
    <div className="book-reassurance glass-card">
      "There is no pressure. The calendar is simply a door. Whether you walk through it or not is entirely yours to decide."
    </div>
  </div>

</div>
</main>

{/* FOOTER */}

      <Footer quote={'"Showing up is the first act of honesty. Everything else follows from there."'} />
      <FloatingButtons />
    </>
  );
}
