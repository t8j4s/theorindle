'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative px-4 pt-12 pb-20 md:pt-16 md:pb-32 max-w-7xl mx-auto flex flex-col items-start overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="font-display font-black text-6xl md:text-8xl leading-[1.1] tracking-tighter mb-8 uppercase">
          Your Business.
          <br />
          Built for <span className="bg-lime px-2 py-1 inline-block -rotate-2 transform">Growth.</span>
          <br />
          <span className="text-hotpink italic">Not just a website.</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-medium max-w-2xl text-black/80 mb-10 leading-relaxed">
          ORINDLE helps Indian businesses grow with premium websites, social media, digital marketing, video editing, and AI automation — all built to attract leads, build trust, and scale faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="#contact" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-black hover:-translate-y-1 hover:bg-hotpink hover:shadow-[6px_6px_0_0_#000] transition-all text-center">
            Start Your Growth →
          </Link>
          <Link href="/#services" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 border-black hover:bg-lime transition-all text-center">
            Explore Services
          </Link>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-black/60">
          Built for businesses that want to look premium, grow faster, and save time.
        </p>
      </motion.div>

      {/* Circular Badge */}
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex absolute right-4 lg:right-20 top-16 xl:top-24 z-20 pointer-events-none"
      >
        <div className="relative w-32 h-32 lg:w-44 lg:h-44 bg-lime rounded-full border-[3px] border-black shadow-[8px_8px_0_0_#000] flex items-center justify-center">
          <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
            <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="font-display font-black text-[11px] uppercase tracking-widest fill-black">
              <textPath href="#textPath" startOffset="0%" textLength="225" lengthAdjust="spacing">
                SOCIAL • WEBSITE • MARKETING • VIDEO • AI •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 m-auto flex items-center justify-center font-black text-3xl lg:text-4xl text-black border-[3px] border-black w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white z-10">
            <span className="mt-1">O</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
