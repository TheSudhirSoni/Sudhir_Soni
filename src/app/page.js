import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Preloader from '@/components/Preloader';
import MarqueeTestimonials from '@/components/MarqueeTestimonials';
import './home.css';

export const metadata = {
  title: 'Sudhir Soni — Philosopher, Thinker & Guide of the Inner Life',
  description: 'Philosophical conversations on clarity, consciousness, and meaning. For those who have mastered the outer world and now seek the inner one.',
  alternates: { canonical: '/' },
};

export default function Page() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sudhir Soni',
    jobTitle: 'Philosopher, Thinker & Guide of the Inner Life',
    url: 'https://sudhirsoni.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    email: 'hello@sudhirsoni.com',
    sameAs: [],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <Preloader />
      <Nav />
      {/* ===== page content (ported 1:1 from index.html) ===== */}
{/* 1.1 HERO */}
<section className="hero" id="home">
  <div className="hero-vignette" aria-hidden="true"></div>
  <div className="hero-content">
    {/* FIX 2: eyebrow-line is a separate span — title starts at same left edge */}
    <div className="hero-eyebrow">
      <span className="hero-eyebrow-line" aria-hidden="true"></span>
      For those who have outgrown easy answers
    </div>
    <h1 className="hero-title">You don't have to carry this <em>alone</em> anymore.</h1>
    <p className="hero-sub">A philosopher's space for the rare ones — those who have mastered the outer world, and now sense there is something far more real to understand. Conversations across the world.</p>
    <div className="hero-actions">
      <a href="https://calendly.com/sudhirsoni/20min" className="btn-primary" target="_blank" rel="noopener">
        <span>Talk to me — first conversation is free</span>
      </a>
      <a href="/about" className="btn-ghost">Who is Sudhir Soni</a>
    </div>
  </div>
  <div className="scroll-cue" aria-hidden="true">
    <span className="scroll-cue-text">Continue</span>
    <div className="scroll-cue-line"></div>
  </div>
</section>

{/* 1.2 TRUST STRIP */}
<section className="trust-strip" aria-label="Trust indicators">
  <div className="trust-content">
    <span className="trust-item">Worldwide Conversations</span>
    <span className="trust-item">All Timezones</span>
    <span className="trust-item">Strictly Confidential</span>
    <span className="trust-item">By Invitation & Open Booking</span>
  </div>
</section>

{/* 1.3 MIRROR */}
<section className="section">
  <div className="section-inner">
    <div className="section-header-center reveal">
      <div className="section-eyebrow">A moment of honesty</div>
      <h2 className="section-title">Does any of this sound like your life right now?</h2>
    </div>
    <div className="mirror-grid">
      <div className="mirror-card reveal">"You smile in front of everyone. But there are nights you cry alone, and you don't even fully understand why."</div>
      <div className="mirror-card reveal">"Everything is going well on paper. Career, family, life. But inside, something feels empty — and you can't tell anyone, because how do you explain it?"</div>
      <div className="mirror-card reveal">"You loved someone. You gave everything. And now you're sitting with a pain that nobody around you seems to truly understand."</div>
      <div className="mirror-card reveal">"You've read books, watched videos, tried therapy. Some things helped a little. But the real answer — the one you're actually looking for — is still missing."</div>
      <div className="mirror-card reveal">"You keep meeting the same kind of people. Falling into the same patterns. You know it's a cycle. You just don't know how to break it."</div>
      <div className="mirror-card reveal">"You're not looking for someone to fix you. You're looking for someone who will actually listen, actually understand, and help you find your own clarity."</div>
    </div>
    <div className="mirror-footer reveal">
      <p className="mirror-footer-text">If even one of these felt like it was written for you — it was. Let's talk.</p>
    </div>
  </div>
</section>

{/* 1.4 WHO IS SUDHIR */}
<section className="section" id="about">
  <div className="section-inner">
    <div className="who-grid">
      <div className="who-left reveal">
        <div className="section-eyebrow">Who I am</div>
        <h2 className="section-title">A man who has lived in <span style={{ fontFamily: 'Syne,sans-serif', fontStyle: 'normal', fontWeight: '400', background: 'linear-gradient(110deg,var(--gold-main),var(--gold-bright))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>two worlds.</span></h2>
        <div className="who-quote">
          "I have spent a lifetime preparing for the conversation we are about to have."<br /><br />— Sudhir Soni
        </div>
      </div>
      <div className="who-right reveal">
        <div className="who-prose">
          <p>For years, the world knew me as the man who builds — businesses, brands, empires from nothing. I understood strategy, systems, and what it takes to make something real and lasting.</p>
          <p>But there was always another room in my life. A quieter one. Where people came — not for strategy, but for something they could not name. A broken relationship. An emptiness behind their success. A question they were ashamed to say out loud.</p>
          <p>And I would sit with them. And something would shift.</p>
          <p>I have spent a lifetime reading — over ten thousand works of philosophy, psychology, spiritual thought, and human behavior. Not to collect knowledge. But because I was searching, genuinely, for the truth of why we suffer, why we repeat ourselves, and what it actually means to be free.</p>
          <p>I found answers. Real ones. And I kept them in a private room for too long.</p>
          <p><strong>That room is open now.</strong></p>
          <p><a href="/about" className="who-cta">Read my full story →</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 1.5 HOW I WORK */}
<section className="section">
  <div className="section-inner">
    <div className="section-header-center reveal">
      <div className="section-eyebrow">How we work together</div>
      <h2 className="section-title">No frameworks. No five-step plans. Just honest conversation.</h2>
    </div>
    <div className="work-steps">
      <div className="reveal">
        <div className="work-number">01</div>
        <h3 className="work-step-title">We talk for the first time, for free.</h3>
        <p className="work-step-desc">Twenty minutes. No payment. No commitment. Just you, me, and whatever you're carrying. You speak. I listen — really listen. Most people feel something shift in this first conversation itself.</p>
      </div>
      <div className="reveal">
        <div className="work-number">02</div>
        <h3 className="work-step-title">We continue, only if it feels right to you.</h3>
        <p className="work-step-desc">If you feel heard and want to go deeper, we continue. We meet over Zoom from anywhere in the world. There is no rigid program. We work at your pace, on what you are actually facing.</p>
      </div>
      <div className="reveal">
        <div className="work-number">03</div>
        <h3 className="work-step-title">Slowly, you start seeing clearly.</h3>
        <p className="work-step-desc">Not because I gave you answers. Because together, we removed the noise — and you finally heard your own truth. That clarity is what changes a life.</p>
      </div>
    </div>
    <div className="work-cta-wrap reveal">
      <a href="https://calendly.com/sudhirsoni/20min" target="_blank" rel="noopener" className="text-cta">Begin with a free conversation</a>
    </div>
  </div>
</section>

{/* 1.6 PHILOSOPHY DIVIDER */}
<section className="philosophy-section">
  <div className="philosophy-glow" aria-hidden="true"></div>
  <div className="philosophy-content reveal">
    <p className="philosophy-text">
      Most people do not have a life problem.<br />
      They have a clarity problem.<br />
      <em>I help you see.</em>
    </p>
    <p className="philosophy-author">— Sudhir Soni</p>
  </div>
</section>

{/* 1.7 WHAT I HELP WITH */}
<section className="section">
  <div className="section-inner">
    <div className="section-header-center reveal">
      <div className="section-eyebrow">What I help with</div>
      <h2 className="section-title">People come to me carrying many things.</h2>
    </div>
    <div className="help-pills">
      <span className="help-pill reveal">Relationship breakdown</span>
      <span className="help-pill reveal">The emptiness behind success</span>
      <span className="help-pill reveal">Grief that won't move</span>
      <span className="help-pill reveal">Repeating patterns in love</span>
      <span className="help-pill reveal">Loss of purpose</span>
      <span className="help-pill reveal">Spiritual confusion</span>
      <span className="help-pill reveal">Anxiety with no clear source</span>
      <span className="help-pill reveal">Family wounds</span>
      <span className="help-pill reveal">Career crossroads</span>
      <span className="help-pill reveal">The search for meaning</span>
      <span className="help-pill reveal">Karma questions</span>
      <span className="help-pill reveal">Inner conflict</span>
      <span className="help-pill reveal">Feeling fundamentally unseen</span>
      <span className="help-pill reveal">The exhaustion of being strong</span>
    </div>
    <div className="help-footer reveal">
      <p className="help-footer-text">And the things you have not yet found the words for.</p>
    </div>
  </div>
</section>

{/* 1.8 SESSIONS */}
<section className="section" id="sessions">
  <div className="section-inner">
    <div className="section-header-center reveal">
      <div className="section-eyebrow">Ways we can meet</div>
      <h2 className="section-title">Three different doors. Same depth of presence.</h2>
    </div>
    <div className="sessions-grid">
      <div className="session-card reveal">
        <h3 className="session-title">Personal Conversation</h3>
        <p className="session-desc">One person. One hour. Complete presence. For anyone carrying something they have not been able to set down — alone.</p>
      </div>
      <div className="session-card reveal">
        <h3 className="session-title">Group Inquiry</h3>
        <p className="session-desc">A circle of people asking the real questions — together. Monthly online gathering. Open, honest, transformative.</p>
      </div>
      <div className="session-card reveal">
        <h3 className="session-title">Speaking & Workshops</h3>
        <p className="session-desc">For organizations, conferences, and communities worldwide who want a voice of genuine wisdom in the room.</p>
      </div>
    </div>
    <div className="sessions-cta-wrap reveal">
      <a href="/sessions" className="text-cta">Explore all ways we can work together</a>
    </div>
  </div>
</section>

{/* 1.9 TESTIMONIALS — 10 per row, drag-to-scroll */}
<section className="testimonials-section">
  <div className="testimonials-header reveal">
    <div className="section-eyebrow">What people say</div>
    <h2 className="section-title">Stories from across the world.</h2>
  </div>

  <div className="marquee-wrap">
    <div className="marquee-fade marquee-fade-left" aria-hidden="true"></div>
    <div className="marquee-fade marquee-fade-right" aria-hidden="true"></div>

    {/* ROW 1 — auto-scrolls right, draggable */}
    <div className="marquee-track" id="track1" data-speed="1.2">
      <div className="testimonial-card"><p className="testimonial-text">"I had been to three therapists before Sudhir. They were all good. But this was different. He did not just hear my words — he heard what I was actually saying. In one conversation, something I had carried for eight years finally made sense."</p><p className="testimonial-author">Priya N.</p><p className="testimonial-location">🇬🇧 London</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I am not a spiritual person. But I was in a place I could not explain to anyone. Sudhir spoke to me like a human being first. And then very quietly, very precisely, he helped me understand myself."</p><p className="testimonial-author">Michael R.</p><p className="testimonial-location">🇺🇸 New York</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"Working with Sudhir is unlike anything I've experienced. I have done coaching, therapy, retreats — none of them touched what he reached in two conversations. He sees you. Not your story. You."</p><p className="testimonial-author">Sarah K.</p><p className="testimonial-location">🇨🇦 Toronto</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"After my divorce, I felt completely lost. Sudhir didn't try to fix me. He sat with me until I could see myself clearly again. Six months later, I am a different person. Calmer. Grounded. Free."</p><p className="testimonial-author">Emma W.</p><p className="testimonial-location">🇦🇺 Sydney</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I run a successful company. From the outside, I had everything. Inside, I was breaking. Sudhir was the first person who didn't tell me to be grateful. He understood why I felt empty."</p><p className="testimonial-author">Marcus H.</p><p className="testimonial-location">🇩🇪 Berlin</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I have followed many teachers. Most speak at you. Sudhir speaks with you. There is no theatre in his presence. Only truth."</p><p className="testimonial-author">Ravi M.</p><p className="testimonial-location">🇮🇳 Bengaluru</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"Sudhir's understanding of human nature is staggering. He'll say one sentence that reframes years of confusion. There's no fluff. Only insight."</p><p className="testimonial-author">Jennifer L.</p><p className="testimonial-location">🇺🇸 San Francisco</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I told Sudhir I didn't believe in any of this — karma, dharma, all of it. He smiled and said: 'Good. Don't believe me either. Just look honestly.' That changed everything."</p><p className="testimonial-author">James P.</p><p className="testimonial-location">🇬🇧 Manchester</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"There is something very rare about Sudhir. He listens with his whole self. By the end of our first call, I had said things out loud that I had never told anyone. And I felt safer for it."</p><p className="testimonial-author">Lieke V.</p><p className="testimonial-location">🇳🇱 Amsterdam</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"My grandmother passed and I couldn't grieve properly. Months later I found Sudhir. He didn't tell me how to feel. He gave me the space to actually feel it. I will always be grateful."</p><p className="testimonial-author">Aisha M.</p><p className="testimonial-location">🇦🇪 Dubai</p></div>
    </div>

    {/* ROW 2 — auto-scrolls left, draggable */}
    <div className="marquee-track" id="track2" data-speed="-1.0">
      <div className="testimonial-card"><p className="testimonial-text">"I came in with what I thought was a career problem. Within two conversations, I realized it was something much older. He didn't push me to see it. He just kept asking the right questions."</p><p className="testimonial-author">Daniel C.</p><p className="testimonial-location">🇸🇬 Singapore</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"A friend recommended Sudhir when I was at my lowest. I didn't expect much. By the third conversation, I was sleeping better than I had in three years. Real change. No performance."</p><p className="testimonial-author">Anjali S.</p><p className="testimonial-location">🇮🇳 Mumbai</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"He sat with me through grief that had no words. Never rushed me. Never offered hollow comfort. Just stayed present until the fog began to lift."</p><p className="testimonial-author">Claire B.</p><p className="testimonial-location">🇫🇷 Paris</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I've spent years searching for someone who could meet me where I actually am. Sudhir did that in the first twenty minutes. I kept waiting for the catch. There wasn't one."</p><p className="testimonial-author">Arjun K.</p><p className="testimonial-location">🇮🇳 Delhi</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"What Sudhir offers is not therapy. It's not coaching. It's something older and harder to name — a kind of honest witnessing that most people never find."</p><p className="testimonial-author">Nina W.</p><p className="testimonial-location">🇸🇪 Stockholm</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I came to Sudhir during the worst year of my life. He didn't minimize what I was going through. He helped me understand it. That understanding changed everything."</p><p className="testimonial-author">Omar F.</p><p className="testimonial-location">🇦🇪 Abu Dhabi</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"Every session left me with one thing I could not get elsewhere — clarity. Not about what to do. About who I am. That kind of clarity is rare."</p><p className="testimonial-author">Rachel M.</p><p className="testimonial-location">🇺🇸 Chicago</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I expected wisdom. I didn't expect warmth. Sudhir has both — and he gives them without making you feel small for needing either."</p><p className="testimonial-author">Yuki T.</p><p className="testimonial-location">🇯🇵 Tokyo</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"Three conversations with Sudhir did more for my inner life than three years of weekly therapy. I say this with gratitude to both."</p><p className="testimonial-author">David L.</p><p className="testimonial-location">🇬🇧 Edinburgh</p></div>
      <div className="testimonial-card"><p className="testimonial-text">"I was skeptical. I am not skeptical anymore. Whatever Sudhir does in conversation, it works. I am quieter inside now. That is no small thing."</p><p className="testimonial-author">Preethi R.</p><p className="testimonial-location">🇮🇳 Chennai</p></div>
    </div>
  </div>

  <p className="testimonials-note reveal">Names initialized and details shared with permission. Full stories kept in confidence.</p>
</section>

{/* 1.10 FINAL CTA */}
<section className="final-cta-section">
  <div className="final-glow" aria-hidden="true"></div>
  <div className="final-content reveal">
    <div className="final-eyebrow">If you have read this far</div>
    <h2 className="final-heading">You have been quietly carrying this for a long time.<br /><em>You don't have to anymore.</em></h2>
    <p className="final-subheading">The first conversation is free. It's just a conversation. Twenty minutes. No pressure. No payment. Let's begin.</p>
    <a href="https://calendly.com/sudhirsoni/20min" className="final-cta-btn" target="_blank" rel="noopener">
      <span>Talk to me</span>
    </a>
  </div>
</section>

{/* FOOTER */}

      <Footer quote={'"Some teachers offer answers. A few sit with you until the question itself dissolves."'} />
      <FloatingButtons />
      <MarqueeTestimonials />
    </>
  );
}
