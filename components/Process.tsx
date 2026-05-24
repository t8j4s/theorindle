'use client';

import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Tell us your goal",
    desc: "You share your business, target audience, current problems, and what you want to improve.",
    color: "bg-lime"
  },
  {
    num: "02",
    title: "We build the system",
    desc: "We design your website, content, marketing flow, videos, or automation based on your needs.",
    color: "bg-hotpink"
  },
  {
    num: "03",
    title: "You start growing",
    desc: "Your digital presence becomes clearer, sharper, and easier to scale.",
    color: "bg-electricblue"
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-black py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#ff007f]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-cream"
        >
          <div className="text-sm font-bold uppercase tracking-widest text-[#ff007f] mb-4">[ HOW IT WORKS ]</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter">
            Three steps. <span className="text-[#ff007f]">One growth system.</span> Zero calls.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-3xl p-8 border-[3px] border-black hover:-translate-y-2 transition-transform shadow-[8px_8px_0_0_#fcfbf8]"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="font-display font-black text-5xl">{step.num}</div>
                <div className={`w-6 h-6 rounded-full border-[3px] border-black ${step.color}`} />
              </div>
              <h3 className="font-bold text-2xl mb-4">{step.title}</h3>
              <p className="font-medium text-black/80">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
