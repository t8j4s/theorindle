import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact ORINDLE — Start Your Digital Growth',
  description: 'Contact ORINDLE to build your website, social media system, marketing funnel, video content, or AI automation workflow.',
  alternates: {
    canonical: 'https://www.orindle.com/contact'
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.orindle.com/contact/#webpage",
        "url": "https://www.orindle.com/contact",
        "name": "Contact ORINDLE — Start Your Digital Growth",
        "description": "Contact ORINDLE to build your website, social media system, marketing funnel, video content, or AI automation workflow."
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.orindle.com/#organization",
        "name": "ORINDLE",
        "url": "https://www.orindle.com",
        "email": "tejas@orindle.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://wa.me/919021923579",
          "availableLanguage": ["English"]
        },
        "areaServed": "IN",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.orindle.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://www.orindle.com/contact"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-lime selection:text-black flex flex-col">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header theme="cream" />

      {/* Hero Section */}
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16 max-w-4xl mx-auto w-full text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-black/60 mb-6">
          <Link href="/" className="hover:text-hotpink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Contact</span>
        </div>
        
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[0.9]">
          Let&apos;s build<br/>
          <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>Something great.</span>
        </h1>
        <p className="font-medium text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed mb-12">
          Contact ORINDLE to build your website, social media system, marketing funnel, video content, or AI automation workflow.
        </p>

        <div className="max-w-2xl mx-auto w-full text-left">
          <ContactForm />
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
