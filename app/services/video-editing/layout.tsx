import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Video Editing Agency India — Reels, YouTube & Ads',
  description: 'ORINDLE edits high-retention Reels, YouTube videos, podcast clips, subtitles, ad creatives, and social videos built to grab attention.',
  alternates: {
    canonical: 'https://www.orindle.com/services/video-editing',
  },
  openGraph: {
    url: 'https://www.orindle.com/services/video-editing',
    title: 'Video Editing Agency India — Reels, YouTube & Ads',
    description: 'ORINDLE edits high-retention Reels, YouTube videos, podcast clips, subtitles, ad creatives, and social videos built to grab attention.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.orindle.com/services/video-editing/#service",
        "name": "Video Editing",
        "serviceType": "Video Editing",
        "provider": {
          "@id": "https://www.orindle.com/#organization"
        },
        "areaServed": "IN",
        "description": "ORINDLE edits high-retention Reels, YouTube videos, podcast clips, subtitles, ad creatives, and social videos built to grab attention.",
        "url": "https://www.orindle.com/services/video-editing"
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
            "name": "Video Editing",
            "item": "https://www.orindle.com/services/video-editing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you edit Reels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in high-retention, fast-paced Reels designed for Instagram and TikTok."
            }
          },
          {
            "@type": "Question",
            "name": "Do you add subtitles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we include dynamic, easy-to-read subtitles inspired by top creators to keep mobile viewers engaged."
            }
          },
          {
            "@type": "Question",
            "name": "Can you edit YouTube videos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We edit long-form YouTube videos, ensuring the storytelling and pacing hold attention through the entire video."
            }
          },
          {
            "@type": "Question",
            "name": "Can you make podcast clips?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can take your long-form podcasts and extract the most engaging 30-60 second clips for social media."
            }
          },
          {
            "@type": "Question",
            "name": "Do you edit ad creatives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we edit direct-response video ads for Meta and Google with strong hooks and clear calls to action."
            }
          },
          {
            "@type": "Question",
            "name": "How do I send footage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a secure Google Drive or Dropbox link where you can dump raw footage directly from your phone or camera."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="video-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
