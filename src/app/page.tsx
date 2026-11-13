import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Why3CS } from '@/components/sections/Why3CS';
import { EdgeMobile } from '@/components/mobile/EdgeMobile';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactCTA } from '@/components/sections/ContactCTA';
export default function Page(){return <><Header/><main id="main"><Hero/><ClientLogos/><About/><Services/><SelectedWork/><div className="md:hidden"><EdgeMobile /></div><div className="hidden md:block"><Why3CS/></div><Testimonials/><ContactCTA/></main><Footer/></>}
