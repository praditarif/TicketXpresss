import type { Metadata } from 'next';

import { Outfit, Texturina } from 'next/font/google';

import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

const texturina = Texturina({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-texturina',
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
      <body className={`${outfit.variable} ${texturina.variable}`}>{children}</body>
    </html>
  );
}
