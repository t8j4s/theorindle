'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import OtherServices from '@/components/OtherServices';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const problems = [
  "Random posting",
  "Weak profile positioning",
  "No content system"
];

const deliverables = [
  "Instagram content strategy",
  "LinkedIn content strategy",
  "Monthly content calendar",
  "Captions and hooks",
  "Carousel ideas",
  "Reel ideas",
  "Hashtag direction",
  "Profile optimization",
  "Engagement strategy",
  "Analytics review"
];

const faqs = [
  { q: "Do you post content for us?", a: "Yes, we handle the scheduling and posting of your approved content across platforms." },
  { q: "Do you create captions?", a: "Absolutely. We write engaging, brand-aligned captions designed to hook readers and drive action." },
  { q: "Do you manage Instagram and LinkedIn?", a: "Yes, we specialize in both platforms, creating platform-specific strategies for each." },
  { q: "Do you make reels?", a: "We provide Reel ideas, scripts, and editing directions to ensure your short-form video performs." },
  { q: "How long does growth take?", a: "Consistent growth takes time. Expect to see foundational improvements in 30 days, with compounding results at 90 days." },
  { q: "Can I start with only Instagram?", a: "Yes, we can focus on a single platform to start and expand as your business grows." }
];

export default function SocialMediaManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-lime selection:text-black pb-0">
      <Header />
      
      {/* Hero */}
      <section className="relative px-4 pt-12 pb-20 md:pt-16 md:pb-32 max-w-7xl mx-auto flex flex-col items-start overflow-hidden xl:flex-row xl:items-center gap-12 border-b-[4px] border-black">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-widest text-[#ff007f] mb-6 border-2 border-hotpink px-4 py-2 w-fit rounded-full">
            SOCIAL MEDIA MANAGEMENT
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[1] tracking-tighter mb-8 uppercase">
            Stop posting randomly.<br />
            Start <span className="bg-lime px-2 pb-1 inline-block transform -rotate-1">building a brand.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-display font-black text-hotpink italic uppercase mb-8">
            &quot;Content that actually has a direction.&quot;
          </p>
          <p className="text-lg md:text-2xl font-medium text-black/80 mb-10 leading-relaxed">
            ORINDLE helps businesses grow on Instagram and LinkedIn with strategy, content planning, captions, carousels, posting systems, and engagement ideas that make your brand look active, trusted, and premium.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto bg-hotpink text-white px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] transition-all text-center">
              Grow My Socials →
            </Link>
            <Link href="#deliverables" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:bg-lime transition-all text-center">
              See What&apos;s Included
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Visual Mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2 }} className="flex-1 w-full relative h-[600px] hidden lg:block">
          <div className="absolute left-12 lg:left-24 xl:left-32 top-10 w-80 bg-white border-[3px] border-black rounded-[40px] h-[550px] shadow-[12px_12px_0_0_#000] transform rotate-6 z-10 flex flex-col overflow-hidden">
            <div className="bg-cream border-b-[3px] border-black p-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-hotpink border border-black" />
              <div className="w-3 h-3 rounded-full bg-lime border border-black" />
            </div>
            <div className="p-4 flex flex-col gap-4 bg-black/5 flex-1 relative overflow-hidden">
              <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_#000]">
                <div className="flex gap-2 items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-lime border border-black" />
                  <div className="h-2 w-24 bg-black/20 rounded-full" />
                </div>
                <div className="aspect-square bg-cream border border-black mb-2 flex items-center justify-center font-display font-bold text-black/30">POST</div>
                <div className="h-2 w-3/4 bg-black/20 rounded-full" />
              </div>
              <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_#ff007f]">
                <div className="font-bold text-xs uppercase mb-2">Metrics</div>
                <div className="h-4 w-full bg-lime border border-black rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="absolute left-10 top-20 bg-lime border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform -rotate-12 shadow-[4px_4px_0_0_#ff007f] z-20">Captions</div>
          <div className="absolute right-20 top-0 bg-hotpink text-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform rotate-6 shadow-[4px_4px_0_0_#000] z-20">Carousels</div>
          <div className="absolute left-20 bottom-32 bg-electricblue text-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform rotate-12 shadow-[4px_4px_0_0_#000] z-20">Consistency</div>
          <div className="absolute right-10 bottom-10 bg-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform -rotate-6 shadow-[4px_4px_0_0_#ccff00] z-20">Growth</div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-black text-white py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[1] uppercase tracking-tighter mb-8">
              Most businesses don&apos;t have a content problem.<br/>
              <span className="text-hotpink">They have a clarity problem.</span>
            </h2>
            <p className="text-xl font-medium text-white/80 leading-relaxed mb-8">
              They post when they remember, copy trends randomly, and hope something works. The result? No brand memory, no trust, no leads, and no clear reason for people to follow.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 flex flex-col gap-4 w-full">
            {problems.map((p, i) => (
              <div key={i} className="bg-hotpink text-white border-[3px] border-black p-6 rounded-2xl font-display font-black text-2xl uppercase transform shadow-[6px_6px_0_0_#ccff00] hover:-translate-y-1 transition-transform" style={{ rotate: `${(i % 2 === 0 ? 1 : -1) * 2}deg` }}>
                {p}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight uppercase tracking-tighter mb-16 max-w-4xl mx-auto">
            ORINDLE turns your social media into a <span className="bg-lime px-2 inline-block -rotate-1">growth channel.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Content strategy', 'Profile positioning', 'Instagram growth direction', 'LinkedIn management', 'Post ideas', 'Caption writing', 'Carousel planning', 'Engagement prompts', 'Monthly content calendar'].map((item) => (
              <div key={item} className="bg-cream border-[3px] border-black rounded-full px-6 py-3 font-bold uppercase text-sm md:text-base hover:bg-black hover:text-white transition-colors cursor-default">
                + {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="bg-cream border-t-[4px] border-black py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter">What we can manage <span className="text-hotpink block mt-2">for you.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliverables.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white border-[3px] border-black p-6 rounded-2xl shadow-[4px_4px_0_0_#000] hover:-translate-y-2 transition-transform flex items-center justify-center text-center outline-none">
                <span className="font-bold uppercase text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-lime py-24 md:py-32 px-4 border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-16 text-center">How we grow your audience.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Understand your business' },
              { n: '02', t: 'Build your content direction' },
              { n: '03', t: 'Plan posts and campaigns' },
              { n: '04', t: 'Improve based on response' }
            ].map((step, i) => (
              <div key={step.n} className="bg-cream border-[3px] border-black rounded-3xl p-8 relative overflow-hidden group">
                <div className="font-display font-black text-6xl text-lime opacity-50 mb-4 transition-transform group-hover:scale-110">{step.n}</div>
                <h3 className="font-bold text-xl uppercase leading-tight relative z-10">{step.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12 text-center text-black/40">Built for</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {['Local businesses', 'Coaches', 'Consultants', 'Clinics', 'Real estate brands', 'Agencies', 'Creators', 'Startup founders'].map((useCase) => (
            <div key={useCase} className="font-bold text-lg md:text-2xl uppercase border-b-4 border-hotpink pb-1 px-2 mx-2">
              {useCase}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Final CTA Specific */}
      <section className="bg-hotpink py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000] border-t-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center border-[4px] border-black bg-cream p-12 md:p-20 rounded-[40px] shadow-[16px_16px_0_0_#000] -rotate-1 relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-lime border-[3px] border-black rounded-full animate-bounce" />
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Social media that finally feels consistent.
          </h2>
          <p className="font-medium text-xl md:text-2xl mb-12 text-black/80 max-w-2xl mx-auto">
            Start with a monthly content system built around your business goals.
          </p>
          <Link href="#contact" className="inline-block bg-lime text-black px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000] hover:-translate-y-1">
            Start Social Growth →
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

      <section className="bg-black text-cream py-24 md:py-32 px-4 text-center border-t-[4px] border-black">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-12 max-w-5xl mx-auto">
          Your audience is already online.<br/>
          <span className="text-lime italic">Let&apos;s make them remember your brand.</span>
        </h2>
        <Link href="#contact" className="inline-block bg-hotpink text-white px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black transition-all shadow-[8px_8px_0_0_#ccff00] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#ccff00]">
        Talk to ORINDLE on WhatsApp →
      </Link>
    </section>

    <OtherServices currentService="Social Media Management" />
    <FinalCTA serviceName="Social Media Management" />
  </main>
  );
}
