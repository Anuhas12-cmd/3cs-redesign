'use client';
// Adapted from Skiper UI Carousel_003 (skiper49); original retained in vendor/.
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, A11y, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe2, Sparkles, Search, ShoppingBag, ShieldCheck, Server } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { services } from '@/data/site';
import { Reveal } from '../ui/Reveal';
const icons=[Globe2,Sparkles,Search,ShoppingBag,ShieldCheck,Server];
export function Services(){const slider=useRef<SwiperType|null>(null);const [active,setActive]=useState(0);const reduced=useReducedMotion();return <section id="services" className="services"><div className="section-shell services-intro"><Reveal><div className="section-title-row"><h2>Ambition, meet<br/>possibility<span className="accent">.</span></h2><p>From the first spark to the final pixel.<br/>The expertise to move you forward.</p></div></Reveal></div><Swiper className="services-coverflow" modules={[EffectCoverflow,Pagination,A11y,Keyboard]} onSwiper={s=>{slider.current=s}} onSlideChange={s=>setActive(s.realIndex)} effect={reduced?'slide':'coverflow'} grabCursor centeredSlides slidesPerView="auto" initialSlide={0} speed={reduced?0:650} spaceBetween={28} coverflowEffect={{rotate:30,stretch:0,depth:150,modifier:1,slideShadows:false}} pagination={{clickable:true}} keyboard={{enabled:true,onlyInViewport:true}} a11y={{containerMessage:'Explore six 3CS services',slideLabelMessage:'Service {{index}} of {{slidesLength}}'}}>{services.map((service,i)=>{const Icon=icons[i];return <SwiperSlide key={service.kind}><article className={`service-card service-${service.kind}`}><div className="service-card-top mono"><span>0{i+1} / 06</span><Icon size={21}/></div><div className="service-card-photo"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 600px) 77vw, (min-width: 1600px) 420px, 350px" style={{objectPosition:service.imagePosition}}/></div><div className="service-card-content"><div className="service-tags mono">{service.tags.join(' / ')}</div><h3>{service.title}</h3><a href="#contact" className="service-discover" aria-label={`Discuss ${service.title} — go to contact`}>Let’s explore <ArrowUpRight size={19}/></a></div></article></SwiperSlide>})}</Swiper><div className="service-controls section-shell"><div aria-live="polite" aria-atomic="true"><span className="mono">0{active+1} / 06</span><p>{services[active].description}</p></div><div className="arrow-controls"><button aria-label="Previous service" onClick={()=>slider.current?.slidePrev()} disabled={active===0}><ArrowLeft/></button><button aria-label="Next service" onClick={()=>slider.current?.slideNext()} disabled={active===services.length-1}><ArrowRight/></button></div></div></section>}
