"use client";

// Skiper30 / Oliver Parallax by Gurvinder Singh (Skiper UI).
// Original four-column geometry and scroll distances from the reference video.
// Demo screens and the leaking per-component Lenis loop have been removed.
import { motion, type MotionValue, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { projects } from '@/data/site';

export function Skiper30() {
  const gallery = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: gallery, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '200vh']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0vh', '330vh']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0vh', '125vh']);
  const y4 = useTransform(scrollYProgress, [0, 1], ['0vh', '300vh']);

  return <div ref={gallery} className="oliver-gallery" aria-label="Independent concept designs" data-static={reduced || undefined}>
    <Column indices={[0, 1, 0]} y={y} reduced={!!reduced} />
    <Column indices={[2, 3, 2]} y={y2} reduced={!!reduced} />
    <Column indices={[4, 5, 4]} y={y3} reduced={!!reduced} />
    <Column indices={[6, 7, 6]} y={y4} reduced={!!reduced} />
  </div>;
}

function Column({ indices, y, reduced }: { indices: number[]; y: MotionValue<string>; reduced: boolean }) {
  return <motion.div className="oliver-column" style={{ y: reduced ? 0 : y }}>
    {indices.map((index, i) => {
      const project = projects[index];
      // Repeats stay in their own column, separated by more than one viewport.
      return <a key={`${index}-${i}`} className="oliver-tile" href={project.href} target={project.href.startsWith('#') ? undefined : '_blank'} rel="noreferrer" tabIndex={i===2?-1:undefined} aria-hidden={i===2||undefined} aria-label={project.href.startsWith('#') ? `Discuss the ${project.name} concept` : `Visit ${project.name} website (opens in a new tab)`}>
        <Image src={project.image} alt={`Independent concept artwork for ${project.name}`} fill sizes="24vw" />
        <div className="oliver-caption"><span>{project.name}</span><span className="mono">CONCEPT ARTWORK</span></div>
      </a>;
    })}
  </motion.div>;
}

/**
 * Adapted from https://skiper-ui.com/v1/skiper30 by @gurvinder-singh02.
 * Free to use and modify; Author attribution retained here and in the vendor documentation.
 * Inspired by Olivier Larose / mill3.studio. Not associated with those studios.
 */
