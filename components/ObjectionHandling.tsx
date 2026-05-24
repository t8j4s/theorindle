'use client';

import { motion } from 'motion/react';

const objections = [
  {
    q: "I don't know what to post.",
    a: "We create a content direction based on your service, audience, offers, and platform."
  },
  {
    q: "My website doesn't bring leads.",
    a: "We build pages with clear messaging, trust sections, SEO structure, and conversion-focused CTAs."
  },
  {
    q: "Ads are confusing.",
    a: "We simplify paid campaigns with clear goals, tracking, and optimization."
  },
  {
    q: "I don't have time to reply to everyone.",
    a: "We set up AI and WhatsApp automation to capture, qualify, and respond faster."
  }
];

export default function ObjectionHandling() {
  return (
    <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24"
      >
        <div className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">[ A REAL STORY ]</div>
        <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter">
          Most businesses have four objections.
          <br/>
          <span className="text-hotpink italic block mt-2">We solve them before they ask.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        <div className="flex-1 flex flex-col gap-10">
          {objections.map((obj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-bold text-2xl mb-2 line-through decoration-hotpink decoration-4">{obj.q}</h3>
              <p className="font-medium text-lg italic text-black/80">{obj.a}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-hotpink border-[3px] border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0_0_#000] rotate-2"
        >
          <div className="font-display font-black text-3xl md:text-5xl uppercase leading-tight italic">
            &quot;Premium growth systems for businesses that want more than just a good-looking page.&quot;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
