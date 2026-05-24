'use client';

import { motion } from 'motion/react';

export default function MockupShowcase() {
  return (
    <section className="bg-cream py-24 md:py-32 px-4 border-y-[4px] border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl"
        >
          <div className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">[ SAMPLE WORK ]</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-8">
            Every business needs <span className="text-electricblue block mt-2">a different energy.</span>
          </h2>
          <p className="text-xl font-medium text-black/80">
            ORINDLE doesn&apos;t force one template on everyone. We design growth systems based on your industry, audience, and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {['Local Business Website', 'Instagram Growth System', 'AI WhatsApp Automation Flow'].map((title, i) => (
            <motion.div 
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-xl border-[3px] border-black overflow-hidden shadow-[8px_8px_0_0_#000] ${i === 1 ? '-translate-y-4 md:-translate-y-8' : ''}`}
            >
              {/* Browser Header */}
              <div className="bg-cream border-b-[3px] border-black px-4 py-3 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-hotpink border border-black" />
                <div className="w-3 h-3 rounded-full bg-lime border border-black" />
                <div className="w-3 h-3 rounded-full bg-electricblue border border-black" />
                <div className="flex-1 mx-4 bg-white/50 rounded-full h-4 border border-black/10" />
              </div>
              <div className="p-8 aspect-[4/3] flex items-center justify-center bg-black/5 relative overflow-hidden">
                <div className="font-display font-bold text-center text-xl uppercase max-w-[200px] z-10 bg-white p-4 border border-black transform -rotate-2">
                  {title}
                </div>
                {/* Abstract shape */}
                <div className={`absolute w-32 h-32 rounded-full blur-2xl opacity-50 ${i === 0 ? 'bg-hotpink' : i === 1 ? 'bg-lime' : 'bg-electricblue'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
