'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({children,className=''}:{children:React.ReactNode;className?:string}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.12}} transition={{duration:.7,ease:[.22,1,.36,1]}}>{children}</motion.div>; }
