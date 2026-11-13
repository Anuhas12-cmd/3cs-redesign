'use client';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import SpecularButton from '../SpecularButton';
export function ProjectButton({contact=false,nav=false,onActivate}:{contact?:boolean;nav?:boolean;onActivate?:()=>void}) {
 const reduced=useReducedMotion();
 const dark=contact||nav;
 return <SpecularButton type="button" className={`project-button ${dark?'project-button-contact':'project-button-hero'} ${nav?'header-cta project-button-nav':''}`} radius={40} tint={dark?'#1d201b':'#e6fa59'} tintOpacity={1} textColor={dark?'#f5f5ed':'#171916'} lineColor={dark?'#dff45a':'#ffffff'} baseColor={dark?'#68734d':'#a4b935'} autoAnimate={!reduced} followMouse={!reduced} onClick={onActivate ?? (contact?undefined:()=>document.getElementById('contact')?.scrollIntoView({behavior:reduced?'instant':'smooth'}))}>
  {nav?'Let’s talk':'Start a project'} <ArrowUpRight size={19}/>
 </SpecularButton>
}
