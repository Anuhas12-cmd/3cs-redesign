'use client';
import LogoLoop from '../ui/LogoLoop';
import { clients } from '@/data/site';
import { useReducedMotion } from 'framer-motion';
export function ClientLogos(){const reduced=useReducedMotion();return <section className="client-strip" aria-label="Featured 3CS clients"><LogoLoop logos={clients.map(name=>({node:<span className="client-name">{name}</span>,title:name}))} speed={reduced?0:30} logoHeight={30} gap={72} fadeOut fadeOutColor="#f5f5ed" pauseOnHover ariaLabel="Featured clients of 3CS"/></section>}
