'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const plans = [
  {
    name: "Starter Growth",
    price: "₹14,999",
    period: "/month",
    desc: "For small businesses that need a clean online presence.",
    features: [
      "Basic social media management",
      "1 landing page or website update",
      "Basic SEO setup",
      "Monthly performance check"
    ],
    cta: "Start Starter →"
  },
  {
    name: "Business Growth",
    price: "₹29,999",
    period: "/month",
    desc: "For businesses that want consistent content and leads.",
    features: [
      "Social media management",
      "Website improvements",
      "Lead generation strategy",
      "Video editing support",
      "WhatsApp inquiry flow"
    ],
    cta: "Start Business →",
    popular: true
  },
  {
    name: "Scale Growth",
    price: "Custom",
    period: "",
    desc: "For brands that need full digital execution.",
    features: [
      "Website + SEO + ads",
      "Video content system",
      "AI chatbot",
      "CRM/WhatsApp automation",
      "Monthly growth strategy"
    ],
    cta: "Book Strategy Call →"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-hotpink py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-10 left-10 w-64 h-64 border-[3px] border-black rounded-full opacity-20 border-dashed animate-[spin_60s_linear_infinite]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 text-black"
        >
          <div className="text-sm font-bold uppercase tracking-widest mb-4">[ ONE PRICE ]</div>
          <h2 className="font-display font-black text-6xl md:text-8xl leading-none uppercase tracking-tighter">
            Simple plans.<br/>Built around growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-cream border-[4px] border-black rounded-3xl p-8 flex flex-col ${plan.popular ? 'lg:-translate-y-4 shadow-[8px_8px_0_0_#ccff00]' : 'shadow-[8px_8px_0_0_#000]'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-xl uppercase">{plan.name}</h3>
                {plan.popular && <span className="bg-lime border-2 border-black text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</span>}
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl tracking-tighter">{plan.price}</span>
                <span className="font-bold text-black/60">{plan.period}</span>
              </div>
              <p className="font-medium mb-8 text-black/80">{plan.desc}</p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm font-bold uppercase tracking-wide">
                    <span className="mt-0.5">+</span> {f}
                  </li>
                ))}
              </ul>
              
              <Link href="#contact" className={`w-full text-center py-4 rounded-full font-bold uppercase border-2 border-black transition-transform hover:-translate-y-1 ${plan.popular ? 'bg-lime hover:shadow-[4px_4px_0_0_#000]' : 'bg-black text-white hover:bg-hotpink hover:shadow-[4px_4px_0_0_#000]'}`}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center font-bold uppercase tracking-widest text-sm bg-black text-white py-2 px-6 rounded-full w-fit mx-auto">
          Pricing can be customized based on your business, goals, and workload.
        </p>
      </div>
    </section>
  );
}
