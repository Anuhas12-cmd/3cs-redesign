'use client';
// Uses the installed Skiper30 composition, with unique accessible project links.
import Image from 'next/image';
import { Skiper30 } from '../ui/skiper-ui/skiper30';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/site';
import { Reveal } from '../ui/Reveal';
import { ProjectShowcase } from '../ui/ProjectShowcase';
function Project({index}:{index:number}){const project=projects[index];return <a className={`project ${project.tone}`} href={project.href} target={project.href.startsWith('#') ? undefined : '_blank'} rel="noreferrer"><div className="project-art"><span className="project-number mono" aria-hidden="true">0{index+1}</span><Image src={project.image} alt={`Original concept artwork for ${project.name}; not a screenshot of the delivered website`} width={720} height={720} sizes="(max-width: 680px) 90vw, 45vw"/><span className="project-open"><ArrowUpRight size={24}/></span><span className="concept-label mono">ORIGINAL CONCEPT ARTWORK</span></div><div className="project-info"><h3>{project.name}</h3><span className="mono">{project.category} ↗</span></div></a>}
export function SelectedWork(){return <section id="work" className="work section-shell"><Reveal><div className="section-title-row"><h2>Different worlds.<br/>Same obsession<span className="accent">.</span></h2><a className="text-link" href="https://www.3cs.lk/web-design-portfolio" target="_blank" rel="noreferrer">View official portfolio <ArrowUpRight size={18}/></a></div><p className="work-note">Independent concept designs, not delivered client work. Includes reimagined client brands and fictional brand studies.</p></Reveal><Skiper30/><div className="work-mobile-showcase"><ProjectShowcase/></div><div className="work-project-links" aria-label="Selected client websites">{projects.map((project,index)=><Project key={project.name} index={index}/>)}</div></section>}
