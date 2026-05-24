import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Automation Agency India — Chatbots & WhatsApp',
  description: 'ORINDLE builds AI chatbots, WhatsApp automation, CRM workflows, lead capture systems, and support automation for growing businesses.',
  alternates: {
    canonical: 'https://www.orindle.com/services/ai-automation',
  },
  openGraph: {
    url: 'https://www.orindle.com/services/ai-automation',
    title: 'AI Automation Agency India — Chatbots & WhatsApp',
    description: 'ORINDLE builds AI chatbots, WhatsApp automation, CRM workflows, lead capture systems, and support automation for growing businesses.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.orindle.com/services/ai-automation/#service",
        "name": "AI Automation",
        "serviceType": "AI Automation",
        "provider": {
          "@id": "https://www.orindle.com/#organization"
        },
        "areaServed": "IN",
        "description": "ORINDLE builds AI chatbots, WhatsApp automation, CRM workflows, lead capture systems, and support automation for growing businesses.",
        "url": "https://www.orindle.com/services/ai-automation"
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
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.orindle.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Automation",
            "item": "https://www.orindle.com/services/ai-automation"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you build WhatsApp automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we create automated WhatsApp flows for customer support, lead capture, and instant replies."
            }
          },
          {
            "@type": "Question",
            "name": "Can you create an AI chatbot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we train AI chatbots on your specific business knowledge to answer customer questions accurately."
            }
          },
          {
            "@type": "Question",
            "name": "Can automation collect leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We build interactive flows that qualify visitors and instantly capture their contact details."
            }
          },
          {
            "@type": "Question",
            "name": "Can it connect with CRM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we integrate forms and chatbots directly into your CRM (like HubSpot, Zoho, or custom sheets) so no lead is lost."
            }
          },
          {
            "@type": "Question",
            "name": "Is this useful for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Small businesses benefit the most because it saves hours of manual work and ensures every customer gets a fast reply."
            }
          },
          {
            "@type": "Question",
            "name": "Will it replace human support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, it handles the repetitive 80% of questions and seamlessly hands off complex issues to your human team."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="ai-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
