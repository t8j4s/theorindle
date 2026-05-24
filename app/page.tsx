import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/MarqueeSection';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesOverview from '@/components/ServicesOverview';
import ServiceDeepDive from '@/components/ServiceDeepDive';
import MockupShowcase from '@/components/MockupShowcase';
import ObjectionHandling from '@/components/ObjectionHandling';
import WhyOrindle from '@/components/WhyOrindle';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ORINDLE — Website, Marketing & AI Automation Agency India',
  description: 'ORINDLE helps Indian businesses grow with websites, social media, digital marketing, video editing, and AI automation built for leads and scale.',
  alternates: {
    canonical: 'https://www.orindle.com/',
  },
  openGraph: {
    url: 'https://www.orindle.com/',
    title: 'ORINDLE — Website, Marketing & AI Automation Agency India',
    description: 'ORINDLE helps Indian businesses grow with websites, social media, digital marketing, video editing, and AI automation built for leads and scale.',
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.orindle.com/#organization",
        "name": "ORINDLE",
        "url": "https://www.orindle.com",
        "email": "tejas@orindle.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://wa.me/919021923579",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.orindle.com/#website",
        "url": "https://www.orindle.com",
        "name": "ORINDLE — Website, Marketing & AI Automation Agency India",
        "publisher": {
          "@id": "https://www.orindle.com/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.orindle.com/#service",
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
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-hotpink selection:text-white pb-0">
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <MarqueeSection />
      <ProblemSolution />
      <ServicesOverview />
      <ServiceDeepDive />
      <MockupShowcase />
      <ObjectionHandling />
      <WhyOrindle />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
