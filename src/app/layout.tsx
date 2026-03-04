"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="de">
      <body className={`${inter.className} bg-sky-50 text-gray-800 min-h-screen flex flex-col`}>
        

        <main className="flex-grow w-full px-4">
          {children}
        </main>

       
      </body>
    </html>
  );
}
