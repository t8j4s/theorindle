'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';
import OtherServices from '@/components/OtherServices';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const problems = [
  "Looks outdated",
  "Not mobile-friendly",
  "No clear CTA",
  "Poor SEO structure"
];

const solutions = [
  "Mobile-first UI",
  "Clean page structure",
  "Strong copywriting",
  "SEO meta setup",
  "Fast loading sections",
  "Clear CTA placement",
  "Trust-building layout",
  "Contact/WhatsApp flow",
  "Landing page strategy"
];

const types = [
  "Business websites",
  "Landing pages",
  "Portfolio websites",
  "Service websites",
  "E-commerce stores",
  "Booking pages",
  "Lead generation pages",
  "Product pages"
];

const faqs = [
  { q: "Do you build mobile-friendly websites?", a: "Yes. Every website we build is mobile-first, ensuring it looks and works perfectly on any device." },
  { q: "Can you build landing pages?", a: "Yes, we build high-converting landing pages for paid ads, specific services, or new product launches." },
  { q: "Do you add SEO?", a: "Yes, we include foundational on-page SEO, including meta tags, semantic HTML tags, and fast loading structures." },
  { q: "Can you connect WhatsApp?", a: "Yes, we can integrate floating WhatsApp buttons or direct chat links into the website flow." },
  { q: "Can you build e-commerce websites?", a: "Yes, we build clean, modern e-commerce stores focusing on user experience and single-page checkout." },
  { q: "How fast can a website be completed?", a: "A standard business website typically takes 2 to 4 weeks depending on the complexity of the design and content." }
];

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-hotpink selection:text-white pb-0">
      <Header />
      
      {/* Hero */}
      <section className="relative px-4 pt-12 pb-20 md:pt-16 md:pb-32 max-w-7xl mx-auto flex flex-col items-start overflow-hidden xl:flex-row xl:items-center gap-12 border-b-[4px] border-black">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl z-10">
          <div className="text-sm font-bold uppercase tracking-widest text-lime mb-6 border-2 border-lime px-4 py-2 w-fit rounded-full bg-black">
            WEBSITE DEVELOPMENT
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[1] tracking-tighter mb-8 uppercase relative z-10">
            Your website should not just exist.<br />
            It should <span className="bg-lime px-2 pb-1 inline-block transform rotate-1 mt-2">sell.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-display font-black text-hotpink italic uppercase mb-8">
            &quot;Built fast. Built clean. Built for leads.&quot;
          </p>
          <p className="text-lg md:text-2xl font-medium text-black/80 mb-10 leading-relaxed max-w-2xl">
            ORINDLE builds mobile-first, SEO-ready, responsive websites, landing pages, portfolios, and e-commerce stores that make your business look premium and help visitors take action.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:-translate-y-1 hover:bg-lime hover:text-black hover:shadow-[6px_6px_0_0_#000] transition-all text-center">
              Build My Website →
            </Link>
            <Link href="#process" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:bg-hotpink hover:text-white transition-all text-center bg-white">
              See Website Process
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Visual Mockups */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex-1 w-full relative h-[500px] hidden lg:block">
          {/* Mockup 1 */}
          <div className="absolute top-0 right-10 w-72 bg-white border-[3px] border-black rounded-xl shadow-[8px_8px_0_0_#000] transform rotate-6 z-10">
            <div className="bg-cream border-b-[3px] border-black p-3 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-hotpink border border-black" />
              <div className="w-2 h-2 rounded-full bg-lime border border-black" />
              <div className="w-2 h-2 rounded-full bg-electricblue border border-black" />
            </div>
            <div className="p-4 h-40 bg-black/5 flex items-center justify-center font-display font-bold text-center uppercase">Business<br/>Website</div>
          </div>
          {/* Mockup 2 */}
          <div className="absolute top-20 right-40 w-72 bg-white border-[3px] border-black rounded-xl shadow-[8px_8px_0_0_#ccff00] transform -rotate-3 z-20">
            <div className="bg-cream border-b-[3px] border-black p-3 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-hotpink border border-black" />
              <div className="w-2 h-2 rounded-full bg-lime border border-black" />
            </div>
            <div className="p-4 h-48 bg-black/5 flex items-center justify-center font-display font-bold text-center uppercase">Landing<br/>Page</div>
          </div>
          {/* Mockup 3 */}
          <div className="absolute top-48 right-0 w-72 bg-white border-[3px] border-black rounded-xl shadow-[8px_8px_0_0_#ff007f] transform rotate-2 z-30">
            <div className="bg-cream border-b-[3px] border-black p-3 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-hotpink border border-black" />
            </div>
            <div className="p-4 h-56 bg-black/5 flex items-center justify-center font-display font-bold text-center uppercase">E-commerce<br/>Store</div>
          </div>
          
          <div className="absolute bottom-10 left-0 bg-lime border-[3px] border-black px-4 py-2 rounded-full font-bold uppercase shadow-[4px_4px_0_0_#000] z-40 transform -rotate-6">Mobile-first</div>
          <div className="absolute bottom-24 right-20 bg-electricblue text-white border-[3px] border-black px-4 py-2 rounded-full font-bold uppercase shadow-[4px_4px_0_0_#000] z-40 transform rotate-6">Fast loading</div>
          <div className="absolute top-10 left-10 bg-hotpink text-white border-[3px] border-black px-4 py-2 rounded-full font-bold uppercase shadow-[4px_4px_0_0_#000] z-40 transform -rotate-12">SEO-ready</div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-8">
              Your website is often your first impression.<br/>
              <span className="text-black/30">Most businesses waste it.</span>
            </h2>
            <p className="text-xl font-medium leading-relaxed mb-8 text-black/80">
              Slow pages, weak copy, poor mobile layouts, confusing buttons, and template designs make customers lose trust before they ever contact you.
            </p>
          </motion.div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-[3px] border-black p-8 rounded-2xl shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] transition-all hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded-full bg-hotpink border-2 border-black flex items-center justify-center font-bold text-white mb-6">✕</div>
                <div className="font-display font-black text-2xl uppercase">{p}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-lime py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000] border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 max-w-5xl mx-auto">
            We build websites that make your business look serious.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {solutions.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-[3px] border-black p-6 md:p-8 rounded-[24px] shadow-[6px_6px_0_0_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream border-2 border-black flex items-center justify-center font-black group-hover:bg-hotpink group-hover:text-white transition-colors shrink-0">
                  ✓
                </div>
                <div className="font-display font-bold text-xl md:text-2xl uppercase mt-1">
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 md:py-32 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter max-w-2xl leading-[1]">
              Websites<br/>we build.
            </h2>
            <p className="text-xl font-medium text-black/60 max-w-sm pb-2">
              From small service businesses to full-scale e-commerce flows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-white border-[3px] border-black p-8 rounded-[30px] shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-all overflow-hidden hover:bg-electricblue hover:text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-end">
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center font-black text-2xl group-hover:bg-lime group-hover:text-black transition-colors bg-cream">
                  +
                </div>
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-[0.03] group-hover:opacity-10 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
                <h3 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight relative z-10 w-4/5">
                  {type}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Page Structure Section */}
      <section className="py-24 md:py-32 px-4 bg-black text-white border-y-[4px] border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6 text-center text-lime">Every page is built with conversion in mind.</h2>
          <p className="text-center font-medium text-xl text-white/70 mb-16">We structure wireframes designed to lead users naturally to the CTA.</p>
          <div className="flex flex-col gap-4">
            {['Hero with strong offer', 'Problem/solution block', 'Services section', 'Proof/trust section', 'Process section', 'Pricing/offer section', 'FAQ section', 'Final CTA'].map((section, idx) => (
              <div key={idx} className="bg-cream text-black border-[3px] border-black p-4 md:p-6 rounded-xl md:rounded-2xl font-display font-black text-lg md:text-2xl uppercase flex items-center justify-between group hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#ccff00] transition-all cursor-default">
                <span>{section}</span>
                <span className="text-black/30 group-hover:text-hotpink transition-colors">↓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">The Build Process</h2>
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {[
              { n: '01', t: 'Understand your business' },
              { n: '02', t: 'Create page structure' },
              { n: '03', t: 'Design mobile-first UI' },
              { n: '04', t: 'Build and optimize' },
              { n: '05', t: 'Connect CTA and launch' }
            ].map((step, i) => (
              <div key={step.n} className="flex gap-6 items-center bg-white border-[3px] border-black p-6 md:p-8 rounded-[30px] shadow-[8px_8px_0_0_#000]">
                <div className="font-display font-black text-4xl md:text-6xl text-hotpink bg-cream border-2 border-black w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shrink-0">
                  {step.n}
                </div>
                <h3 className="font-bold text-xl md:text-3xl uppercase leading-tight">{step.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA Specific */}
      <section className="bg-hotpink py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000] border-t-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center border-[4px] border-black bg-cream p-12 md:p-20 rounded-[40px] shadow-[16px_16px_0_0_#000] relative rotate-1">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Your business deserves more than a basic template.
          </h2>
          <p className="font-medium text-xl md:text-2xl mb-12 text-black/80 max-w-2xl mx-auto">
            Start with a premium website built to explain your offer clearly and convert visitors into inquiries.
          </p>
          <Link href="#contact" className="inline-block bg-black text-lime px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black hover:bg-lime hover:text-black transition-all shadow-[8px_8px_0_0_#000] hover:-translate-y-1">
            Start Website Project →
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
                <h3 className="font-bold text-xl md:text-2xl pr-8 md:pr-12 group-hover:text-lime transition-colors">{faq.q}</h3>
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-cream group-hover:bg-lime group-hover:text-black transition-colors">
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
          Your website should make people <span className="text-hotpink italic">trust you faster.</span>
        </h2>
        <Link href="#contact" className="inline-block bg-lime text-black px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black transition-all shadow-[8px_8px_0_0_#ff007f] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#ff007f]">
        Build My Website with ORINDLE →
      </Link>
    </section>

    <OtherServices currentService="Website Development" />
    <FinalCTA serviceName="Website Development" />
  </main>
  );
}
