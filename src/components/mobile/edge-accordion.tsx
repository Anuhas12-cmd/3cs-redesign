'use client';

// Accordion 05 by Ali Imam (21st.dev / designali-in). Licence not stated.
// Local primitives deliberately isolate this adaptation from shared UI.
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { edgeItems } from '@/data/edge';

const DEFAULT_OPEN = '01';
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b border-[color:var(--edge-border)] scroll-mt-28', className)} {...props} />
));
AccordionItem.displayName = 'EdgeAccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref}
      className={cn('flex min-h-11 flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className)} {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'EdgeAccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'EdgeAccordionContent';

export function EdgeAccordion() {
  const items = React.useRef<Record<string, HTMLDivElement | null>>({});
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const frame = React.useRef<number | null>(null);

  const cancelScroll = React.useCallback(() => {
    if (timer.current !== null) clearTimeout(timer.current);
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    timer.current = null;
    frame.current = null;
  }, []);

  React.useEffect(() => cancelScroll, [cancelScroll]);

  const handleValueChange = (value: string) => {
    cancelScroll();
    if (!value) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => {
      timer.current = null;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        items.current[value]?.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
      });
    }, reduce ? 0 : 210);
  };

  return <div className="edge-acc w-full max-w-3xl mx-auto">
    <Accordion type="single" defaultValue={DEFAULT_OPEN} collapsible onValueChange={handleValueChange} className="w-full">
      {edgeItems.map(item => <AccordionItem value={item.id} key={item.id} ref={node => { items.current[item.id] = node; }} className="last:border-b">
        <AccordionTrigger className="edge-acc-trigger text-left pl-0 md:pl-14 overflow-hidden text-[color:color-mix(in_srgb,var(--edge-fg)_20%,transparent)] duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-[color:var(--edge-accent)] [&>svg]:hidden">
          <div className="flex flex-1 items-start gap-4">
            <span className="edge-acc-index text-xs" aria-hidden="true">{item.id}</span>
            <span className="edge-acc-title block uppercase relative text-center text-3xl md:text-5xl">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="edge-acc-copy text-[color:var(--edge-muted)] pb-6 pl-[calc(0.9rem+1rem)] md:px-20">
          {item.content}
        </AccordionContent>
      </AccordionItem>)}
    </Accordion>
  </div>;
}
