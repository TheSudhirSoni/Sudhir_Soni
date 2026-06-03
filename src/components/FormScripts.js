'use client';
import { useEffect } from 'react';
import Script from 'next/script';

const FORMSPREE = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xgodqdko'}`;
const EMAILJS_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'SSqz1qp9DlLxFv0aW';
const SVC = process.env.NEXT_PUBLIC_EMAILJS_SERVICE || 'service_gjn53g9';
const TPL = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || 'template_e4eixq8';

function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

/**
 * Attaches the Formspree submit flow to every `form.fs-form` on the page,
 * shows the adjacent `.form-success` / `.form-error`, and fires the EmailJS
 * thank-you. Bug fix vs original: validates email format + required fields
 * before submitting (the old contact/newsletter forms accepted blanks).
 */
export default function FormScripts() {
  useEffect(() => {
    const forms = Array.from(document.querySelectorAll('form.fs-form'));
    const handlers = [];

    forms.forEach((form) => {
      // ensure email fields are required (validation bug fix)
      form.querySelectorAll('input[type="email"]').forEach((i) => { i.required = true; });

      const container = form.parentElement || form;
      const suc = container.querySelector('.form-success');
      const err = container.querySelector('.form-error');
      const btn = form.querySelector('.form-submit');

      const showError = (msg) => {
        if (err) {
          const t = err.querySelector('.form-error-text');
          if (t) t.textContent = msg;
          err.style.display = 'block';
        }
      };
      const resetBtn = () => { if (btn) { btn.disabled = false; btn.style.opacity = ''; btn.style.cursor = ''; } };

      const onSubmit = (e) => {
        e.preventDefault();
        if (err) err.style.display = 'none';

        const fd = new FormData(form);
        const name = fd.get('name') || fd.get('from_name') || 'Friend';
        const email = (fd.get('email') || fd.get('_replyto') || '').toString().trim();

        // validation
        const missing = Array.from(form.querySelectorAll('[required]')).some((el) => !String(el.value || '').trim());
        if (missing) { showError('Please fill in the required fields.'); return; }
        if (!isEmail(email)) { showError('Please enter a valid email address.'); return; }

        if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; btn.style.cursor = 'wait'; }

        fetch(form.action || FORMSPREE, {
          method: 'POST', body: fd, headers: { Accept: 'application/json' },
        })
          .then((r) => {
            if (r.ok) {
              form.style.display = 'none';
              if (suc) suc.style.display = 'block';
              if (typeof window !== 'undefined' && window.emailjs) {
                window.emailjs.send(SVC, TPL, {
                  from_name: name, from_email: email, to_name: name, to_email: email,
                  reply_to: 'hello@sudhirsoni.com',
                }).catch((err2) => console.warn('EmailJS:', err2));
              }
            } else {
              resetBtn();
              showError('Something went wrong. Please email hello@sudhirsoni.com directly.');
            }
          })
          .catch(() => {
            resetBtn();
            showError('Network error. Please email hello@sudhirsoni.com or WhatsApp +91 93513 09293.');
          });
      };

      form.addEventListener('submit', onSubmit);
      handlers.push(() => form.removeEventListener('submit', onSubmit));
    });

    return () => handlers.forEach((fn) => fn());
  }, []);

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.emailjs) window.emailjs.init({ publicKey: EMAILJS_KEY });
      }}
    />
  );
}
