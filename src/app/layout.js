import './globals.css';
import BackgroundFX from '@/components/BackgroundFX';
import ScrollReveal from '@/components/ScrollReveal';

const SITE = 'https://sudhirsoni.com';

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Sudhir Soni — Philosopher, Thinker & Guide of the Inner Life',
    template: '%s',
  },
  description:
    'Philosophical conversations on clarity, consciousness, and meaning. For those who have mastered the outer world and now seek the inner one.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Sudhir Soni',
    url: SITE,
    images: ['/og-image.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#02060d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundFX />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
