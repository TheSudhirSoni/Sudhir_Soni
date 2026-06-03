import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import './about.css';

export const metadata = {
  title: 'About Sudhir Soni — Philosopher, Thinker & Guide of the Inner Life',
  description: 'A philosopher who has lived in two worlds - business and the inner life. The full story of Sudhir Soni.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return (
    <>
      <Nav />
      {/* ===== page content (ported 1:1 from about.html) ===== */}
{/* 1. HERO — your reference */}
<section className="about-hero" id="about">
  <div className="hero-vignette" aria-hidden="true"></div>
  <div className="about-hero-content reveal">
    <div className="hero-eyebrow">
      <span className="hero-eyebrow-line" aria-hidden="true"></span>
      For those searching beneath the surface
    </div>
    <h1 className="about-hero-title">A life lived between the <em>outer world</em> and the inner one.</h1>
    <p className="about-hero-sub">This is not a biography. It is the quiet origin of a man who spent years building in the visible world, while searching just as deeply through the invisible one — the world of suffering, meaning, consciousness, patterns, and human truth.</p>
    <a href="#origin" className="quiet-note">Begin the story quietly →</a>
  </div>
</section>

{/* 2. ORIGIN STORY — your reference */}
<section className="section" id="origin">
  <div className="section-inner">
    <div className="origin-grid">
      <div className="sticky-copy reveal">
        <div className="section-eyebrow">The origin story</div>
        <h2 className="section-title">Wisdom built through lived reality, not performance.</h2>
        <div className="quote-block">
          "I have spent a lifetime preparing for the conversation we are about to have."<br /><br />— Sudhir Soni
        </div>
      </div>
      <div className="story-prose reveal">
        <div className="story-prose-inner">
          <p>Long before this space opened publicly, Sudhir Soni lived inside the demanding architecture of the visible world — decisions, responsibility, people, systems, and the quiet pressure of turning thought into something real.</p>
          <p>He understood the outer world closely: ambition, responsibility, leadership, modern technology, human behavior, and the silent weight that comes with carrying more than people can see.</p>
          <p>But there was always another room in his life. A quieter one.</p>
          <p>In that room, people came not for strategy, but for something much harder to name. A relationship that broke them. An emptiness behind achievement. A grief they could not explain. A repeating pattern they could see, but could not escape.</p>
          <p>Sudhir listened. Not quickly. Not mechanically. Not with ready-made answers.</p>
          <p>He listened until the person in front of him could begin hearing themselves again.</p>
          <div className="soft-divider"></div>
          <p>Alongside his outer work, he spent decades reading and reflecting across philosophy, psychology, spiritual thought, consciousness, and human behavior — not to collect knowledge, but to understand why people suffer, why life repeats its lessons, and what it means to see clearly.</p>
          <p><strong>What emerged was not a coaching method. Not therapy. Not spiritual performance.</strong></p>
          <p>It became something quieter: the ability to sit with another human being so honestly that clarity begins to appear.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 3. BRIDGE — your reference v2 */}
<section className="bridge-section">
  <div className="bridge-shell reveal">
    <div className="bridge-heading-row">
      <div>
        <div className="bridge-kicker">The bridge</div>
        <h2 className="bridge-heading">Where worldly understanding meets inner clarity.</h2>
      </div>
      <p className="bridge-intro">Sudhir's presence is not built from one narrow discipline. It comes from standing at the meeting point of ambition and silence, systems and suffering, achievement and meaning.</p>
    </div>
    <div className="bridge-map">
      <div className="bridge-world outer">
        <div className="world-label">The outer world</div>
        <p className="world-statement">The visible life people build, protect, manage, and carry.</p>
        <div className="world-breath-grid">
          <span>Success</span><span>Pressure</span><span>Ambition</span>
          <span>Leadership</span><span>Systems</span><span>Technology</span>
          <span>Identity</span>
        </div>
      </div>
      <div className="bridge-connector" aria-hidden="true">
        <div className="bridge-orb"><span>Sudhir<br />Soni</span></div>
      </div>
      <div className="bridge-world inner">
        <div className="world-label">The inner world</div>
        <p className="world-statement">The private life people rarely know how to explain.</p>
        <div className="world-breath-grid">
          <span>Meaning</span><span>Consciousness</span><span>Suffering</span>
          <span>Patterns</span><span>Relationships</span><span>Emptiness</span>
          <span>Clarity</span>
        </div>
      </div>
    </div>
    <div className="bridge-summary-card">
      <p>Most people understand <span className="cyan-word">one world</span> deeply.<br />Very few understand <span className="gold-word">both</span>.</p>
    </div>
  </div>
</section>

{/* 4. INNER / OUTER WORLD PROSE — my version text */}
<section className="worlds-prose-section">
  <div className="worlds-prose-grid">
    <div className="world-prose-col outer-col reveal">
      <div className="world-prose-label">The outer world</div>
      <h3 className="world-prose-title">A man who built real things in the real world.</h3>
      <div className="world-prose-body">
        <p>For most of his working life, the world knew Sudhir as someone who builds — businesses, brands, systems. He understood strategy at a deep level: what it takes to make something real and lasting, what holds organizations together, what causes them to fall apart.</p>
        <p>He played the game seriously. And he understood it from the inside — not as a theorist, but as someone who felt its weight every day.</p>
        <span className="emphasis-line">"But even at the height of building, there was always another room."</span>
        <p>That room existed parallel to everything else. Quieter. More honest. Where the real questions lived.</p>
      </div>
    </div>
    <div className="world-prose-col inner-col reveal">
      <div className="world-prose-label">The inner world</div>
      <h3 className="world-prose-title">A lifetime of genuine philosophical inquiry.</h3>
      <div className="world-prose-body">
        <p>Alongside the outer work, Sudhir spent decades reading with unusual depth — philosophy, psychology, spiritual thought, consciousness studies, and the literature of human suffering. Not to collect knowledge, but because he was genuinely searching.</p>
        <p>Why do intelligent people repeat the same patterns? Why does success so rarely bring the peace it promises? Why does grief sometimes refuse to move?</p>
        <span className="emphasis-line">"I found answers. Real ones. And I kept them private for too long."</span>
        <p>That private room is now open. For the first time.</p>
      </div>
    </div>
  </div>
</section>

{/* 5. FIVE CORE BELIEFS — your reference orbit visual + headings only */}
<section className="principles-section">
  <div className="principles-layout">
    <div className="principles-intro reveal">
      <div className="section-eyebrow">Five core beliefs</div>
      <h2 className="section-title">Quiet principles behind every conversation.</h2>
      <div className="quote-block">Not a framework. Not a formula. These are the living beliefs that shape how each conversation is held.</div>
    </div>
    <div className="principle-orbit reveal">
      <div className="principle-core" aria-hidden="true">Inner<br />Clarity</div>

      <div className="principle-card">
        <div className="principle-number">01</div>
        <p className="principle-text">Clarity changes life more deeply than advice.</p>
      </div>

      <div className="principle-card">
        <div className="principle-number">02</div>
        <p className="principle-text">You already know the answer. You just can't hear it yet.</p>
      </div>

      <div className="principle-card">
        <div className="principle-number">03</div>
        <p className="principle-text">Real listening has become extraordinarily rare.</p>
      </div>

      <div className="principle-card">
        <div className="principle-number">04</div>
        <p className="principle-text">Success without inner alignment creates quiet emptiness.</p>
      </div>

      <div className="principle-card">
        <div className="principle-number">05</div>
        <p className="principle-text">Wisdom is not information — it is seeing clearly.</p>
      </div>
    </div>
  </div>
</section>

{/* 6. WHY THIS MATTERS — moved here, after beliefs */}
<section className="matters-section">
  <div className="matters-inner">
    <div className="reveal">
      <div className="matters-eyebrow">Why this matters for you</div>
      <h2 className="matters-title">You have built the life.<br />Now <em>find the life.</em></h2>
      <p className="matters-body">The person reading this has almost certainly done the work the world asks of us. Career. Relationships. Responsibilities. The external architecture of a life. And somewhere along the way, quietly, the sense of actually living it began to slip.</p>
      <p className="matters-body">That gap — between what you have built and what you actually feel — is exactly where this work begins. Not to tear down what you have created. But to help you actually inhabit it.</p>
      <a href="https://calendly.com/sudhirsoni/20min" className="matters-cta" target="_blank" rel="noopener">
        <span>Begin with a free conversation</span>
      </a>
    </div>
    <div className="matters-right reveal">
      <div className="matters-stat">
        <div className="matters-stat-number">Lifelong</div>
        <p className="matters-stat-label">Decades of genuine philosophical inquiry — not borrowed wisdom, but understanding tested against real human lives, including his own.</p>
      </div>
      <div className="matters-stat">
        <div className="matters-stat-number">Private</div>
        <p className="matters-stat-label">For years, this work was available only to those who came through personal connection. It is now open — for the first time.</p>
      </div>
      <div className="matters-stat">
        <div className="matters-stat-number">Worldwide</div>
        <p className="matters-stat-label">Conversations happen over Google Meet or Zoom, in any timezone, with anyone who is genuinely ready. Geography is not a barrier.</p>
      </div>
    </div>
  </div>
</section>

{/* 7. PULL QUOTE */}
<section className="philosophy-section">
  <div className="philosophy-glow" aria-hidden="true"></div>
  <div className="philosophy-content reveal">
    <p className="philosophy-text">
      The goal is not to become someone else.<br />
      <em>The goal is to finally meet yourself honestly.</em>
    </p>
    <p className="philosophy-author">— Sudhir Soni</p>
  </div>
</section>

{/* 8. QUIET INVITATION */}
<section className="invitation-section">
  <div className="final-glow" aria-hidden="true"></div>
  <div className="invitation-content reveal">
    <div className="section-eyebrow">A quiet invitation</div>
    <h2 className="invitation-heading">
      If something in you feels called toward this conversation,<br />
      <em>you already know.</em>
    </h2>
    <p className="invitation-sub">There is no pressure. No performance. No expectation to explain yourself perfectly. Only a private conversation, held with honesty, depth, and complete human presence.</p>
    <a href="https://calendly.com/sudhirsoni/20min" className="btn-primary" target="_blank" rel="noopener">
      <span>Begin with a free conversation</span>
    </a>
  </div>
</section>

{/* FOOTER */}

      <Footer quote={'"Most people are not afraid of the dark. They are afraid of what they might finally see when the noise stops."'} />
      <FloatingButtons />
    </>
  );
}
