import type { Metadata } from 'next';

import { Outfit, Alegreya } from 'next/font/google';

import SWRConfig from './SWRConfig';

import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'TicketXpress',
  description: 'Pesan tiket lebih aman, mudah, dan cepat dengan TicketXpress!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${alegreya.variable}`}>
        <SWRConfig>
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
