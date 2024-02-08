import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "./globals.css";
import Footer from '../components/Footer';
import NavbarComponent from "@/components/NavbarComponent";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gymkhana Website',
  description: 'New Gymkhana Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarComponent/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
