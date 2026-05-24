'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';
import OtherServices from '@/components/OtherServices';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const problems = [
  "Weak hook",
  "Slow pacing",
  "No subtitles",
  "No visual rhythm",
  "Boring ad creatives"
];

const solutions = [
  "Strong opening hooks",
  "Clean captions/subtitles",
  "B-roll and stock visuals",
  "Zooms and cuts",
  "Sound effects",
  "Music pacing",
  "YouTube storytelling",
  "Podcast repurposing",
  "Ad creative formatting"
];

const types = [
  "Instagram Reels",
  "YouTube Shorts",
  "YouTube long-form videos",
  "Podcast clips",
  "Talking-head videos",
  "Ad creatives",
  "Product videos",
  "Educational content",
  "Founder videos"
];

const faqs = [
  { q: "Do you edit Reels?", a: "Yes, we specialize in high-retention, fast-paced Reels designed for Instagram and TikTok." },
  { q: "Do you add subtitles?", a: "Yes, we include dynamic, easy-to-read subtitles inspired by top creators to keep mobile viewers engaged." },
  { q: "Can you edit YouTube videos?", a: "Absolutely. We edit long-form YouTube videos, ensuring the storytelling and pacing hold attention through the entire video." },
  { q: "Can you make podcast clips?", a: "Yes, we can take your long-form podcasts and extract the most engaging 30-60 second clips for social media." },
  { q: "Do you edit ad creatives?", a: "Yes, we edit direct-response video ads for Meta and Google with strong hooks and clear calls to action." },
  { q: "How do I send footage?", a: "We provide a secure Google Drive or Dropbox link where you can dump raw footage directly from your phone or camera." }
];

export default function VideoEditing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-hotpink selection:text-white pb-0">
      <Header />
      
      {/* Hero */}
      <section className="relative px-4 pt-12 pb-20 md:pt-16 md:pb-32 max-w-7xl mx-auto flex flex-col items-start overflow-hidden xl:flex-row xl:items-center gap-12 border-b-[4px] border-black">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl z-10">
          <div className="text-sm font-bold uppercase tracking-widest text-[#ff007f] mb-6 border-2 border-hotpink px-4 py-2 w-fit rounded-full bg-white">
            VIDEO EDITING
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[1] tracking-tighter mb-8 uppercase relative z-10">
            People don&apos;t watch boring edits.<br />
            <span className="text-lime bg-black px-2 pb-1 inline-block transform rotate-1 mt-2">They watch momentum.</span>
          </h1>
          <div className="bg-lime text-black px-4 py-2 font-bold uppercase text-xl md:text-2xl w-fit mb-8 shadow-[4px_4px_0_0_#ff007f] border-[3px] border-black rotate-2 inline-block">
            Hooks. Pacing. Retention.
          </div>
          <p className="text-lg md:text-2xl font-medium text-black/80 mb-10 leading-relaxed max-w-2xl mt-4">
            ORINDLE edits Reels, YouTube videos, podcast clips, and ad creatives with strong hooks, subtitles, pacing, zooms, sound design, and visual flow that keeps attention longer.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto bg-hotpink text-white px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] transition-all text-center">
              Edit My Videos →
            </Link>
            <Link href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:bg-lime transition-all text-center">
              See Editing System
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2 }} className="flex-1 w-full relative h-[400px] md:mt-24 xl:mt-0 md:h-[500px] hidden lg:block">
          {/* Timeline Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-full max-w-[95%] sm:max-w-full bg-black border-[3px] border-black rounded-[20px] h-[300px] md:h-[350px] shadow-[8px_8px_0_0_#ff007f] md:shadow-[12px_12px_0_0_#ff007f] transform -rotate-2 z-10 overflow-hidden flex flex-col mx-auto">
            <div className="bg-[#222] border-b-[3px] border-black p-3 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-hotpink border border-black" />
              <div className="w-2 h-2 rounded-full bg-lime border border-black" />
              <div className="w-2 h-2 rounded-full border border-black bg-electricblue" />
            </div>
            
            <div className="flex-1 p-6 flex flex-col gap-3 justify-end relative">
              {/* Playhead */}
              <div className="absolute top-0 bottom-0 left-[30%] w-0.5 bg-hotpink z-20">
                <div className="absolute -top-3 -left-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-hotpink" />
              </div>
              
              {/* Tracks */}
              <div className="h-10 w-full flex items-center bg-[#1a1a1a] rounded border border-white/10 px-2 gap-1 overflow-hidden relative">
                <div className="w-8 shrink-0 text-[10px] text-white/40 font-bold uppercase">V2</div>
                <div className="h-6 w-1/4 bg-hotpink rounded border border-black flex items-center justify-center text-[10px] font-bold text-white uppercase overflow-hidden">Hook text</div>
                <div className="h-6 w-1/3 bg-lime rounded border border-black flex items-center justify-center text-[10px] font-bold text-black uppercase overflow-hidden ml-4">Subtitle layer</div>
              </div>
              
              <div className="h-14 w-full flex items-center bg-[#1a1a1a] rounded border border-white/10 px-2 gap-1 overflow-hidden relative">
                <div className="w-8 shrink-0 text-[10px] text-white/40 font-bold uppercase">V1</div>
                <div className="h-10 w-1/3 bg-[#0055ff] rounded border border-black flex items-center justify-center text-[10px] font-bold text-white uppercase overflow-hidden">Main A-Roll</div>
                <div className="h-10 w-1/5 bg-white rounded border border-black flex items-center justify-center text-[10px] font-bold text-black uppercase overflow-hidden">B-Roll Cut</div>
                <div className="h-10 w-1/3 bg-[#0055ff] rounded border border-black flex items-center justify-center text-[10px] font-bold text-white uppercase overflow-hidden">Main A-Roll</div>
              </div>

              <div className="h-8 w-full flex items-center bg-[#1a1a1a] rounded border border-white/10 px-2 gap-1 overflow-hidden relative">
                <div className="w-8 shrink-0 text-[10px] text-white/40 font-bold uppercase">A1</div>
                <div className="h-4 w-full bg-lime/50 rounded border border-black flex items-center px-2 overflow-hidden gap-1">
                  {[40, 80, 20, 90, 60, 45, 100, 30, 75, 55, 85, 25, 95, 50, 40, 70, 80, 35, 90, 65].map((h, i) => (
                    <div key={i} className="w-1 bg-lime/80 rounded-full" style={{ height: h + '%' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-10 left-10 bg-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase shadow-[4px_4px_0_0_#999] z-20 transform -rotate-12">Hook</div>
          <div className="absolute right-0 top-1/4 bg-lime border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase shadow-[4px_4px_0_0_#000] z-20 transform rotate-12">Pacing</div>
          <div className="absolute left-10 bottom-10 bg-electricblue text-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase shadow-[4px_4px_0_0_#000] z-20 transform rotate-6">Subtitles</div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-hotpink py-24 md:py-32 px-4 border-y-[4px] border-black shadow-[inset_0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[1] uppercase tracking-tighter mb-8 text-black">
              Good content can still fail with weak editing.
            </h2>
            <p className="text-xl font-medium text-black/80 leading-relaxed mb-8 bg-cream border-[3px] border-black p-6 rounded-2xl shadow-[6px_6px_0_0_#000] transform -rotate-1">
              If the first 3 seconds don&apos;t hook, the pacing feels slow, or the subtitles are hard to follow, viewers scroll away. Editing is not just decoration — it controls attention.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 flex flex-col gap-4 w-full">
            {problems.map((p, i) => (
              <div key={i} className="bg-black text-white border-[3px] border-black p-6 rounded-2xl font-display font-black text-2xl uppercase transform hover:-translate-y-1 transition-transform flex justify-between" style={{ rotate: `${(i % 2 === 0 ? 1 : -1) * 2}deg` }}>
                <span>{p}</span>
                <span className="text-hotpink">✕</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 md:py-32 px-4 max-w-7xl mx-auto text-center">
        <h2 className="font-display font-black text-4xl md:text-6xl leading-tight uppercase tracking-tighter mb-16 max-w-4xl mx-auto">
          We edit for <span className="bg-lime px-2 inline-block rotate-1">retention, clarity, and action.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {solutions.map((item) => (
            <div key={item} className="bg-cream border-[3px] border-black rounded-full px-6 py-3 font-bold uppercase text-sm md:text-base hover:bg-black hover:text-white transition-colors cursor-default">
              + {item}
            </div>
          ))}
        </div>
      </section>

      {/* Video Types */}
      <section className="bg-black text-white py-24 md:py-32 px-4 border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-4 text-center text-lime">Content we edit.</h2>
          <p className="text-xl md:text-3xl text-center text-white/60 font-bold mb-16">Optimized for every platform.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Instagram Reels', bgHover: 'hover:bg-hotpink hover:text-black', borderHover: 'group-hover:border-black', icon: '✦', rotate: 'hover:-rotate-2' },
              { label: 'YouTube Shorts', bgHover: 'hover:bg-[#ff0000] hover:text-white', borderHover: 'group-hover:border-black', icon: '⚡', rotate: 'hover:rotate-2' },
              { label: 'YouTube Long-Form', bgHover: 'hover:bg-lime hover:text-black', borderHover: 'group-hover:border-black', icon: '▶', rotate: 'hover:-rotate-1' },
              { label: 'Podcast Clips', bgHover: 'hover:bg-electricblue hover:text-black', borderHover: 'group-hover:border-black', icon: '🎙️', rotate: 'hover:rotate-1' },
              { label: 'Talking-Head', bgHover: 'hover:bg-cream hover:text-black', borderHover: 'group-hover:border-black', icon: '🗣️', rotate: 'hover:-rotate-2' },
              { label: 'Ad Creatives', bgHover: 'hover:bg-hotpink hover:text-black', borderHover: 'group-hover:border-black', icon: '🎯', rotate: 'hover:rotate-2' },
              { label: 'Product Videos', bgHover: 'hover:bg-lime hover:text-black', borderHover: 'group-hover:border-black', icon: '📦', rotate: 'hover:-rotate-1' },
              { label: 'Educational', bgHover: 'hover:bg-electricblue hover:text-black', borderHover: 'group-hover:border-black', icon: '📚', rotate: 'hover:rotate-1' },
              { label: 'Founder Videos', bgHover: 'hover:bg-cream hover:text-black', borderHover: 'group-hover:border-black', icon: '🎬', rotate: 'hover:-rotate-2' }
            ].map((type, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group perspective-1000">
                <div className={`bg-[#111] border-[3px] border-white/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center font-bold text-xl md:text-2xl uppercase transition-all duration-300 ${type.bgHover} ${type.rotate} shadow-none hover:shadow-[8px_8px_0_0_#fff]`}>
                  <div className={`text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-md`}>{type.icon}</div>
                  <span className="tracking-tighter">{type.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention Framework Section */}
      <section className="py-24 md:py-32 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">Every edit follows an <span className="text-electricblue">attention system.</span></h2>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch max-w-5xl mx-auto w-full">
            {['Hook', 'Context', 'Value', 'Pattern Interrupt', 'Proof', 'CTA'].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col gap-4">
                <div className="bg-white border-[3px] border-black p-4 rounded-xl shadow-[4px_4px_0_0_#ff007f] text-center font-display font-black text-sm uppercase h-full flex items-center justify-center">
                  {step}
                </div>
                {i < 5 && <div className="text-center text-2xl font-black text-black/20 md:-rotate-90">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-4 bg-lime border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">How we execute.</h2>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {[
              { n: '01', t: 'Send raw footage via Drive' },
              { n: '02', t: 'We identify the hook & trim fat' },
              { n: '03', t: 'We edit for pacing and rhythm' },
              { n: '04', t: 'We add subtitles and visual effects' },
              { n: '05', t: 'You review, approve, and post' }
            ].map((step, i) => (
              <div key={step.n} className="bg-black text-white border-[3px] border-black p-6 rounded-2xl flex items-center gap-6">
                <div className="font-display font-black text-4xl text-lime shrink-0">{step.n}</div>
                <h3 className="font-bold text-xl uppercase">{step.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA Specific */}
      <section className="bg-cream py-24 md:py-32 px-4 border-b-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center border-[4px] border-black bg-hotpink text-black p-12 md:p-20 rounded-[40px] shadow-[16px_16px_0_0_#000] relative -rotate-1">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Your videos should feel impossible to ignore.
          </h2>
          <p className="font-medium text-xl md:text-2xl mb-12 text-black/80 max-w-2xl mx-auto">
            Start with short-form edits, podcast clips, YouTube videos, or ad creatives built for attention.
          </p>
          <Link href="#contact" className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black hover:bg-lime hover:text-black transition-all shadow-[8px_8px_0_0_#000] hover:-translate-y-1">
            Start Video Editing →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 max-w-4xl mx-auto">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-16 text-center">FAQ</h2>
        <div className="flex flex-col border-t-[3px] border-black">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-[3px] border-black">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-6 flex justify-between items-center group">
                <h3 className="font-bold text-xl md:text-2xl pr-8 md:pr-12 group-hover:text-hotpink transition-colors">{faq.q}</h3>
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-cream group-hover:bg-hotpink group-hover:text-white transition-colors">
                  {openFaq === i ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </div>
              </button>
              {openFaq === i && (
                <div className="pb-8 font-medium text-lg text-black/80">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-cream py-24 md:py-32 px-4 text-center border-t-[4px] border-black shadow-[inset_0_4px_0_0_#ff007f]">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-12 max-w-5xl mx-auto">
          Your footage has value.<br/>
          <span className="text-lime italic">Let&apos;s make people watch it.</span>
        </h2>
        <Link href="#contact" className="inline-block bg-hotpink text-white px-10 py-5 rounded-full font-bold text-xl border-[4px] border-white transition-all shadow-[8px_8px_0_0_#fcfbf8] hover:-translate-y-1 hover:bg-lime hover:text-black hover:border-black">
        Send Video Project on WhatsApp →
      </Link>
    </section>

    <OtherServices currentService="Video Editing" />
    <FinalCTA serviceName="Video Editing" />
  </main>
  );
}
