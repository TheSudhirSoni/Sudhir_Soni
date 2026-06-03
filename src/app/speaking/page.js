import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import './speaking.css';
import FormScripts from '@/components/FormScripts';
import PlacesAutocomplete from '@/components/PlacesAutocomplete';

export const metadata = {
  title: 'Speaking — Sudhir Soni | Philosopher for Organizations Worldwide',
  description: 'Sudhir Soni speaks to organizations, conferences, and communities worldwide on consciousness, clarity, and the inner life of modern professionals.',
  alternates: { canonical: '/speaking' },
};

export default function Page() {
  return (
    <>
      <Nav />
      {/* ===== page content (ported 1:1 from speaking.html) ===== */}
{/* PAGE HERO */}
<section className="page-hero">
  <div className="hero-vignette" aria-hidden="true"></div>
  <div className="hero-content reveal">
    <div className="hero-eyebrow">
      <span className="hero-eyebrow-line" aria-hidden="true"></span>
      For organizations, conferences & communities
    </div>
    <h1 className="hero-title">Not a keynote.<br />A <em>genuine conversation</em> with a room.</h1>
    <p className="hero-sub">Most speakers bring information. Sudhir brings something rarer — a quality of presence, depth, and honest philosophical engagement that stays with an audience long after the event is over.</p>
    <div className="hero-cta-row">
      <a href="#inquiry" className="btn-primary">
        <span>Inquire about speaking</span>
      </a>
    </div>
  </div>
</section>

{/* WHAT MAKES THIS DIFFERENT */}
<section className="different-section">
  <div className="different-inner">
    <div className="reveal">
      <div className="section-eyebrow">What is different here</div>
      <h2 className="section-title">This is not motivational speaking.</h2>
      <div className="different-body">
        <p>Most keynotes leave people energized for a day and forgotten by the weekend. What Sudhir brings to a room is different in kind — not in quality of delivery, but in depth of substance.</p>
        <p>His talks draw on decades of philosophical study and a profound understanding of the inner life of high-performing people. He speaks to what most organizational conversations avoid: the exhaustion behind ambition, the disconnection that no team-building exercise reaches, the questions that keep people awake at 3am.</p>
        <p>The result is not a feeling of motivation. It is something quieter and more lasting — a recognition. The sense that someone finally said the true thing.</p>
      </div>
    </div>
    <div className="different-right reveal">
      <div className="diff-point">
        <div className="diff-point-title">Philosophical depth, not performance</div>
        <p className="diff-point-body">Every talk is rooted in genuine inquiry — not entertainment. The ideas have been tested over decades of study and thousands of private conversations.</p>
      </div>
      <div className="diff-point">
        <div className="diff-point-title">Custom for every context</div>
        <p className="diff-point-body">No two engagements are the same. Sudhir studies the organization, the audience, and the moment before designing what will actually serve the room.</p>
      </div>
      <div className="diff-point">
        <div className="diff-point-title">Dialogue, not monologue</div>
        <p className="diff-point-body">Most formats include space for genuine questions and direct exchange. The audience is not a passive receiver — they are participants in the inquiry.</p>
      </div>
      <div className="diff-point">
        <div className="diff-point-title">Available worldwide</div>
        <p className="diff-point-body">Sudhir speaks in-person and virtually to organizations across every timezone. Travel arrangements for in-person engagements are discussed on inquiry.</p>
      </div>
    </div>
  </div>
</section>

{/* SPEAKING TOPICS */}
<section className="topics-section">
  <div className="section-inner">
    <div className="topics-header reveal">
      <div className="section-eyebrow">Core topics</div>
      <h2 className="section-title">The conversations organizations need but rarely have.</h2>
    </div>
    <div className="topics-grid">

      <div className="topic-card reveal">
        <div className="topic-number">Topic 01</div>
        <h3 className="topic-title">The Inner Cost of Outer Success</h3>
        <p className="topic-desc">Why high-performing people feel empty in the middle of achievement — and what that emptiness is actually pointing toward. A philosophical exploration of ambition, identity, and the self that gets left behind in the pursuit of results.</p>
      </div>

      <div className="topic-card reveal">
        <div className="topic-number">Topic 02</div>
        <h3 className="topic-title">Clarity — The Leadership Skill Nobody Teaches</h3>
        <p className="topic-desc">Most leadership problems are clarity problems. Not strategic clarity or operational clarity — inner clarity. The ability to see what is actually happening, rather than what we fear or hope is happening. This talk explores what real clarity looks like and how it changes everything.</p>
      </div>

      <div className="topic-card reveal">
        <div className="topic-number">Topic 03</div>
        <h3 className="topic-title">Why We Repeat Ourselves — Patterns, Consciousness & Change</h3>
        <p className="topic-desc">Organizations — like individuals — carry unconscious patterns that repeat regardless of personnel changes. This talk brings philosophical and psychological depth to the question of why intelligent groups keep making the same mistakes, and what it actually takes to change.</p>
      </div>

      <div className="topic-card reveal">
        <div className="topic-number">Topic 04</div>
        <h3 className="topic-title">Ancient Wisdom for the Modern Professional</h3>
        <p className="topic-desc">The great philosophical traditions — Stoic, Vedantic, Buddhist, and others — addressed questions that modern productivity culture completely ignores. This talk makes their insights accessible, practical, and immediately relevant to the lives people are actually living today.</p>
      </div>

      <div className="topic-card reveal">
        <div className="topic-number">Topic 05</div>
        <h3 className="topic-title">The Exhaustion of Being Strong — Burnout Beneath the Surface</h3>
        <p className="topic-desc">Burnout is usually described as a workload problem. It is almost always a meaning problem. This talk goes beneath the standard wellness conversation to address what actually causes the particular exhaustion of high-achieving, high-responsibility people — and what restores them.</p>
      </div>

      <div className="topic-card reveal">
        <div className="topic-number">Topic 06</div>
        <h3 className="topic-title">A Custom Topic — Built for Your Audience</h3>
        <p className="topic-desc">Every engagement begins with a conversation about who will be in the room and what they most need to hear. The topic above is always developed in dialogue with the organizing team — never delivered from a fixed menu.</p>
      </div>

    </div>
  </div>
</section>

{/* FORMATS */}
<section className="formats-section">
  <div className="formats-inner">
    <div className="formats-left reveal">
      <div className="section-eyebrow">Formats</div>
      <h2 className="section-title">Every format is built around the depth of the conversation.</h2>
      <p style={{ fontFamily: '\'Cormorant Garamond\',serif', fontSize: 'clamp(1.05rem,1.8vw,1.25rem)', lineHeight: '1.82', color: 'var(--text-secondary)', marginTop: '1.6rem' }}>All formats are available in-person or virtually. Duration and structure are customized for each engagement. Pricing is discussed on inquiry.</p>
    </div>
    <div className="formats-list">
      <div className="format-card reveal">
        <div className="format-header">
          <div className="format-name">Keynote Address</div>
          <div className="format-badge">45–90 min</div>
        </div>
        <p className="format-desc">A carefully crafted talk delivered to a full audience. Designed to open a conference, close a summit, or anchor an important gathering with genuine depth.</p>
        <div className="format-meta">In-person or virtual · Worldwide</div>
      </div>
      <div className="format-card reveal">
        <div className="format-header">
          <div className="format-name">Workshop & Deep Dive</div>
          <div className="format-badge">Half or full day</div>
        </div>
        <p className="format-desc">An immersive session for teams, leadership groups, or retreat participants. Combines philosophical inquiry with direct dialogue and reflection.</p>
        <div className="format-meta">Small group format · Custom design</div>
      </div>
      <div className="format-card reveal">
        <div className="format-header">
          <div className="format-name">Fireside Dialogue</div>
          <div className="format-badge">45–75 min</div>
        </div>
        <p className="format-desc">An intimate moderated conversation exploring a philosophical theme in real time. More personal and unpredictable than a keynote. Live Q&A included.</p>
        <div className="format-meta">In-person or virtual · Live Q&A</div>
      </div>
      <div className="format-card reveal">
        <div className="format-header">
          <div className="format-name">Private Leadership Circle</div>
          <div className="format-badge">Half day</div>
        </div>
        <p className="format-desc">A curated gathering for senior leaders — typically 8 to 20 people — exploring the inner dimensions of leadership. Entirely confidential. No recording.</p>
        <div className="format-meta">Max 20 participants · Strictly confidential</div>
      </div>
      <div className="format-card reveal">
        <div className="format-header">
          <div className="format-name">Retreat Facilitation</div>
          <div className="format-badge">2–4 days</div>
        </div>
        <p className="format-desc">Multi-day philosophical retreat facilitation built around genuine inquiry rather than productivity exercises. Residential or virtual by arrangement.</p>
        <div className="format-meta">Residential or virtual · By arrangement</div>
      </div>
    </div>
  </div>
</section>

{/* WHO SUDHIR SPEAKS TO */}
<section className="audience-section">
  <div className="audience-inner">
    <div className="audience-header reveal">
      <div className="section-eyebrow">Who this serves</div>
      <h2 className="section-title">Organizations and communities seeking genuine depth.</h2>
    </div>
    <div className="audience-grid">
      <div className="audience-card reveal">
        <div className="audience-icon">Corp</div>
        <div className="audience-name">Leadership Teams & Corporations</div>
        <p className="audience-desc">Organizations where high performance has outrun meaning — and leadership teams ready to address what lies beneath the results.</p>
      </div>
      <div className="audience-card reveal">
        <div className="audience-icon">Conf</div>
        <div className="audience-name">Conferences & Summits</div>
        <p className="audience-desc">Events seeking a voice of genuine philosophical depth to anchor or elevate the conversation beyond the standard keynote format.</p>
      </div>
      <div className="audience-card reveal">
        <div className="audience-icon">Well</div>
        <div className="audience-name">Wellness & Retreat Communities</div>
        <p className="audience-desc">Communities and retreat centers wanting a facilitator who brings intellectual rigor and philosophical depth alongside human warmth.</p>
      </div>
      <div className="audience-card reveal">
        <div className="audience-icon">Edu</div>
        <div className="audience-name">Educational Institutions</div>
        <p className="audience-desc">Universities, business schools, and educational communities exploring questions of meaning, purpose, and the inner development of leaders.</p>
      </div>
      <div className="audience-card reveal">
        <div className="audience-icon">Priv</div>
        <div className="audience-name">Private Gatherings</div>
        <p className="audience-desc">Intimate groups of high-net-worth individuals, founders, or curated communities wanting a deeply private, high-quality philosophical conversation.</p>
      </div>
      <div className="audience-card reveal">
        <div className="audience-icon">NGO</div>
        <div className="audience-name">Non-profits & Social Organizations</div>
        <p className="audience-desc">Purpose-driven organizations where the weight of meaningful work has created its own particular form of exhaustion and need for deeper grounding.</p>
      </div>
    </div>
  </div>
</section>

{/* PULL QUOTE */}
<section className="philosophy-section">
  <div className="philosophy-glow" aria-hidden="true"></div>
  <div className="philosophy-content reveal">
    <p className="philosophy-text">
      A room changes when someone speaks<br />
      what everyone in it is privately thinking<br />
      but no one has <em>dared to say aloud.</em>
    </p>
    <p className="philosophy-author">— Sudhir Soni</p>
  </div>
</section>

{/* SPEAKING INQUIRY */}
<section className="inquiry-section" id="inquiry">
  <div className="inquiry-glow" aria-hidden="true"></div>
  <div className="inquiry-content">
    <div className="reveal">
      <div className="inquiry-eyebrow">Speaking inquiry</div>
      <h2 className="inquiry-heading">Tell us about your <em>event.</em></h2>
      <p className="inquiry-sub">Share the details below and Sudhir's team will respond within 2 business days. All inquiries are treated with complete discretion.</p>
    </div>
    <div className="inquiry-form-wrap reveal">
      <form className="inquiry-form fs-form" action="https://formspree.io/f/xgodqdko" method="POST">
        <input type="hidden" name="_subject" value="New speaking inquiry — sudhirsoni.com" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" />

        {/* Name + Email */}
        <div className="form-row">
          <input className="form-field" type="text" name="name" placeholder="Your name" autoComplete="name" required />
          <input className="form-field" type="email" name="email" placeholder="Email address" autoComplete="email" required />
        </div>

        {/* Phone with country code */}
        <div className="form-row-3">
          <select className="form-field" name="country_code">
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+65">🇸🇬 +65</option>
            <option value="+49">🇩🇪 +49</option>
            <option value="+33">🇫🇷 +33</option>
            <option value="+81">🇯🇵 +81</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+7">🇷🇺 +7</option>
            <option value="+55">🇧🇷 +55</option>
            <option value="+27">🇿🇦 +27</option>
            <option value="other">Other</option>
          </select>
          <input className="form-field" type="tel" name="phone" placeholder="Mobile number" autoComplete="tel" />
        </div>

        {/* Event type dropdown */}
        <select className="form-field" name="event_type">
          <option value="" disabled selected>Event type — please select</option>
          <option value="keynote">Keynote Address</option>
          <option value="workshop">Workshop / Deep Dive</option>
          <option value="fireside">Fireside Dialogue</option>
          <option value="leadership_circle">Private Leadership Circle</option>
          <option value="retreat">Retreat Facilitation</option>
          <option value="conference">Conference / Summit</option>
          <option value="corporate">Corporate Event</option>
          <option value="educational">Educational Institution</option>
          <option value="private">Private Gathering</option>
          <option value="other">Other</option>
        </select>

        {/* Date picker */}
        <input className="form-field" type="date" name="event_date" placeholder="Event date" min="2026-01-01" />

        {/* Location */}
        <input className="form-field" type="text" name="location" placeholder="City, Country / Virtual" autoComplete="address-level2" id="location-input" />

        {/* Message */}
        <textarea name="message" className="form-field" placeholder="Tell us about your event and what you are looking for — the more context, the better we can respond." rows="4"></textarea>

        <button className="form-submit" type="submit">
          <span>Send speaking inquiry</span>
        </button>
        <p className="form-note">All inquiries are acknowledged within 2 business days. Availability is limited.</p>
      </form>
      <div className="form-success" id="speaking-success" role="alert"><div className="form-success-icon">✦</div><div className="form-success-title">Your speaking inquiry has been received.</div><p className="form-success-sub">All inquiries are acknowledged within 2 business days. Availability is limited.</p></div>
      <div className="form-error" id="speaking-error" role="alert"><p className="form-error-text"></p></div>
    </div>
    <div className="direct-contact reveal">
      <span className="direct-label">Or reach directly</span>
      <a href="mailto:hello@sudhirsoni.com" className="direct-link">hello@sudhirsoni.com</a>
      <a href="https://wa.me/919351309293" className="direct-link">WhatsApp</a>
    </div>
  </div>
</section>

{/* FOOTER */}

      <Footer quote={'"The best speakers do not fill a room with words. They fill it with the courage to think."'} />
      <FloatingButtons />
      <FormScripts />
      <PlacesAutocomplete />
    </>
  );
}
