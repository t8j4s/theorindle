'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const services = [
  { name: 'Social Media Management', href: '/services/social-media-management', color: 'bg-hotpink' },
  { name: 'Website Development', href: '/services/website-development', color: 'bg-lime' },
  { name: 'Digital Marketing', href: '/services/digital-marketing', color: 'bg-electricblue' },
  { name: 'Video Editing', href: '/services/video-editing', color: 'bg-hotpink' },
  { name: 'AI Automation', href: '/services/ai-automation', color: 'bg-lime' },
];

export default function OtherServices({ currentService, theme = "dark" }: { currentService: string, theme?: "dark" | "light" }) {
  const filteredServices = services.filter((s) => s.name !== currentService).slice(0, 4);

  return (
    <section className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-24 md:py-32 px-4 border-t-[4px] border-black`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter">
            Need something <span className="text-electricblue italic">else?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, i) => (
            <Link key={service.name} href={service.href}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream text-black rounded-3xl p-6 md:p-8 border-[3px] border-black hover:-translate-y-2 transition-transform shadow-[8px_8px_0_0_#000] h-full flex flex-col justify-between group overflow-hidden relative"
              >
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 blur-3xl opacity-30 ${service.color}`} />
                <div className="mb-8">
                  <div className={`w-4 h-4 rounded-full border-2 border-black ${service.color} mb-6 transition-transform group-hover:scale-150 group-hover:rotate-45`} />
                  <h3 className="font-display font-bold text-2xl uppercase leading-tight relative z-10">{service.name}</h3>
                </div>
                <div className="font-bold text-sm uppercase flex items-center gap-2 group-hover:text-hotpink transition-colors relative z-10">
                  Explore <span className="text-xl leading-none">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
