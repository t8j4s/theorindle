import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Website Development Agency India — ORINDLE',
  description: 'ORINDLE builds fast, mobile-first, SEO-ready websites, landing pages, business websites, and e-commerce stores for Indian businesses.',
  alternates: {
    canonical: 'https://www.orindle.com/services/website-development',
  },
  openGraph: {
    url: 'https://www.orindle.com/services/website-development',
    title: 'Website Development Agency India — ORINDLE',
    description: 'ORINDLE builds fast, mobile-first, SEO-ready websites, landing pages, business websites, and e-commerce stores for Indian businesses.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.orindle.com/services/website-development/#service",
        "name": "Website Development",
        "serviceType": "Website Development",
        "provider": {
          "@id": "https://www.orindle.com/#organization"
        },
        "areaServed": "IN",
        "description": "ORINDLE builds fast, mobile-first, SEO-ready websites, landing pages, business websites, and e-commerce stores for Indian businesses.",
        "url": "https://www.orindle.com/services/website-development"
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
            "name": "Website Development",
            "item": "https://www.orindle.com/services/website-development"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you build mobile-friendly websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every website we build is mobile-first, ensuring it looks and works perfectly on any device."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build landing pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we build high-converting landing pages for paid ads, specific services, or new product launches."
            }
          },
          {
            "@type": "Question",
            "name": "Do you add SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we include foundational on-page SEO, including meta tags, semantic HTML tags, and fast loading structures."
            }
          },
          {
            "@type": "Question",
            "name": "Can you connect WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can integrate floating WhatsApp buttons or direct chat links into the website flow."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build e-commerce websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we build clean, modern e-commerce stores focusing on user experience and single-page checkout."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can a website be completed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard business website typically takes 2 to 4 weeks depending on the complexity of the design and content."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
