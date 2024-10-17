import './globals.css';

import type { Metadata } from 'next';
import Link from 'next/link';
import { spaceMono } from './fonts';
import { Center } from '@/components/layout/Center';

export const metadata: Metadata = {
  title: 'Minesweeper Tutorial',
  description: 'Learn how to play minesweeper',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <main className="flex flex-col items-center">
          <header className="m-8">
            <hgroup></hgroup>
          </header>

          <div className="max-w-96">{children}</div>
        </main>
        <footer className="text-gray-500 text-xs mt-32 mb-16 mx-8">
          <Center>Adapted by Egor</Center>
        </footer>
      </body>
    </html>
  );
}
