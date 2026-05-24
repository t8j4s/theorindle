'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const blocks = [
  {
    title: "Social media that doesn't just post — it positions your brand.",
    bullets: [
      "Content strategy built around your business goals.",
      "Instagram and LinkedIn systems that build trust.",
      "Consistent posting, captions, carousels, and engagement ideas."
    ],
    cta: "Build my audience →",
    href: "/services/social-media-management",
    color: "bg-hotpink",
    icon: (
      <svg className="w-48 h-48 lg:w-64 lg:h-64 transition-transform group-hover:scale-110" viewBox="0 0 100 100">
        <rect x="25" y="10" width="50" height="80" rx="10" fill="#fff" stroke="#000" strokeWidth="3" />
        <rect x="35" y="20" width="30" height="40" rx="4" fill="#ff007f" stroke="#000" strokeWidth="3" />
        <path d="M40 75H60" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="40" r="8" fill="#ccff00" stroke="#000" strokeWidth="3" />
      </svg>
    )
  },
  {
    title: "Websites that make your business look serious.",
    bullets: [
      "Mobile-first, fast, responsive layouts.",
      "SEO-ready pages with strong copy and clear CTAs.",
      "Landing pages, business websites, and e-commerce stores."
    ],
    cta: "Build my website →",
    href: "/services/website-development",
    color: "bg-lime",
    icon: (
      <svg className="w-48 h-48 lg:w-64 lg:h-64 transition-transform group-hover:scale-110" viewBox="0 0 100 100">
        <rect x="10" y="25" width="80" height="55" rx="5" fill="#fff" stroke="#000" strokeWidth="3" />
        <path d="M10 40H90" stroke="#000" strokeWidth="3" />
        <circle cx="20" cy="32.5" r="3" fill="#ff007f" />
        <circle cx="30" cy="32.5" r="3" fill="#ccff00" />
        <rect x="20" y="50" width="30" height="20" rx="2" fill="#0055ff" stroke="#000" strokeWidth="3" />
        <path d="M60 55H80M60 65H70" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Marketing that brings measurable leads.",
    bullets: [
      "SEO structure for long-term visibility.",
      "Paid ad funnels for faster reach.",
      "Email and conversion optimization to improve sales."
    ],
    cta: "Grow my leads →",
    href: "/services/digital-marketing",
    color: "bg-electricblue",
    icon: (
      <svg className="w-48 h-48 lg:w-64 lg:h-64 transition-transform group-hover:scale-110" viewBox="0 0 100 100">
        <path d="M20 75L40 45L60 60L85 20" fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M85 20V45M85 20H60" fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="85" cy="20" r="8" fill="#ccff00" stroke="#000" strokeWidth="3" />
        <circle cx="20" cy="75" r="5" fill="#ff007f" stroke="#000" strokeWidth="3" />
      </svg>
    )
  },
  {
    title: "Content edited for retention, not just aesthetics.",
    bullets: [
      "Scroll-stopping Reels and Shorts.",
      "YouTube edits, podcast clips, and ad creatives.",
      "Hooks, subtitles, pacing, zooms, and storytelling."
    ],
    cta: "Edit my content →",
    href: "/services/video-editing",
    color: "bg-lime",
    icon: (
      <svg className="w-48 h-48 lg:w-64 lg:h-64 transition-transform group-hover:scale-110" viewBox="0 0 100 100">
        <rect x="15" y="30" width="50" height="40" rx="4" fill="#fff" stroke="#000" strokeWidth="3" />
        <polygon points="65,40 85,30 85,70 65,60" fill="#0055ff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="40" cy="50" r="10" fill="#ff007f" stroke="#000" strokeWidth="3" />
        <path d="M36 46L46 50L36 54V46Z" fill="#fff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Automate the repetitive. Focus on the important.",
    bullets: [
      "AI chatbots for customer support.",
      "WhatsApp automation for instant replies and lead capture.",
      "CRM workflows to organize prospects and follow-ups."
    ],
    cta: "Automate my business →",
    href: "/services/ai-automation",
    color: "bg-hotpink",
    icon: (
      <svg className="w-48 h-48 lg:w-64 lg:h-64 transition-transform group-hover:scale-110" viewBox="0 0 100 100">
        <rect x="25" y="30" width="50" height="45" rx="10" fill="#fff" stroke="#000" strokeWidth="3" />
        <path d="M35 15V30M65 15V30" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="35" cy="15" r="5" fill="#ff007f" stroke="#000" strokeWidth="3" />
        <circle cx="65" cy="15" r="5" fill="#ccff00" stroke="#000" strokeWidth="3" />
        <rect x="35" y="45" width="10" height="8" rx="2" fill="#000" />
        <rect x="55" y="45" width="10" height="8" rx="2" fill="#000" />
        <path d="M40 65H60" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function ServiceDeepDive() {
  return (
    <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center uppercase">
        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-none mb-4">
          One agency.
          <br/>
          <span className="text-electricblue">Every growth need.</span>
        </h2>
        <p className="font-bold text-xl">Different strategy for each business.</p>
      </div>

      <div className="flex flex-col gap-16 md:gap-32">
        {blocks.map((b, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1">
              <h3 className="font-display font-black text-4xl leading-tight uppercase mb-8">
                {b.title}
              </h3>
              <ul className="flex flex-col gap-4 mb-8">
                {b.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4 font-medium text-lg text-black/80">
                    <div className={`shrink-0 w-3 h-3 rounded-full mt-2 border-2 border-black ${b.color}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link href={b.href} className="inline-flex items-center gap-2 font-bold text-lg border-b-2 border-black pb-1 hover:text-hotpink hover:border-hotpink transition-colors">
                {b.cta}
              </Link>
            </div>
            <div className="flex flex-1 w-full md:hidden lg:flex bg-cream border-[3px] border-black rounded-3xl p-6 shadow-[8px_8px_0_0_#000] rotate-1 group hover:rotate-0 transition-transform items-center justify-center min-h-[300px]">
              {b.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
