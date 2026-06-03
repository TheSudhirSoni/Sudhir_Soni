import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import './sessions.css';

export const metadata = {
  title: 'Sessions — Sudhir Soni | Personal Philosophical Conversations',
  description: 'Three ways to work with Sudhir Soni - personal conversation, group inquiry, and speaking. First conversation is always free.',
  alternates: { canonical: '/sessions' },
};

export default function Page() {
  return (
    <>
      <Nav />
      {/* ===== page content (ported 1:1 from sessions.html) ===== */}
{/* PAGE HERO */}
<section className="page-hero">
  <div className="hero-vignette" aria-hidden="true"></div>
  <div className="hero-content reveal">
    <div className="hero-eyebrow">
      <span className="hero-eyebrow-line" aria-hidden="true"></span>
      How we can work together
    </div>
    <h1 className="hero-title">Different conversations for different <em>moments in life.</em></h1>
    <p className="hero-sub">This is not a program you must fit into. It is a private human space where you can arrive honestly — with confusion, silence, grief, pressure, questions, or the thing you have not yet found words for.</p>
    <div className="hero-cta-row">
      <a href="https://calendly.com/sudhirsoni/20min" className="btn-primary" target="_blank" rel="noopener">
        <span>Begin with a free conversation</span>
      </a>
      <a href="#sessions" className="btn-ghost-text">See all session types</a>
    </div>
    <div className="hero-note">No pressure. No performance. No need to prepare perfectly.</div>
  </div>
</section>

{/* FREE CONVERSATION — TEXT STRIP ONLY, NO DUPLICATE BUTTON */}
<div className="free-banner">
  <div className="free-banner-inner">
    <div className="free-banner-text">
      <strong>The first conversation is always free</strong>
      Twenty minutes. No commitment. No payment. Just a conversation to see if this feels right for you. Book via the link above or WhatsApp at +91 93513 09293.
    </div>
  </div>
</div>

{/* SESSION TYPES */}
<section className="sessions-section" id="sessions">
  <div className="sessions-header reveal">
    <div className="section-eyebrow">Ways to work together</div>
    <h2 className="section-title">Choose the door that feels right.</h2>
  </div>

  <div className="session-list">

    {/* Session 1: Personal Conversation */}
    <div className="session-card reveal">
      <div className="session-left">
        <div className="session-tag personal">Personal</div>
        <h3 className="session-name">Personal Conversation</h3>
        <p className="session-tagline">One person. One hour. Complete presence. For anyone carrying something they have not been able to set down — alone.</p>
        <div className="session-meta">
          <div className="meta-item"><div className="meta-dot"></div>60 minutes</div>
          <div className="meta-item"><div className="meta-dot"></div>Google Meet or Zoom</div>
          <div className="meta-item"><div className="meta-dot"></div>Any timezone</div>
          <div className="meta-item"><div className="meta-dot"></div>Strictly confidential</div>
        </div>
        <a href="https://calendly.com/sudhirsoni/20min" className="session-cta-link" target="_blank" rel="noopener">
          Begin with a free call →
        </a>
      </div>
      <div className="session-right">
        <div className="session-desc">
          <p>This is the core of the work. One hour, one person, complete attention. No script, no agenda, no methodology imposed from outside. We begin with whatever you bring — and follow the truth of what's actually there.</p>
          <p>People come to personal conversations carrying many different things: a relationship that has fractured, a career that feels hollow, a grief that won't lift, a pattern they can see but cannot break. Whatever it is, we sit with it together — until something shifts.</p>
          <p>Most people feel something move in the very first session. Not because of a technique. Because genuine listening is so rare that the body knows it immediately.</p>
        </div>
        <div className="session-includes">
          <div className="session-includes-title">This includes</div>
          <div className="session-includes-list">
            <div className="session-include-item">
              <div className="include-mark"></div>
              Full hour of undivided, unprepared presence
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              No fixed agenda — we follow what is true for you
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Complete confidentiality — nothing leaves the conversation
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Available worldwide via Google Meet or Zoom
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Session 2: Ongoing Work */}
    <div className="session-card reveal">
      <div className="session-left">
        <div className="session-tag discovery">Ongoing</div>
        <h3 className="session-name">Ongoing Work</h3>
        <p className="session-tagline">For those who have found something real in the first conversation and want to go deeper, over time, at their own pace.</p>
        <div className="session-meta">
          <div className="meta-item"><div className="meta-dot"></div>Your pace, your schedule</div>
          <div className="meta-item"><div className="meta-dot"></div>No rigid program</div>
          <div className="meta-item"><div className="meta-dot"></div>Google Meet or Zoom</div>
          <div className="meta-item"><div className="meta-dot"></div>Worldwide</div>
        </div>
        <a href="https://calendly.com/sudhirsoni/20min" className="session-cta-link" target="_blank" rel="noopener">
          Start with a free call →
        </a>
      </div>
      <div className="session-right">
        <div className="session-desc">
          <p>Some things require a single conversation to shift. Others have been growing for years and need more time and space to unwind. Ongoing work is for people who recognize that what they are carrying is not a quick fix — and who are ready to do the real thing.</p>
          <p>There is no rigid structure. We do not follow a program or a curriculum. Each session begins where you actually are. The pace is yours. The depth is yours. We go as slowly or as quickly as your truth requires.</p>
          <p>This is not therapy. It is something older and less clinical — a sustained philosophical companionship with someone who will not rush you toward resolution before you have actually found it.</p>
        </div>
        <div className="session-includes">
          <div className="session-includes-title">This includes</div>
          <div className="session-includes-list">
            <div className="session-include-item">
              <div className="include-mark"></div>
              Sessions scheduled at your cadence — weekly, fortnightly, or as needed
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Continuity of understanding built across sessions
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              No fixed program or rigid timeline
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Continues only as long as it feels genuinely useful to you
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Session 3: Group Inquiry */}
    <div className="session-card reveal">
      <div className="session-left">
        <div className="session-tag group">Group</div>
        <h3 className="session-name">Group Inquiry</h3>
        <p className="session-tagline">A circle of people asking the real questions — together. Monthly online gathering. Open, honest, transformative.</p>
        <div className="session-meta">
          <div className="meta-item"><div className="meta-dot"></div>Monthly gathering</div>
          <div className="meta-item"><div className="meta-dot"></div>Small group format</div>
          <div className="meta-item"><div className="meta-dot"></div>Open to all timezones</div>
          <div className="meta-item"><div className="meta-dot"></div>Live online</div>
        </div>
        <a href="https://calendly.com/sudhirsoni/20min" className="session-cta-link" target="_blank" rel="noopener">
          Express interest →
        </a>
      </div>
      <div className="session-right">
        <div className="session-desc">
          <p>There is something that happens in a group of honest people that cannot happen in private — a recognition. When someone articulates what you have been feeling but could not say, the relief is unlike anything else. You are not alone. And you never were.</p>
          <p>Group Inquiry is a monthly gathering of people willing to ask genuine questions and sit with genuine uncertainty together. Sudhir guides the inquiry, but does not lecture. He creates the conditions for collective seeing.</p>
          <p>Topics vary — sometimes focused on a particular theme, sometimes entirely open. What does not vary is the quality of attention and the safety of the space.</p>
        </div>
        <div className="session-includes">
          <div className="session-includes-title">This includes</div>
          <div className="session-includes-list">
            <div className="session-include-item">
              <div className="include-mark"></div>
              Monthly live session — approximately 90 minutes
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Small, curated group for genuine depth
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Guided inquiry — not lecture or performance
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Open worldwide — all sessions recorded for members
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Session 4: Speaking & Workshops */}
    <div className="session-card reveal">
      <div className="session-left">
        <div className="session-tag speaking">Speaking</div>
        <h3 className="session-name">Speaking & Workshops</h3>
        <p className="session-tagline">For organizations, conferences, and communities worldwide who want a voice of genuine wisdom in the room.</p>
        <div className="session-meta">
          <div className="meta-item"><div className="meta-dot"></div>In-person or virtual</div>
          <div className="meta-item"><div className="meta-dot"></div>Custom format</div>
          <div className="meta-item"><div className="meta-dot"></div>Worldwide</div>
          <div className="meta-item"><div className="meta-dot"></div>By inquiry</div>
        </div>
        <a href="/speaking" className="session-cta-link">
          Learn about speaking →
        </a>
      </div>
      <div className="session-right">
        <div className="session-desc">
          <p>Sudhir speaks to organizations and communities who want something beyond the standard keynote — not motivation, not productivity tips, but genuine philosophical depth applied to the real challenges people face inside modern institutions.</p>
          <p>His talks and workshops draw on decades of philosophical study to illuminate what most leadership conversations avoid: the inner life of the people doing the work. The exhaustion behind high performance. The emptiness at the center of achievement. The disconnection that no team-building exercise addresses.</p>
          <p>He has spoken to leadership teams, wellness communities, educational institutions, and professional gatherings. Each engagement is custom-designed for the specific group and context.</p>
        </div>
        <div className="session-includes">
          <div className="session-includes-title">Previous topics include</div>
          <div className="session-includes-list">
            <div className="session-include-item">
              <div className="include-mark"></div>
              The inner cost of outer success
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Why clarity is the rarest leadership skill
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Consciousness, patterns, and the psychology of change
            </div>
            <div className="session-include-item">
              <div className="include-mark"></div>
              Ancient wisdom for the modern professional
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* WHAT TO EXPECT — from reference */}
<section className="section expect-section">
  <div className="section-inner expect-shell">
    <div className="expect-left reveal">
      <div className="section-eyebrow">What to expect</div>
      <h2 className="section-title">You do not need to know how to begin.</h2>
      <p className="expect-note">Most people arrive with a feeling before they arrive with a sentence. That is welcome here.</p>
    </div>
    <div className="expect-lines">
      <div className="expect-line glass-panel reveal">You do not need to prepare a story.</div>
      <div className="expect-line glass-panel reveal">You do not need to impress me.</div>
      <div className="expect-line glass-panel reveal">You do not need to have the right words.</div>
      <div className="expect-line glass-panel reveal">You can arrive with silence, confusion, or honesty.</div>
      <div className="expect-line glass-panel reveal">We continue only if the conversation feels aligned to you.</div>
    </div>
  </div>
</section>

{/* THE PROCESS — from reference, orbs with arrows */}
<section className="how-section">
  <div className="how-header reveal">
    <div className="section-eyebrow">The process</div>
    <h2 className="section-title">Simple enough to feel safe. Spacious enough to become real.</h2>
  </div>
  <div className="process-river">
    <div className="process-step reveal">
      <div className="process-dot">01</div>
      <h3 className="step-title">Book the free conversation</h3>
      <p className="step-desc">Choose a time. No payment. No commitment. Just the first private meeting — to see if this feels right.</p>
    </div>
    <div className="process-arrow" aria-hidden="true">›</div>
    <div className="process-step reveal">
      <div className="process-dot">02</div>
      <h3 className="step-title">Meet privately</h3>
      <p className="step-desc">We speak honestly via Google Meet or Zoom. You bring what is real — even if it is unfinished, unnamed, or uncertain.</p>
    </div>
    <div className="process-arrow" aria-hidden="true">›</div>
    <div className="process-step reveal">
      <div className="process-dot">03</div>
      <h3 className="step-title">Continue only if aligned</h3>
      <p className="step-desc">If it feels right, we go deeper at your pace. If not, the first conversation remains complete in itself.</p>
    </div>
  </div>
</section>

{/* PHILOSOPHY STATEMENT */}
<section className="philosophy-section">
  <div className="philosophy-glow" aria-hidden="true"></div>
  <div className="philosophy-content reveal">
    <p className="philosophy-text">
      Pricing is never shared publicly.<br />
      Because the work is not a product.<br />
      <em>It is a conversation between two people.</em>
    </p>
    <p className="philosophy-author">On the nature of this work — Sudhir Soni</p>
  </div>
</section>

{/* FAQ ACCORDION */}
<section className="faq-section">
  <div className="faq-inner">
    <div className="faq-left reveal">
      <div className="section-eyebrow">Questions</div>
      <h2 className="section-title">Things people ask before beginning.</h2>
      <p className="faq-note">If your question isn't here, the free 20-minute call is the best place to ask it. That conversation will tell you more than any FAQ could.</p>
    </div>

    <div className="faq-list">

      <div className="faq-item">
        <button className="faq-question" type="button">
          What is the first conversation actually like?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          Twenty minutes. You speak about what you're carrying — whatever is most present for you right now. Sudhir listens. Really listens. He may ask a question or two. There is no intake form, no preliminary assessment, no checklist. By the end of it, you will know whether this feels right. Most people say something shifted even in that first conversation.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          Is this therapy? How is it different?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          It is not therapy. Therapy has a clinical framework — diagnosis, treatment, symptoms, sessions governed by protocol. This is different. It is philosophical conversation — rooted in genuine inquiry, ancient wisdom, and deep listening. Many people who come to Sudhir have already done therapy and found it useful but incomplete. This addresses what therapy often cannot: the questions beneath the symptoms.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          Do I need to be spiritual or philosophical to benefit?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          Not at all. Many of the people who benefit most describe themselves as skeptical, analytical, or not particularly spiritual. The work does not require any belief system. It requires only honesty — a willingness to look at what is actually true in your life. Sudhir meets people exactly where they are, not where he thinks they should be.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          How many sessions will I need?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          There is no standard answer and Sudhir would not want to give you one. Some things shift in a single conversation. Others have roots that go deeper and benefit from sustained attention over time. There is no minimum commitment. You continue only as long as the work feels genuinely useful. Many people return periodically — not because they are in crisis, but because the conversation has become something they value.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          What is discussed in a session kept confidential?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          Everything. Absolutely everything. Nothing that is said in a session is shared with anyone, under any circumstances. This is not a legal formality — it is a fundamental principle of how the work is held. The space is only useful if it is completely safe. You can read the full Session Confidentiality Policy for more detail.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          Can I speak to Sudhir if I am not in India?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          Yes. All personal sessions happen via Google Meet or Zoom and are available worldwide. The majority of people Sudhir works with are outside India — in the US, UK, Australia, UAE, Europe, and Southeast Asia. Time zones are accommodated. The conversation is the same regardless of geography.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          What does a session cost?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          Pricing is discussed privately after the discovery call — never published publicly. The first conversation is always free and carries no obligation. If you decide to continue, the details are shared in that conversation. The approach to pricing reflects the nature of the work: personal, considered, and not transactional.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" type="button">
          What if I am not sure whether I need this?
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
        <div className="faq-answer">
          Then the free conversation is exactly where to begin. You do not need to arrive with a clear problem or a precise question. Many people begin simply with a feeling — that something is not right, that something is missing, that they have been carrying something for too long. That is more than enough to start.
        </div>
      </div>

    </div>
  </div>
</section>

{/* FINAL CTA */}
<section className="final-cta-section">
  <div className="final-glow" aria-hidden="true"></div>
  <div className="final-content reveal">
    <div className="final-eyebrow">Ready to begin</div>
    <h2 className="final-heading">The first conversation costs you <em>nothing.</em><br />What it might give you — is everything.</h2>
    <p className="final-sub">Twenty minutes. No pressure. No payment. No performance. Just a conversation — to see if this is the right space for you.</p>
    <a href="https://calendly.com/sudhirsoni/20min" className="btn-primary" target="_blank" rel="noopener">
      <span>Book your free conversation</span>
    </a>
  </div>
</section>

{/* FOOTER */}

      <Footer quote={'"The question you are afraid to ask out loud is usually the one that holds the answer."'} />
      <FloatingButtons />
    </>
  );
}
