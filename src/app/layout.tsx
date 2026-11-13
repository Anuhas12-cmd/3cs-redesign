import type { Metadata } from 'next';
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Geist({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
export const metadata: Metadata = { title: '3CS — Creativity, engineered.', description: 'Web design, AI solutions and digital marketing. An independent homepage redesign for Sri Lankan digital agency 3CS.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>; }
