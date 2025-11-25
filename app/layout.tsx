import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: {
    default: 'TownSquare - Nigerian Services in Berlin',
    template: '%s | TownSquare',
  },
  description: 'Discover and connect with Nigerian vendors and services in Berlin. Find hair stylists, caterers, photographers, and more from the Nigerian community.',
  keywords: ['Nigerian services Berlin', 'Nigerian vendors', 'Berlin Nigerian community', 'African services Germany', 'Nigerian business directory'],
  authors: [{ name: 'TownSquare' }],
  creator: 'TownSquare',
  publisher: 'TownSquare',
  metadataBase: new URL('https://mytownsquare.co'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mytownsquare.co',
    title: 'TownSquare - Nigerian Services in Berlin',
    description: 'Discover and connect with Nigerian vendors and services in Berlin',
    siteName: 'TownSquare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TownSquare - Nigerian Services in Berlin',
    description: 'Discover and connect with Nigerian vendors and services in Berlin',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${plusJakarta.variable} font-sans bg-surface-background`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
