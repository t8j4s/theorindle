'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm({ serviceName = "General Inquiry" }: { serviceName?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-cream border-[3px] border-black rounded-[30px] p-8 md:p-12 text-center shadow-[12px_12px_0_0_#000] w-full text-black transition-all">
        <div className="w-20 h-20 bg-lime border-[3px] border-black rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="font-display font-black text-3xl md:text-5xl uppercase mb-4 tracking-tighter">Request Received!</h3>
        <p className="font-medium text-lg text-black/80 mb-8">
          Thanks! ORINDLE received your request. We&apos;ll contact you soon to discuss your growth system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://wa.me/919021923579" target="_blank" className="bg-lime text-black border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all">
            Whatsapp Us →
          </Link>
          <Link href="/#services" className="bg-white text-black border-[3px] border-black px-6 py-3 rounded-full font-bold uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all">
            Back to Services →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream border-[3px] border-black rounded-[30px] p-6 lg:p-10 shadow-[12px_12px_0_0_#ccff00] w-full text-black relative z-10 transition-all">
      <div className="mb-8 text-center sm:text-left">
        <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter mb-2 text-black">Build My System</h3>
        <p className="font-medium text-black/70">Fill out the form below to get started. No commitments.</p>
      </div>
      
      {status === 'error' && (
        <div className="bg-hotpink text-white border-2 border-black p-4 rounded-xl font-bold mb-6">
          Something went wrong. Please try again or contact us on WhatsApp.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full relative z-20">
        <input type="hidden" name="access_key" value="54a674f4-a045-47e9-a8e1-b41f0f8c5610" />
        <input type="hidden" name="subject" value="New ORINDLE Website Lead" />
        <input type="hidden" name="from_name" value="ORINDLE Website" />
        <input type="hidden" name="service_page" value={serviceName} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2 w-full text-left">
            <label className="font-bold text-sm uppercase tracking-wide text-black">Full Name *</label>
            <input type="text" name="name" required className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue focus:ring-2 focus:ring-electricblue/20 transition-all font-medium" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2 w-full text-left">
            <label className="font-bold text-sm uppercase tracking-wide text-black">Business Name</label>
            <input type="text" name="business" className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue transition-all font-medium" placeholder="Doe Agency" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2 w-full text-left">
            <label className="font-bold text-sm uppercase tracking-wide text-black">Email Address *</label>
            <input type="email" name="email" required className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue transition-all font-medium" placeholder="john@example.com" />
          </div>
          <div className="flex flex-col gap-2 w-full text-left">
            <label className="font-bold text-sm uppercase tracking-wide text-black">Phone / WhatsApp *</label>
            <input type="tel" name="phone" required className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue transition-all font-medium" placeholder="+91 90000 00000" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2 w-full text-left">
            <label className="font-bold text-sm uppercase tracking-wide text-black">Select Service *</label>
            <select name="service_interest" required defaultValue={serviceName} className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue transition-all font-medium appearance-none">
              <option value="Social Media Management">Social Media Management</option>
              <option value="Website Development">Website Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Video Editing">Video Editing</option>
              <option value="AI Automation">AI Automation</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full text-left">
            <label className="font-bold text-sm uppercase tracking-wide text-black">Monthly Budget *</label>
            <select name="budget" required defaultValue="" className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue transition-all font-medium appearance-none">
              <option value="" disabled>Select an option</option>
              <option value="Below ₹10,000">Below ₹10,000</option>
              <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
              <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
              <option value="₹50,000+">₹50,000+</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full text-left">
          <label className="font-bold text-sm uppercase tracking-wide text-black">Project Message / Requirement *</label>
          <textarea name="message" required rows={4} className="w-full text-black bg-white border-2 border-black rounded-xl p-3 focus:outline-none focus:border-electricblue transition-all font-medium resize-none" placeholder="Tell us what you want to achieve..."></textarea>
        </div>

        <p className="text-xs text-black/60 font-medium text-center">
          By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-hotpink transition-colors">Privacy Policy</Link> and <Link href="/terms-of-service" className="underline hover:text-hotpink transition-colors">Terms of Service</Link>.
        </p>

        <button type="submit" disabled={status === 'loading'} className="w-full bg-black text-lime border-[3px] border-black rounded-xl py-4 font-bold text-lg uppercase tracking-wide hover:bg-hotpink hover:text-white transition-all disabled:opacity-70 mt-2 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#999]">
          {status === 'loading' ? 'Sending...' : 'Send My Requirement →'}
        </button>
      </form>
    </div>
  );
}
