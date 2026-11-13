import { ArrowUpRight } from 'lucide-react';
import { EdgeAccordion } from './edge-accordion';

export function EdgeMobile() {
  return <section id="edge-mobile" className="edge-mobile-section why section-shell">
    <div className="edge-mobile-heading">
      <h2>Looks matter.<br/>What’s inside<br/>matters more<span className="accent">.</span></h2>
      <p>Considered design. Serious engineering.<br/>No detail left to chance.</p>
      <a href="https://www.3cs.lk/our-edge" className="text-link" target="_blank" rel="noreferrer">Discover our edge <ArrowUpRight size={18}/></a>
    </div>
    <EdgeAccordion />
  </section>;
}
