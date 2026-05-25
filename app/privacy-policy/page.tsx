import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalTableOfContents from '@/components/LegalTableOfContents';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Privacy Policy — ORINDLE',
  description: 'Read ORINDLE’s Privacy Policy to understand how we collect, use, protect, and manage information shared through our website and services.',
  alternates: {
    canonical: 'https://www.orindle.com/privacy-policy',
  },
  openGraph: {
    url: 'https://www.orindle.com/privacy-policy',
    title: 'Privacy Policy — ORINDLE',
    description: 'Read ORINDLE’s Privacy Policy to understand how we collect, use, protect, and manage information shared through our website and services.',
  }
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-collect-information', title: 'How We Collect Information' },
  { id: 'how-we-use-your-information', title: 'How We Use Your Information' },
  { id: 'web3forms', title: 'Web3Forms' },
  { id: 'whatsapp-and-third-party-links', title: 'WhatsApp and Third-Party Links' },
  { id: 'cookies-and-analytics', title: 'Cookies and Analytics' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'user-rights', title: 'User Rights' },
  { id: 'childrens-privacy', title: 'Children’s Privacy' },
  { id: 'changes-to-this-privacy-policy', title: 'Changes to This Privacy Policy' },
  { id: 'contact-us', title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.orindle.com/privacy-policy/#webpage",
        "url": "https://www.orindle.com/privacy-policy",
        "name": "Privacy Policy — ORINDLE",
        "description": "Read ORINDLE’s Privacy Policy to understand how we collect, use, protect, and manage information shared through our website and services."
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
            "name": "Privacy Policy",
            "item": "https://www.orindle.com/privacy-policy"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-lime selection:text-black flex flex-col">
      <Script
        id="privacy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header theme="cream" />

      {/* Hero Section */}
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16 max-w-4xl mx-auto w-full text-center border-b-[4px] border-black">
        <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-black/60 mb-6">
          <Link href="/" className="hover:text-hotpink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Privacy Policy</span>
        </div>
        
        <div className="inline-block bg-lime text-black border-2 border-black px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 transform -rotate-2">
          PRIVACY POLICY
        </div>
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[0.9]">
          Your data matters.<br/>
          <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>We keep it clear.</span>
        </h1>
        <p className="font-medium text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed">
          This Privacy Policy explains how ORINDLE collects, uses, and protects the information you share with us through our website, forms, WhatsApp, email, and services.
        </p>
      </section>

      {/* Content Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <LegalTableOfContents items={tocItems} />

        <div className="flex-1 max-w-3xl prose prose-lg prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-hotpink prose-a:no-underline hover:prose-a:underline prose-p:font-medium prose-p:text-black/80 prose-p:leading-relaxed prose-li:font-medium prose-li:text-black/80">
          
          <div className="bg-white border-2 border-black p-4 inline-block font-bold text-sm uppercase rounded-xl mb-12 shadow-[4px_4px_0_0_#000]">
            Last updated: {lastUpdated}
          </div>

          <p className="lead font-bold text-xl text-black">
            This content is for general website policy purposes and should be written clearly. 
            By using our website or services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <hr className="border-black/20 my-10" />

          <section id="introduction" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">1</span>
              Introduction
            </h2>
            <p>
              ORINDLE respects your privacy. This policy applies to website visitors, leads, clients, and users who contact us. We are committed to protecting your personal information and your right to privacy.
            </p>
          </section>

          <section id="information-we-collect" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">2</span>
              Information We Collect
            </h2>
            <p>We may collect the following types of information when you interact with us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Full name</li>
              <li>Business name</li>
              <li>Email address</li>
              <li>Phone number / WhatsApp number</li>
              <li>Service interest</li>
              <li>Budget range</li>
              <li>Project details</li>
              <li>Website usage information</li>
              <li>Any information submitted through forms, email, or WhatsApp</li>
            </ul>
          </section>

          <section id="how-we-collect-information" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">3</span>
              How We Collect Information
            </h2>
            <p>We collect information through various touchpoints:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Website contact forms</li>
              <li>Web3Forms submissions</li>
              <li>WhatsApp messages</li>
              <li>Email communication</li>
              <li>Discovery calls</li>
              <li>Website analytics tools, if used</li>
            </ul>
          </section>

          <section id="how-we-use-your-information" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">4</span>
              How We Use Your Information
            </h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Responding to inquiries</li>
              <li>Understanding project requirements</li>
              <li>Providing our services</li>
              <li>Sending proposals or project updates</li>
              <li>Improving our website and services</li>
              <li>Ongoing client communication and support</li>
              <li>Legal or security purposes</li>
            </ul>
          </section>

          <section id="web3forms" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">5</span>
              Web3Forms
            </h2>
            <p>
              ORINDLE uses Web3Forms to collect contact form submissions. When you submit a form, your information is sent securely through Web3Forms so we can receive and respond to your inquiry efficiently.
            </p>
          </section>

          <section id="whatsapp-and-third-party-links" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">6</span>
              WhatsApp and Third-Party Links
            </h2>
            <p>
              Our website may contain links to WhatsApp or other third-party platforms. Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy. We strongly advise you to review the privacy policies of any third-party platforms you visit.
            </p>
          </section>

          <section id="cookies-and-analytics" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">7</span>
              Cookies and Analytics
            </h2>
            <p>
              ORINDLE may use cookies, tracking pixels, or similar analytics tools to understand website performance, traffic sources, and user behavior. This helps us optimize our website. You can choose to disable cookies through your individual browser options.
            </p>
          </section>

          <section id="data-sharing" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">8</span>
              Data Sharing
            </h2>
            <div className="bg-lime/20 border-l-[4px] border-lime p-4 my-6">
              <p className="m-0 font-bold">We do not sell your personal information.</p>
            </div>
            <p>
              Your data may be shared only with trusted third-party tools or service providers that are strictly necessary to operate our business, communicate with you, process forms, or provide our requested services.
            </p>
          </section>

          <section id="data-security" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">9</span>
              Data Security
            </h2>
            <p>
              We take reasonable steps and implement modern security practices to protect your personal information from unauthorized access, alteration, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section id="data-retention" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">10</span>
              Data Retention
            </h2>
            <p>
              ORINDLE retains your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, including resolving disputes, providing our services, and complying with legal or record-keeping obligations.
            </p>
          </section>

          <section id="user-rights" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">11</span>
              User Rights
            </h2>
            <p>You have the right to request the following regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access the information we have collected about you</li>
              <li>Correct or update inaccurate information</li>
              <li>Request the deletion of your personal information</li>
              <li>Opt out of any non-essential communications</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:tejas@orindle.com">tejas@orindle.com</a>.
            </p>
          </section>

          <section id="childrens-privacy" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">12</span>
              Children’s Privacy
            </h2>
            <p>
              Our website and services are not intended for children under the age of 13. ORINDLE does not knowingly collect personal identifiable information from children. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>
          </section>

          <section id="changes-to-this-privacy-policy" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">13</span>
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. The updated version will be posted directly on this page with a revised &quot;Last updated&quot; date. We encourage you to review this page periodically.
            </p>
          </section>

          <section id="contact-us" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">14</span>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, your data rights, or our practices, you can contact us at:
            </p>
            <p className="font-bold text-xl mt-4">
              <a href="mailto:tejas@orindle.com" className="text-black hover:text-hotpink transition-colors no-underline">
                tejas@orindle.com
              </a>
            </p>
          </section>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-electricblue text-white px-4 py-20 md:py-32 border-y-[4px] border-black text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter">
            Have a question about your data?
          </h2>
          <Link 
            href="https://wa.me/919021923579" 
            target="_blank"
            className="inline-flex items-center justify-center bg-white text-black text-xl md:text-2xl font-black uppercase tracking-wide px-8 md:px-12 py-4 md:py-6 rounded-full border-[4px] border-black hover:bg-hotpink hover:text-white transition-all hover:scale-105 hover:shadow-[8px_8px_0_0_#000]"
          >
            Contact ORINDLE →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
