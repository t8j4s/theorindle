'use client';

import { motion } from 'motion/react';

const services = [
  {
    num: "01",
    title: "Grow your audience.",
    desc: "Instagram growth, LinkedIn management, content planning, post scheduling, captions, engagement strategy, and brand consistency to build an audience that trusts you.",
    color: "bg-lime",
    icon: (
      <svg className="w-16 h-16 mb-6 group-hover:rotate-12 transition-transform" viewBox="0 0 100 100">
        <rect x="25" y="10" width="50" height="80" rx="10" fill="#fff" stroke="#000" strokeWidth="4" />
        <rect x="35" y="20" width="30" height="40" rx="4" fill="#ff007f" stroke="#000" strokeWidth="4" />
        <path d="M40 75H60" stroke="#000" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="40" r="8" fill="#ccff00" stroke="#000" strokeWidth="4" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Look premium online.",
    desc: "Fast, responsive, SEO-ready business websites, landing pages, portfolios, and e-commerce stores built to convert visitors into leads.",
    color: "bg-hotpink",
    icon: (
      <svg className="w-16 h-16 mb-6 group-hover:-rotate-12 transition-transform" viewBox="0 0 100 100">
        <rect x="10" y="25" width="80" height="55" rx="5" fill="#fff" stroke="#000" strokeWidth="4" />
        <path d="M10 40H90" stroke="#000" strokeWidth="4" />
        <circle cx="20" cy="32.5" r="3" fill="#ff007f" />
        <circle cx="30" cy="32.5" r="3" fill="#ccff00" />
        <rect x="20" y="50" width="30" height="20" rx="2" fill="#0055ff" stroke="#000" strokeWidth="3" />
        <path d="M60 55H80M60 65H70" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Get more qualified leads.",
    desc: "SEO, paid ads, lead generation, email marketing, conversion tracking, and campaign optimization to turn attention into revenue.",
    color: "bg-electricblue",
    icon: (
      <svg className="w-16 h-16 mb-6 group-hover:-translate-y-2 transition-transform" viewBox="0 0 100 100">
        <path d="M20 75L40 45L60 60L85 20" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M85 20V45M85 20H60" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="85" cy="20" r="10" fill="#ccff00" stroke="#000" strokeWidth="4" />
        <circle cx="20" cy="75" r="6" fill="#ff007f" stroke="#000" strokeWidth="4" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Hold attention longer.",
    desc: "High-retention Reels, YouTube edits, podcast clips, ad creatives, subtitles, hooks, pacing, and visual storytelling for social platforms.",
    color: "bg-lime",
    icon: (
      <svg className="w-16 h-16 mb-6 group-hover:rotate-12 transition-transform" viewBox="0 0 100 100">
        <rect x="15" y="30" width="50" height="40" rx="4" fill="#fff" stroke="#000" strokeWidth="4" />
        <polygon points="65,40 85,30 85,70 65,60" fill="#0055ff" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="40" cy="50" r="10" fill="#ff007f" stroke="#000" strokeWidth="4" />
        <path d="M36 46L46 50L36 54V46Z" fill="#fff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    num: "05",
    title: "Save hours every week.",
    desc: "AI chatbots, WhatsApp automation, lead capture flows, CRM workflows, and smart support systems that reduce manual work.",
    color: "bg-hotpink",
    icon: (
      <svg className="w-16 h-16 mb-6 group-hover:-rotate-12 transition-transform" viewBox="0 0 100 100">
        <rect x="25" y="30" width="50" height="45" rx="10" fill="#fff" stroke="#000" strokeWidth="4" />
        <path d="M35 15V30M65 15V30" stroke="#000" strokeWidth="4" strokeLinecap="round" />
        <circle cx="35" cy="15" r="6" fill="#ff007f" stroke="#000" strokeWidth="4" />
        <circle cx="65" cy="15" r="6" fill="#ccff00" stroke="#000" strokeWidth="4" />
        <rect x="35" y="45" width="10" height="8" rx="2" fill="#000" />
        <rect x="55" y="45" width="10" height="8" rx="2" fill="#000" />
        <path d="M40 65H60" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-black py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#ccff00]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-cream"
        >
          <div className="text-sm font-bold uppercase tracking-widest text-lime mb-4">[ HOW IT WORKS ]</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter">
            Five services. <span className="text-lime">One growth system.</span> Zero confusion.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-3xl p-8 border-[3px] border-black hover:-translate-y-2 transition-transform relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 font-display font-black text-4xl text-black/10 transition-colors group-hover:text-black/20">{s.num}</div>
              {s.icon}
              <h3 className="font-display font-bold text-2xl mb-4 leading-tight">{s.title}</h3>
              <p className="font-medium text-black/80 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
