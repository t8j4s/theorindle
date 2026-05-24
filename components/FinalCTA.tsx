'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from './Footer';
import ContactForm from './ContactForm';

export default function FinalCTA({ serviceName = "General Inquiry" }: { serviceName?: string }) {
  return (
    <section id="contact" className="bg-black text-cream relative pt-24 md:pt-32 overflow-hidden flex flex-col justify-between">
      {/* Abstract background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[200px] md:text-[400px] leading-none uppercase text-transparent whitespace-nowrap opacity-[0.03] pointer-events-none" style={{ WebkitTextStroke: '2px #fcfbf8' }}>
        GROW
      </div>
      
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 items-start pb-24 md:pb-32">
        <div className="flex-1 lg:sticky lg:top-32 w-full lg:w-auto">
          <div className="text-sm font-bold uppercase tracking-widest text-lime mb-4">[ READY WHEN YOU ARE ]</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-8 max-w-lg">
            Tell us about your business.
            <br/>
            <span className="text-lime italic">We&apos;ll make growth happen.</span>
          </h2>
          
          <p className="text-xl font-medium max-w-lg text-cream/80 mb-12">
            Whether you need a website, social media system, marketing funnel, video editing, or AI automation — ORINDLE can build it with clarity.
          </p>

          <Link href="https://wa.me/919021923579" target="_blank" className="inline-block bg-lime text-black px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black hover:bg-hotpink hover:text-white transition-all shadow-[8px_8px_0_0_#fcfbf8] hover:-translate-y-1 relative z-20">
            Whatsapp Us →
          </Link>
        </div>

        <div className="flex-1 w-full relative z-20">
          <ContactForm serviceName={serviceName} />
        </div>
      </div>

      <Footer />
    </section>
  );
}
