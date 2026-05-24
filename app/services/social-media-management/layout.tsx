import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Social Media Management Agency India — ORINDLE',
  description: 'Grow your brand on Instagram and LinkedIn with ORINDLE’s social media strategy, content planning, captions, carousels, and engagement systems.',
  alternates: {
    canonical: 'https://www.orindle.com/services/social-media-management',
  },
  openGraph: {
    url: 'https://www.orindle.com/services/social-media-management',
    title: 'Social Media Management Agency India — ORINDLE',
    description: 'Grow your brand on Instagram and LinkedIn with ORINDLE’s social media strategy, content planning, captions, carousels, and engagement systems.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.orindle.com/services/social-media-management/#service",
        "name": "Social Media Management",
        "serviceType": "Social Media Management",
        "provider": {
          "@id": "https://www.orindle.com/#organization"
        },
        "areaServed": "IN",
        "description": "Grow your brand on Instagram and LinkedIn with ORINDLE’s social media strategy, content planning, captions, carousels, and engagement systems.",
        "url": "https://www.orindle.com/services/social-media-management"
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
            "name": "Social Media Management",
            "item": "https://www.orindle.com/services/social-media-management"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you post content for us?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we handle the scheduling and posting of your approved content across platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Do you create captions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We write engaging, brand-aligned captions designed to hook readers and drive action."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage Instagram and LinkedIn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in both platforms, creating platform-specific strategies for each."
            }
          },
          {
            "@type": "Question",
            "name": "Do you make reels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide Reel ideas, scripts, and editing directions to ensure your short-form video performs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does growth take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consistent growth takes time. Expect to see foundational improvements in 30 days, with compounding results at 90 days."
            }
          },
          {
            "@type": "Question",
            "name": "Can I start with only Instagram?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can focus on a single platform to start and expand as your business grows."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="social-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
