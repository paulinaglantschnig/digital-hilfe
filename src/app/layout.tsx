"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="de">
      <body className={`${inter.className} bg-sky-50 text-gray-800 min-h-screen flex flex-col`}>
        

        <main className="flex-grow max-w-4xl mx-auto w-full px-4">
          {children}
        </main>

        <footer className="text-center text-sm text-gray-500 mt-12 mb-6 border-t pt-4">
          &copy; 2025 Digitalhilfe – Paulina Glantschnig
        </footer>
      </body>
    </html>
  );
}
