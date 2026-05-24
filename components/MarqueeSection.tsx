'use client';

import { motion } from 'motion/react';

export default function MarqueeSection() {
  const text = "WEBSITES + SOCIAL MEDIA + SEO + ADS + VIDEO EDITING + AI AUTOMATION + LEAD GENERATION + WHATSAPP AUTOMATION + ";
  
  return (
    <div className="bg-lime border-y-[4px] border-black py-4 overflow-hidden -rotate-1 transform scale-105 my-12 hidden sm:block">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="font-display font-black text-2xl uppercase tracking-widest flex"
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </div>
    </div>
  );
}
