'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

const formatter = new Intl.NumberFormat('en-US');

/** Count once on entering view; keep the final figure available to assistive technology. */
export function CountUp({ value, suffix = '', grouped = true }: { value: number; suffix?: string; grouped?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: .6 });
  const reduced = useReducedMotion();
  const format = (number: number) => `${grouped ? formatter.format(Math.round(number)) : Math.round(number)}${suffix}`;
  const final = format(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduced) { node.textContent = final; return; }
    node.textContent = format(0);
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [.22, 1, .36, 1],
      onUpdate: number => { node.textContent = format(number); },
      onComplete: () => { node.textContent = final; },
    });
    return () => controls.stop();
    // Formatting inputs are primitive props; the local formatter has no other state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, value, suffix, grouped, final]);

  return <span className="count-up" aria-label={final}><span ref={ref} aria-hidden="true">{final}</span></span>;
}
