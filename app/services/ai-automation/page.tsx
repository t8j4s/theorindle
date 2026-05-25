'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';
import OtherServices from '@/components/OtherServices';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const problems = [
  "Slow replies",
  "Missed leads",
  "Repeated questions",
  "Manual follow-ups",
  "Messy CRM"
];

const solutions = [
  "AI customer support chatbot",
  "WhatsApp automation",
  "Lead capture forms",
  "CRM workflows",
  "Auto replies",
  "Follow-up reminders",
  "Inquiry qualification",
  "Booking flow automation",
  "Internal team notifications"
];

const types = [
  "WhatsApp replies",
  "FAQs",
  "Lead qualification",
  "Appointment booking",
  "Customer support",
  "CRM updates",
  "Follow-up reminders",
  "Email notifications",
  "Form submissions"
];

const faqs = [
  { q: "Can you build WhatsApp automation?", a: "Yes, we create automated WhatsApp flows for customer support, lead capture, and instant replies." },
  { q: "Can you create an AI chatbot?", a: "Yes, we train AI chatbots on your specific business knowledge to answer customer questions accurately." },
  { q: "Can automation collect leads?", a: "Absolutely. We build interactive flows that qualify visitors and instantly capture their contact details." },
  { q: "Can it connect with CRM?", a: "Yes, we integrate forms and chatbots directly into your CRM (like HubSpot, Zoho, or custom sheets) so no lead is lost." },
  { q: "Is this useful for small businesses?", a: "Yes. Small businesses benefit the most because it saves hours of manual work and ensures every customer gets a fast reply." },
  { q: "Will it replace human support?", a: "No, it handles the repetitive 80% of questions and seamlessly hands off complex issues to your human team." }
];

export default function AIAutomation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-electricblue selection:text-white pb-0">
      <Header theme="white" />
      
      {/* Hero */}
      <section className="relative px-4 pt-12 pb-20 md:pt-16 md:pb-32 max-w-7xl mx-auto flex flex-col items-start overflow-hidden xl:flex-row xl:items-center gap-12 border-b-[4px] border-white/10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl z-10">
          <div className="text-sm font-bold uppercase tracking-widest text-lime mb-6 border-2 border-lime px-4 py-2 w-fit rounded-full bg-lime/10">
            AI AUTOMATION
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[1] tracking-tighter mb-8 uppercase relative z-10">
            Stop doing the same task twice.<br />
            <span className="bg-lime text-black px-2 pb-1 inline-block transform rotate-1 mt-2">Automate it.</span>
          </h1>
          <div className="bg-electricblue text-white px-4 py-2 font-bold uppercase text-xl md:text-2xl w-fit mb-8 shadow-[4px_4px_0_0_#fff] border-[3px] border-white -rotate-1 inline-block">
            AI Chatbots + WhatsApp + CRM
          </div>
          <p className="text-lg md:text-2xl font-medium text-white/80 mb-10 leading-relaxed max-w-2xl mt-4">
            ORINDLE helps businesses save time with AI chatbots, WhatsApp automation, lead capture systems, CRM workflows, and support flows that respond faster and organize leads better.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg border-[3px] border-white hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0055ff] transition-all text-center">
              Automate My Business →
            </Link>
            <Link href="#solutions" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-[3px] border-white/20 hover:border-white hover:bg-white/10 transition-all text-center">
              See Automation Flow
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Visual Workflow */}
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2 }} className="flex-1 w-full relative h-[600px] hidden lg:block">
          
          {/* Node 1 */}
          <div className="absolute top-10 left-10 bg-[#111] border-[3px] border-white p-4 rounded-2xl w-64 z-20">
            <div className="text-xs font-bold uppercase text-white/50 mb-1">Trigger</div>
            <div className="font-display font-bold text-lg text-lime">Customer Message</div>
          </div>

          <svg className="absolute top-20 left-[300px] w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>

          {/* Node 2 */}
          <div className="absolute top-32 right-10 bg-[#111] border-[3px] border-electricblue p-4 rounded-2xl w-64 shadow-[8px_8px_0_0_#0055ff] z-20">
            <div className="text-xs font-bold uppercase text-electricblue mb-1">AI Agent</div>
            <div className="font-display font-bold text-lg">AI Reply &amp; Qualification</div>
          </div>

          <svg className="absolute top-48 right-[300px] w-20 h-20 text-white/20 transform rotate-90 md:rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>

          {/* Node 3 */}
          <div className="absolute bottom-40 left-20 bg-[#111] border-[3px] border-hotpink p-4 rounded-2xl w-64 shadow-[8px_8px_0_0_#ff007f] z-20">
            <div className="text-xs font-bold uppercase text-hotpink mb-1">Action</div>
            <div className="font-display font-bold text-lg">CRM Update &amp; Lead Captured</div>
          </div>

          <svg className="absolute bottom-32 left-[320px] w-20 h-20 text-white/20 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>

          {/* Node 4 */}
          <div className="absolute bottom-10 right-20 bg-lime text-black border-[3px] border-white p-4 rounded-2xl w-64 shadow-[8px_8px_0_0_#fff] z-20 transform -rotate-2">
            <div className="text-xs font-bold uppercase text-black/50 mb-1">Outcome</div>
            <div className="font-display font-bold text-lg">Follow-up Reminder Set</div>
          </div>

          {/* Floating Badges */}
          <div className="absolute bottom-20 right-0 bg-white text-black border-[3px] border-black px-4 py-2 rounded-full font-bold uppercase text-xs z-30 transform rotate-12">WhatsApp Bot</div>
          <div className="absolute top-0 right-32 bg-hotpink text-white border-[3px] border-black px-4 py-2 rounded-full font-bold uppercase text-xs z-30 transform -rotate-6">AI Support</div>

        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="bg-cream text-black py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#0055ff] border-b-[4px] border-black relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[1] uppercase tracking-tighter mb-8 text-black">
              Manual work silently kills growth.
            </h2>
            <p className="text-xl font-medium text-black/80 leading-relaxed mb-8">
              When every inquiry, follow-up, support question, and lead update depends on manual effort, things get missed. Automation helps your business respond faster and stay organized.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 flex flex-wrap gap-4 w-full">
            {problems.map((p, i) => (
              <div key={i} className="bg-black text-white border-[3px] border-black px-6 py-4 rounded-full font-display font-black text-xl uppercase shadow-[4px_4px_0_0_#ff007f]">
                ✕ {p}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-lime py-24 md:py-32 px-4 shadow-[inset_0_4px_0_0_#000] border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 max-w-5xl mx-auto text-black">
            We build systems that work <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>even when you&apos;re busy.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {solutions.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-[3px] border-black p-6 md:p-8 rounded-[24px] shadow-[6px_6px_0_0_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream border-2 border-black flex items-center justify-center font-black group-hover:bg-electricblue group-hover:text-white transition-colors shrink-0 text-black">
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

      {/* Types Section */}
      <section className="bg-cream text-black py-24 md:py-32 px-4 border-b-[4px] border-black shadow-[inset_0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <h2 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter max-w-2xl leading-[1] text-black">
              What can be<br/>automated?
            </h2>
            <p className="text-xl font-medium text-black/60 max-w-[280px] pb-2">
              Save hours of manual work every week.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-white border-[3px] border-black p-8 rounded-[30px] shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-all overflow-hidden hover:bg-electricblue hover:text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-end text-black">
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center font-black text-2xl group-hover:bg-lime group-hover:text-black transition-colors bg-cream">
                  +
                </div>
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-[0.03] group-hover:opacity-10 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
                <h3 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight relative z-10 w-4/5 group-hover:text-white">
                  {type}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Visualization Section */}
      <section className="py-24 md:py-32 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">One message can start<br/><span className="text-electricblue">the whole system.</span></h2>
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black border-[2px] border-white/20 p-6 rounded-xl font-bold font-display uppercase flex flex-col">
                <span className="text-white/40 text-sm mb-2 text-center md:text-left">Step 1</span>
                <span className="text-center md:text-left text-xl">Visitor asks question</span>
              </div>
              <div className="bg-black border-[2px] border-electricblue p-6 rounded-xl font-bold font-display uppercase flex flex-col shadow-[inset_0_0_20px_rgba(0,85,255,0.2)]">
                <span className="text-electricblue text-sm mb-2 text-center md:text-left">Step 2 (Automated)</span>
                <span className="text-center md:text-left text-xl">Bot replies instantly</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black border-[2px] border-lime p-6 rounded-xl font-bold font-display uppercase flex flex-col shadow-[inset_0_0_20px_rgba(204,255,0,0.1)]">
                <span className="text-lime text-sm mb-2 text-center md:text-left">Step 3 (Automated)</span>
                <span className="text-center md:text-left text-xl">Lead is captured</span>
              </div>
              <div className="bg-black border-[2px] border-white/20 p-6 rounded-xl font-bold font-display uppercase flex flex-col">
                <span className="text-white/40 text-sm mb-2 text-center md:text-left">Step 4 (Automated)</span>
                <span className="text-center md:text-left text-xl text-white">Business gets notified</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-black border-[2px] border-white/20 p-6 rounded-xl font-bold font-display uppercase flex flex-col">
                <span className="text-white/40 text-sm mb-2 text-center md:text-left">Step 5 (Automated)</span>
                <span className="text-center md:text-left text-xl text-white">CRM is updated</span>
              </div>
              <div className="bg-black border-[2px] border-hotpink p-6 rounded-xl font-bold font-display uppercase flex flex-col shadow-[inset_0_0_20px_rgba(255,0,127,0.2)]">
                <span className="text-hotpink text-sm mb-2 text-center md:text-left">Step 6 (Automated)</span>
                <span className="text-center md:text-left text-xl">Follow-up is triggered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-4 bg-cream text-black border-y-[4px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1] uppercase tracking-tighter mb-16 text-center">How we execute.</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              { n: '1', t: 'Map repetitive tasks' },
              { n: '2', t: 'Design automation flow' },
              { n: '3', t: 'Build chatbot/workflow' },
              { n: '4', t: 'Test real scenarios' },
              { n: '5', t: 'Launch and improve' }
            ].map((step, i) => (
              <div key={step.n} className="bg-white border-[3px] border-black p-6 rounded-2xl flex items-center gap-4 shadow-[4px_4px_0_0_#000] flex-1 min-w-[250px]">
                <div className="font-display font-black text-3xl text-electricblue shrink-0">{step.n}</div>
                <h3 className="font-bold text-lg uppercase">{step.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA Specific */}
      <section className="bg-electricblue text-white py-24 md:py-32 px-4 border-b-[4px] border-black shadow-[inset_0_4px_0_0_#000]">
        <div className="max-w-4xl mx-auto text-center border-[4px] border-black bg-black p-12 md:p-20 rounded-[40px] shadow-[16px_16px_0_0_#ccff00] relative rotate-1">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Automation should feel simple, not technical.
          </h2>
          <p className="font-medium text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto">
            We build practical AI and WhatsApp systems that help your business reply faster, organize leads, and save hours every week.
          </p>
          <Link href="#contact" className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black hover:bg-lime transition-all shadow-[8px_8px_0_0_#000] hover:-translate-y-1">
            Build My Automation →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 max-w-4xl mx-auto">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-16 text-center">FAQ</h2>
        <div className="flex flex-col border-t-[3px] border-white/20">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-[3px] border-white/20">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-6 flex justify-between items-center group">
                <h3 className="font-bold text-xl md:text-2xl pr-8 md:pr-12 group-hover:text-electricblue transition-colors text-white">{faq.q}</h3>
                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0 bg-[#111] group-hover:bg-electricblue group-hover:border-electricblue transition-colors">
                  {openFaq === i ? <Minus size={16} strokeWidth={3} className="text-white" /> : <Plus size={16} strokeWidth={3} className="text-white" />}
                </div>
              </button>
              {openFaq === i && (
                <div className="pb-8 font-medium text-lg text-white/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream text-black py-24 md:py-32 px-4 text-center border-t-[4px] border-black shadow-[inset_0_4px_0_0_#000]">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-12 max-w-5xl mx-auto">
          Your business does not need more manual work.<br/>
          <span className="text-electricblue italic">It needs smarter systems.</span>
        </h2>
        <Link href="#contact" className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-xl border-[4px] border-black transition-all shadow-[8px_8px_0_0_#0055ff] hover:-translate-y-1 hover:bg-electricblue">
        Automate with ORINDLE →
      </Link>
    </section>

    <OtherServices currentService="AI Automation" theme="light" />
    <FinalCTA serviceName="AI Automation" />
  </main>
  );
}
