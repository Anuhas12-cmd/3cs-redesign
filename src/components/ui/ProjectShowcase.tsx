'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/site';

/** A single, touchable visual study with a compact visual project index. */
export function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();
  const controls = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[active];
  const select = (next: number) => {
    const index = (next + projects.length) % projects.length;
    setDirection(next > active ? 1 : -1);
    setActive(index);
  };

  return <div className="project-showcase" role="region" aria-label="Selected client concept artwork" aria-roledescription="carousel">
    <div className="showcase-stage" tabIndex={0} aria-label="Project artwork. Use left and right arrow keys to browse."
      onKeyDown={event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          select(active + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}>
      <div className="showcase-paper paper-back" aria-hidden="true" />
      <div className="showcase-paper paper-front" aria-hidden="true" />
      <div className="showcase-art-window">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div key={project.name} className={`showcase-image ${project.tone}`} custom={direction}
            variants={{ enter: (move: number) => ({ opacity: 0, x: move * 45, scale: .97 }), leave: (move: number) => ({ opacity: 0, x: move * -45, scale: .97 }) }}
            initial={reduced ? false : 'enter'}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : 'leave'}
            transition={{ duration: reduced ? 0 : .4, ease: [.22, 1, .36, 1] }}
            drag={reduced ? false : 'x'} dragConstraints={{ left: 0, right: 0 }} dragElastic={.12}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 45 || Math.abs(info.velocity.x) > 350) select(active + (info.offset.x < 0 ? 1 : -1));
            }}>
            <Image src={project.image} alt={`Original concept artwork for ${project.name}, not a delivered website screenshot`} fill sizes="(max-width: 600px) 88vw, 60vw" draggable={false} />
          </motion.div>
        </AnimatePresence>
        <span className="showcase-concept mono">CONCEPT STUDY</span>
        <span className="showcase-image-number" aria-hidden="true">0{active + 1}</span>
      </div>
    </div>

    <div className="showcase-caption" aria-live="polite" aria-atomic="true">
      <div><span className="showcase-category mono">{project.category}</span><h3>{project.name}</h3><p>{project.label}</p></div>
      <a className="showcase-visit" href={project.href} target={project.href.startsWith('#') ? undefined : '_blank'} rel="noreferrer" aria-label={project.href.startsWith('#') ? `Discuss the ${project.name} concept` : `Visit ${project.name} website (opens in a new tab)`}><ArrowUpRight size={24} /></a>
    </div>

    <div className="showcase-index" aria-label="Choose a project">
      {projects.map((item, index) => <button key={item.name} ref={node => { controls.current[index] = node; }} type="button"
        className={index === active ? 'is-selected' : ''} aria-label={`Show ${item.name}`} aria-pressed={index === active}
        onClick={() => select(index)} onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + projects.length) % projects.length;
            select(next);
            controls.current[next]?.focus();
          }
        }}><Image src={item.image} alt="" fill sizes="(max-width: 600px) 20vw, 12vw" /><span className="mono">0{index + 1}</span></button>)}
    </div>

    <div className="showcase-bottom"><div className="showcase-count mono"><span>0{active + 1}</span><div className="showcase-progress" aria-hidden="true"><span style={{ width: `${(active + 1) / projects.length * 100}%` }} /></div><span>0{projects.length}</span></div><div className="showcase-arrows"><button type="button" aria-label="Previous project" onClick={() => select(active - 1)}><ArrowLeft size={18} /></button><button type="button" aria-label="Next project" onClick={() => select(active + 1)}><ArrowRight size={18} /></button></div></div>
  </div>;
}
