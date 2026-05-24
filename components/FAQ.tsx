'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What businesses do you work with?",
    a: "We work with local businesses, startups, creators, coaches, service providers, and brands across India."
  },
  {
    q: "Can I choose only one service?",
    a: "Yes. You can start with one service like website development, video editing, or social media management."
  },
  {
    q: "Do you build mobile-friendly websites?",
    a: "Yes. Every website is mobile-first, responsive, fast, and SEO-ready."
  },
  {
    q: "Can you manage Instagram and LinkedIn?",
    a: "Yes. We help with content planning, captions, posting strategy, and growth direction."
  },
  {
    q: "Do you provide AI automation?",
    a: "Yes. We can build AI chatbots, WhatsApp automation, lead capture flows, and CRM workflows."
  },
  {
    q: "Do you run paid ads?",
    a: "Yes. We can help with Meta ads, Google ads, lead generation campaigns, and conversion optimization."
  },
  {
    q: "How do I contact ORINDLE?",
    a: "Click the WhatsApp button or send an email to tejas@orindle.com."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-lime py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-sm font-bold uppercase tracking-widest mb-4">[ QUESTIONS ]</div>
          <h2 className="font-display font-black text-6xl md:text-8xl leading-none uppercase tracking-tighter">
            Ask before you start.
          </h2>
        </motion.div>

        <div className="flex flex-col border-t-[3px] border-black">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-[3px] border-black">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex justify-between items-center group"
              >
                <h3 className="font-bold text-xl md:text-2xl pr-8 group-hover:text-black/70 transition-colors">{faq.q}</h3>
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-white group-hover:bg-hotpink group-hover:text-white transition-colors">
                  {open === i ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 font-medium text-lg text-black/80">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
