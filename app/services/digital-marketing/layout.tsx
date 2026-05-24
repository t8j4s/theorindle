import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency India — SEO, Ads & Leads',
  description: 'ORINDLE helps businesses grow with SEO, paid ads, lead generation, email marketing, campaign strategy, and conversion optimization.',
  alternates: {
    canonical: 'https://www.orindle.com/services/digital-marketing',
  },
  openGraph: {
    url: 'https://www.orindle.com/services/digital-marketing',
    title: 'Digital Marketing Agency India — SEO, Ads & Leads',
    description: 'ORINDLE helps businesses grow with SEO, paid ads, lead generation, email marketing, campaign strategy, and conversion optimization.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.orindle.com/services/digital-marketing/#service",
        "name": "Digital Marketing",
        "serviceType": "Digital Marketing",
        "provider": {
          "@id": "https://www.orindle.com/#organization"
        },
        "areaServed": "IN",
        "description": "ORINDLE helps businesses grow with SEO, paid ads, lead generation, email marketing, campaign strategy, and conversion optimization.",
        "url": "https://www.orindle.com/services/digital-marketing"
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
            "name": "Digital Marketing",
            "item": "https://www.orindle.com/services/digital-marketing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you run paid ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we structure, run, and optimize campaigns on Meta (Facebook/Instagram) and Google Ads."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we focus on technical SEO, content strategy, and on-page optimization for long-term organic growth."
            }
          },
          {
            "@type": "Question",
            "name": "Can you generate leads for local businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We specialize in local SEO and geo-targeted ad campaigns to bring relevant leads."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a website before running ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ideally yes. If you don't have one, we can build a strong, conversion-focused landing page first."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with email marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we set up email sequences, newsletters, and automated follow-up flows for captured leads."
            }
          },
          {
            "@type": "Question",
            "name": "How soon can marketing results come?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid ads can generate leads within days. SEO is a long-term play that typically takes 3-6 months to show significant organic compounding."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="marketing-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
