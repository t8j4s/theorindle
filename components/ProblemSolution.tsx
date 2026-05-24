'use client';

import { motion } from 'motion/react';

export default function ProblemSolution() {
  return (
    <section className="px-4 py-24 md:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1"
      >
        <h2 className="font-display font-black text-5xl md:text-7xl leading-[1.1] uppercase tracking-tighter">
          Templates are <span className="bg-lime px-2 pb-1 inline-block">boring.</span>
          <br />
          Random marketing is <span className="bg-hotpink text-white px-2 mt-2 inline-block transform rotate-1">overkill.</span>
          <br />
          <span className="block mt-4 text-4xl md:text-6xl text-electricblue italic">ORINDLE is the middle.</span>
        </h2>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1"
      >
        <p className="text-xl md:text-3xl font-medium leading-relaxed bg-black text-cream p-8 md:p-12 rounded-2xl border-[3px] border-black shadow-[8px_8px_0_0_#ff007f] transform -rotate-1">
          Most businesses either use cheap templates that don&apos;t convert, or hire disconnected freelancers who don&apos;t understand the full growth system. ORINDLE gives you one unified team for design, marketing, content, and automation — so your brand looks better and works smarter.
        </p>
      </motion.div>
    </section>
  );
}
