# Sudhir Soni — Website (Next.js + Sanity)

Your site, rebuilt as a fast, statically-generated Next.js app. The look, feel,
and behaviour are unchanged — what's new is that the **Wisdom** blog now reads
from a real content system (Sanity), so you can publish essays without touching
code, and each essay gets its own real page (the old cards linked nowhere).

---

## What you need
- **Node.js 18.17+** (or 20+). Download from https://nodejs.org
- A free **Sanity** account (for the blog) — https://www.sanity.io

## Run it on your computer
```bash
npm install
cp .env.local.example .env.local   # then fill in the values (see below)
npm run dev
```
Open http://localhost:3000

> The site runs fine **before** Sanity is connected — the Wisdom page shows the
> original essays as placeholders until you add real ones.

---

## Connect the blog (Sanity) — one-time setup
1. Go to https://www.sanity.io/manage and create a new project (free).
2. Copy the **Project ID**.
3. Open `.env.local` and set:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. In your Sanity project settings → **API → CORS origins**, add
   `http://localhost:3000` and your live domain `https://sudhirsoni.com`.
5. Restart `npm run dev`.

### Writing essays
Go to **http://localhost:3000/studio** (or `https://sudhirsoni.com/studio` once
live). Log in with the same Sanity account. Click **Essay → Create**, fill in:
- **Title**, **Slug** (auto-fills), **Category**, **Excerpt**, **Read time**
- **Featured essay?** — turn on for the one shown in the big featured block
- **Cover image** (optional), **Body** (the full essay)

Publish, and it appears on `/wisdom` automatically, with its own page at
`/wisdom/your-slug`.

---

## Forms
The contact, speaking, and newsletter forms already post to your existing
**Formspree** inbox and send the **EmailJS** thank-you — same as before. The keys
live in `.env.local` (pre-filled with your current values). Email validation was
added so blank/invalid submissions are caught before sending.

## Google Maps (speaking page location field)
The city autocomplete is optional. To enable it, put a Maps JS API key in
`NEXT_PUBLIC_GOOGLE_MAPS_KEY`. **Important:** in Google Cloud Console, restrict
that key to your domain (HTTP referrer) so it can't be abused — the old site had
the key exposed and unrestricted.

---

## Put it online (Vercel)
1. Push this folder to a GitHub repo (e.g. `TheSudhirSoni/Sudhir-Soni`).
2. On https://vercel.com → **New Project** → import the repo.
3. Add the same environment variables from `.env.local` in
   **Project → Settings → Environment Variables**.
4. Deploy. Vercel auto-builds on every push.

---

## What changed vs the old site (bug fixes)
- **Particle background**: fixed a divide-by-zero that caused a flicker/NaN when
  the cursor sat exactly on a particle.
- **Blog**: essays are now real pages from Sanity (old cards linked to `#`).
- **"Talk to Me" button**: now points to one place everywhere (was inconsistent —
  some pages went to Calendly, others to the booking page). Set in
  `src/components/Nav.js` (`CTA_HREF`) — one line to change.
- **Forms**: added email-format + required-field validation.
- **Shared code**: the nav, footer, background, preloader, and floating buttons
  are now single components — edit once, every page updates. Design tokens
  (colours, fonts) live once in `src/app/globals.css`.

### Known follow-up (optional, not a bug)
Each page still carries its own copy of the shared *component* CSS (nav/footer
styling). Visuals are identical; it's just slightly more CSS than necessary. A
future pass can lift those rules into one shared stylesheet. Say the word and I'll
do it.

---

## Project map
```
src/app/            pages (one folder per route) + per-page CSS
  page.js           Home
  about/ sessions/ speaking/ book/ contact/ privacy/ confidentiality/
  wisdom/           blog index (Sanity) + [slug] for each essay
  studio/           the Sanity writing dashboard (/studio)
  globals.css       design tokens, reset, background
src/components/     Nav, Footer, BackgroundFX, Preloader, FloatingButtons,
                    ScrollReveal, MarqueeTestimonials, FormScripts, PlacesAutocomplete
src/lib/sanity.js   Sanity client + queries
sanity/             blog schema (what fields an Essay has)
public/             favicons, og-image, robots.txt, sitemap.xml
```
