import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PERSONAL_INFO } from '@/lib/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kevin-t-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.bio,
  keywords: [
    'Flutter Developer',
    'Mobile Application Developer',
    'Dart Developer',
    'Provider State Management',
    'REST API Integration',
    'Firebase Cloud Messaging',
    'Android Developer',
    'Cross-Platform Mobile Apps',
    'Kevin T',
    'Trichy',
    'Tamil Nadu',
    'India',
  ],
  authors: [{ name: PERSONAL_INFO.name, url: siteUrl }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
    siteName: `${PERSONAL_INFO.name} Developer Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: 'Flutter Developer & Mobile Application Developer',
    description: PERSONAL_INFO.bio,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Trichy',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    knowsAbout: [
      'Flutter',
      'Dart',
      'Mobile Application Development',
      'REST APIs',
      'Provider State Management',
      'Firebase Cloud Messaging',
      'Secure Token Storage',
      'Git',
    ],
    sameAs: [
      PERSONAL_INFO.socialLinks.github,
      PERSONAL_INFO.socialLinks.gitlab,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white font-sans antialiased selection:bg-brand-primary selection:text-white">
        <Navbar />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
