'use client';

import { motion } from 'motion/react';

export default function WhyOrindle() {
  return (
    <section className="bg-electricblue text-white py-4 border-y-[4px] border-black">
      {/* Visual Break */}
      <div className="bg-cream text-black py-24 md:py-32 px-4 rounded-b-[40px] md:rounded-b-[80px] -mt-5 pt-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-lime border-[3px] border-black rounded-[40px] aspect-square flex items-center justify-center shadow-[12px_12px_0_0_#000] relative overflow-hidden"
          >
            <div className="font-display font-black text-[200px] leading-none uppercase">O</div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-sm font-bold uppercase bg-white border-2 border-black rounded-full px-6 py-3">
              <span>Strategy First</span>
              <span>EST. 2026</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">[ WHO&apos;S BUILDING THIS ]</div>
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[1] uppercase tracking-tighter mb-8">
              ORINDLE has <span className="bg-hotpink text-white px-2 mt-2 inline-block -rotate-1">one job.</span>
              <br/>
              Make your business look better, grow faster, and work smarter.
            </h2>
            <p className="text-xl font-medium text-black/80 mb-12">
              We don&apos;t just design. We don&apos;t just post. We don&apos;t just run ads. ORINDLE connects your website, content, marketing, video, and automation into one complete growth engine.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {['Strategy first', 'Mobile-first design', 'SEO-ready builds', 'Automation focused'].map((badge) => (
                <div key={badge} className="border-2 border-black rounded-full px-4 py-2 font-bold text-center uppercase text-sm flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  + {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
