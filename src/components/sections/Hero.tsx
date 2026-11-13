'use client';
import dynamic from 'next/dynamic';
import { Component, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ProjectButton } from '../ui/ProjectButton';
const HeroScene=dynamic(()=>import('../three/HeroScene'),{ssr:false});
// Keep lazy-chunk failures from removing the server-rendered orbit.
class OrbitBoundary extends Component<{children:ReactNode},{failed:boolean}> {
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true}}
 render(){return this.state.failed?null:this.props.children}
}
export function Hero(){const reduced=useReducedMotion();return <section id="home" className="hero"><div className="hero-composition"><div className="hero-copy"><motion.h1 initial={reduced?false:{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}}>Creativity,<br/><span className="engineered">engineered<span className="headline-dot">.</span></span></motion.h1><p>We bring bold ideas to life through<br className="desktop-break"/> web design, AI and digital experiences.</p><div className="hero-actions"><ProjectButton/><a className="text-link" href="#work">Explore our work <ArrowUpRight size={17}/></a></div></div><div className="artwork"><span className="art-cross cross-top">+</span><div className="sculpture sculpture-base" aria-hidden="true"><div className="sculpture-fallback"><i/><i/><i/></div></div><OrbitBoundary><HeroScene/></OrbitBoundary><span className="art-cross cross-bottom">+</span><span className="art-vertical mono">CREATIVITY × TECHNOLOGY × POSSIBILITY</span></div></div><div className="hero-bottom"><span className="hero-position">Digital craft. Global perspective.<br/><strong>Made in Sri Lanka.</strong></span><span className="mono hero-index">01 — 09</span></div></section>}
