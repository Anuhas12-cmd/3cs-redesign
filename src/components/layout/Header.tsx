'use client';
// Adapted from Vengeance UI Spotlight Navbar; original source in vendor/.
import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, X } from 'lucide-react';
import { navigation } from '@/data/site';
import { ProjectButton } from '../ui/ProjectButton';
export function Header() {
 const [hidden,setHidden]=useState(false);
 const [active,setActive]=useState('#home'); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const [dark,setDark]=useState(false); const nav=useRef<HTMLElement>(null); const reduced=useReducedMotion();
 useEffect(() => {
  let frame = 0;
  let previousY = Math.max(0, window.scrollY);
  let direction = 0;
  let travel = 0;
  const update = () => {
    frame = 0;
    const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
    const delta = y - previousY;
    if (delta !== 0) {
      const nextDirection = Math.sign(delta);
      travel = nextDirection === direction ? travel + Math.abs(delta) : Math.abs(delta);
      direction = nextDirection;
      if (y <= 100) setHidden(false);
      else if (travel >= 12) setHidden(direction > 0);
    }
    if (y <= 100) setHidden(false);
    previousY = y;
    setScrolled(window.scrollY > 24);
    const headerLine = window.innerWidth <= 800 ? 47 : window.scrollY > 24 ? 50 : 60;
    setDark(['.services', '.footer', ...(window.innerWidth < 768 ? ['.edge-mobile-section'] : [])].some(selector => {
      const rect = document.querySelector(selector)?.getBoundingClientRect();
      return rect ? rect.top <= headerLine && rect.bottom > headerLine : false;
    }));
    // Select one section at a stable reading line. Intersection callbacks can
    // arrive in a different order when adjacent sections are both visible.
    const marker = Math.max(120, window.innerHeight * 0.25);
    let current = navigation[0].href;
    for (const item of navigation) {
      const section = document.getElementById(item.href.slice(1));
      if (section && section.getBoundingClientRect().top <= marker) current = item.href;
    }
    setActive(current);
  };
  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  return () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}, []);
 useEffect(()=>{const node=nav.current;const item=node?.querySelector<HTMLElement>(`a[href="${active}"]`);if(!node||!item)return;const x=item.offsetLeft+item.offsetWidth/2;const controller=animate(parseFloat(node.style.getPropertyValue('--ambience-x'))||0,x,{type:reduced?'tween':'spring',stiffness:200,damping:20,duration:reduced?0:undefined,onUpdate:v=>node.style.setProperty('--ambience-x',`${v}px`)});return()=>controller.stop()},[active,reduced]);
 return <header data-hidden={hidden && !open} data-tone={dark?'dark':'light'} className={`header ${scrolled?'is-scrolled':''}`}><a className="brand" href="#home" aria-label="3CS home">3cs</a><nav ref={nav} aria-label="Main navigation" className="spotlight-nav" onPointerMove={e=>e.currentTarget.style.setProperty('--spotlight-x',`${e.clientX-e.currentTarget.getBoundingClientRect().left}px`)}>{navigation.map(n=><a key={n.href} href={n.href} aria-current={active===n.href?'location':undefined} onClick={()=>setActive(n.href)}>{n.label}</a>)}<span className="nav-spotlight"/><span className="nav-ambience"/></nav><ProjectButton nav/><Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger className="menu-button" aria-label={open?'Close navigation':'Open navigation'}><span className="menu-icon" aria-hidden="true"><span/><span/><span/></span></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="menu-overlay"/><Dialog.Content className="mobile-menu"><Dialog.Title className="sr-only">3CS navigation</Dialog.Title><Dialog.Description className="sr-only">Navigate to a section of this page.</Dialog.Description><Dialog.Close className="menu-close" aria-label="Close navigation"><X/></Dialog.Close><nav aria-label="Mobile navigation">{navigation.map((n,i)=><a key={n.href} href={n.href} style={{animationDelay:`${80+i*45}ms`}} onClick={()=>{setActive(n.href);setOpen(false)}}><span className="mono">0{i+1}</span>{n.label}<ArrowUpRight/></a>)}</nav><div className="mobile-menu-footer"><ProjectButton nav onActivate={()=>{setActive('#contact');setOpen(false);requestAnimationFrame(()=>requestAnimationFrame(()=>document.getElementById('contact')?.scrollIntoView({behavior:reduced?'instant':'smooth'})))}}/><a href="mailto:info@3cs.lk">info@3cs.lk</a></div></Dialog.Content></Dialog.Portal></Dialog.Root></header>
}
