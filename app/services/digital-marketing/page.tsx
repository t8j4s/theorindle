'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';
import OtherServices from '@/components/OtherServices';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const problems = [
  "No tracking",
  "Weak landing page",
  "Poor targeting",
  "No follow-up",
  "No conversion strategy"
];

const solutions = [
  "SEO strategy",
  "Google visibility",
  "Meta ads direction",
  "Lead generation campaigns",
  "Landing page optimization",
  "Email marketing",
  "Conversion tracking",
  "Funnel planning",
  "Retargeting strategy"
];

const channels = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Lead generation",
  "Email marketing",
  "Landing page optimization",
  "Conversion tracking",
  "Retargeting",
  "Analytics review"
];

const faqs = [
  { q: "Do you run paid ads?", a: "Yes, we structure, run, and optimize campaigns on Meta (Facebook/Instagram) and Google Ads." },
  { q: "Do you provide SEO?", a: "Yes, we focus on technical SEO, content strategy, and on-page optimization for long-term organic growth." },
  { q: "Can you generate leads for local businesses?", a: "Absolutely. We specialize in local SEO and geo-targeted ad campaigns to bring relevant leads." },
  { q: "Do I need a website before running ads?", a: "Ideally yes. If you don't have one, we can build a strong, conversion-focused landing page first." },
  { q: "Do you help with email marketing?", a: "Yes, we set up email sequences, newsletters, and automated follow-up flows for captured leads." },
  { q: "How soon can marketing results come?", a: "Paid ads can generate leads within days. SEO is a long-term play that typically takes 3-6 months to show significant organic compounding." }
];

export default function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-electricblue selection:text-white pb-0">
      <Header />
      
      {/* Hero */}
      <section className="relative px-4 pt-12 pb-20 md:pt-16 md:pb-32 max-w-7xl mx-auto flex flex-col items-start overflow-hidden xl:flex-row xl:items-center gap-12 border-b-[4px] border-black">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl z-10">
          <div className="text-sm font-bold uppercase tracking-widest text-[#0055ff] mb-6 border-2 border-electricblue px-4 py-2 w-fit rounded-full">
            DIGITAL MARKETING
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[1] tracking-tighter mb-8 uppercase">
            More traffic is not the goal.<br />
            <span className="bg-lime px-2 pb-1 inline-block transform -rotate-2 mt-2">Better leads are.</span>
          </h1>
          <div className="bg-electricblue text-white px-4 py-2 rounded-full font-bold uppercase text-xl md:text-2xl w-fit mb-8 shadow-[4px_4px_0_0_#000] rotate-1 inline-block">
            SEO + Ads + Conversion
          </div>
          <p className="text-lg md:text-2xl font-medium text-black/80 mb-10 leading-relaxed max-w-2xl mt-4">
            ORINDLE helps businesses attract, capture, and convert better leads through SEO, paid ads, lead generation campaigns, email marketing, and conversion-focused digital strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:-translate-y-1 hover:bg-electricblue hover:shadow-[6px_6px_0_0_#000] transition-all text-center">
              Grow My Leads →
            </Link>
            <Link href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-[3px] border-black hover:bg-lime transition-all text-center">
              Explore Marketing System
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2 }} className="flex-1 w-full relative h-[600px] hidden lg:block">
          {/* Dashboard Big Card */}
          <div className="absolute left-8 lg:left-20 xl:left-24 top-10 w-96 bg-white border-[3px] border-black rounded-[30px] h-[550px] shadow-[12px_12px_0_0_#000] transform rotate-3 z-10 flex flex-col overflow-hidden">
            <div className="bg-cream border-b-[3px] border-black p-4 font-bold text-center uppercase tracking-widest text-sm">Campaign Overview</div>
            <div className="p-6 flex flex-col gap-6 bg-cream/30 flex-1 relative">
              
              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_0_#ccff00]">
                <div className="text-xs uppercase text-black/50 font-bold mb-1">Leads this month</div>
                <div className="font-display font-black text-4xl text-electricblue">248</div>
                <div className="mt-2 h-2 w-full bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-lime" />
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_0_#ff007f]">
                <div className="text-xs uppercase text-black/50 font-bold mb-2">SEO Visibility</div>
                <div className="flex items-end gap-2 h-16 w-full">
                  {[40, 50, 45, 60, 80, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-black border border-black rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0_0_#0055ff] flex justify-between items-center">
                <div>
                  <div className="text-xs uppercase text-black/50 font-bold mb-1">Conversion Rate</div>
                  <div className="font-display font-black text-2xl">4.8%</div>
                </div>
                <div className="w-12 h-12 rounded-full border-[4px] border-lime flex items-center justify-center font-bold text-xs bg-black text-lime">+1.2</div>
              </div>

            </div>
          </div>
          
          <div className="absolute left-0 top-32 bg-lime border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform -rotate-12 shadow-[4px_4px_0_0_#000] z-20">SEO Visibility</div>
          <div className="absolute left-10 bottom-32 bg-electricblue text-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform rotate-6 shadow-[4px_4px_0_0_#000] z-20">Conversion Rate</div>
          <div className="absolute right-0 bottom-6 bg-hotpink text-white border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase transform -rotate-6 shadow-[4px_4px_0_0_#000] z-20">Email Follow-up</div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-black text-white py-24 md:py-32 px-4 border-y-[4px] border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-4xl">
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[1] uppercase tracking-tighter mb-8">
              Most marketing fails because it starts without a <span className="text-electricblue">system.</span>
            </h2>
            <p className="text-xl font-medium text-white/80 leading-relaxed text-center">
              Businesses spend on ads without clear landing pages, post content without tracking, and chase traffic without knowing what converts. ORINDLE creates a connected marketing system.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-hotpink text-white border-[3px] border-black p-4 px-6 rounded-full font-bold text-lg uppercase shadow-[4px_4px_0_0_#ccff00] transform" style={{ rotate: `${(i % 2 === 0 ? 1 : -1) * 2}deg` }}>
                ✕ {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutions" className="bg-lime py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000] border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 max-w-5xl mx-auto">
            We connect visibility, traffic, <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>leads, and follow-up.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {solutions.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-[3px] border-black p-6 md:p-8 rounded-[24px] shadow-[6px_6px_0_0_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream border-2 border-black flex items-center justify-center font-black group-hover:bg-electricblue group-hover:text-white transition-colors shrink-0">
                  ✓
                </div>
                <div className="font-display font-bold text-xl md:text-2xl uppercase mt-1 text-black">
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-24 md:py-32 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <h2 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter max-w-2xl leading-[1] text-black">
              Channels<br/>we help you<br/>grow with.
            </h2>
            <p className="text-xl font-medium text-black/60 max-w-sm pb-2">
              From organic search tracking to paid social campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((chan, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-white border-[3px] border-black p-8 rounded-[30px] shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-all overflow-hidden hover:bg-electricblue hover:text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-end text-black">
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center font-black text-2xl group-hover:bg-lime group-hover:text-black transition-colors bg-cream">
                  +
                </div>
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-[0.03] group-hover:opacity-10 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
                <h3 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight relative z-10 w-4/5 group-hover:text-white">
                  {chan}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel Section */}
      <section className="py-24 md:py-32 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">From stranger <span className="bg-hotpink text-white px-2">to customer.</span></h2>
          <div className="flex flex-col gap-2 max-w-3xl mx-auto">
            {[
              { s: 'Attention', d: 'Get seen via SEO & Ads' },
              { s: 'Click', d: 'Drive traffic with strong hooks' },
              { s: 'Landing Page', d: 'Educate and build trust' },
              { s: 'Lead Capture', d: 'Convert visitors into inquiries' },
              { s: 'Follow-up', d: 'Nurture via Email & WhatsApp' },
              { s: 'Conversion', d: 'Close the sale' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 bg-black text-white border-[3px] border-black p-6 rounded-2xl group hover:bg-lime hover:text-black transition-colors" style={{ marginLeft: `${i * 10}px`}}>
                <div className="font-display font-black text-3xl uppercase min-w-[250px]">{i + 1}. {step.s}</div>
                <div className="font-medium text-lg text-white/50 group-hover:text-black/70">→ {step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-4 bg-lime border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">How we execute.</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { n: '01', t: 'Audit presence' },
              { n: '02', t: 'Define goal' },
              { n: '03', t: 'Build funnel' },
              { n: '04', t: 'Optimize' },
              { n: '05', t: 'Scale' }
            ].map((step, i) => (
              <div key={step.n} className="flex flex-col gap-4 bg-white border-[3px] border-black p-6 rounded-3xl shadow-[4px_4px_0_0_#000]">
                <div className="font-display font-black text-4xl text-black/20">
                  {step.n}
                </div>
                <h3 className="font-bold text-xl uppercase leading-tight">{step.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA Specific */}
      <section className="bg-black py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000]">
        <div className="max-w-4xl mx-auto text-center border-[4px] border-black bg-electricblue text-white p-12 md:p-20 rounded-[40px] shadow-[16px_16px_0_0_#ccff00] relative">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Marketing should not feel like guessing.
          </h2>
          <p className="font-medium text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto">
            We help you create a clear system for visibility, leads, and conversions.
          </p>
          <Link href="#contact" className="inline-block bg-lime text-black px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black hover:bg-white transition-all shadow-[8px_8px_0_0_#000] hover:-translate-y-1">
            Plan My Marketing →
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
                <h3 className="font-bold text-xl md:text-2xl pr-8 md:pr-12 group-hover:text-electricblue transition-colors">{faq.q}</h3>
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-cream group-hover:bg-electricblue group-hover:text-white transition-colors">
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

      <section className="bg-lime text-black py-24 md:py-32 px-4 text-center border-t-[4px] border-black shadow-[inset_0_4px_0_0_#000]">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-12 max-w-5xl mx-auto">
          Stop guessing.<br/>
          <span className="text-electricblue italic">Start building a lead system.</span>
        </h2>
        <Link href="#contact" className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black transition-all shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:bg-hotpink">
        Talk to ORINDLE →
      </Link>
    </section>

    <OtherServices currentService="Digital Marketing" />
    <FinalCTA serviceName="Digital Marketing" />
  </main>
  );
}
