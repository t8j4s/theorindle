import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalTableOfContents from '@/components/LegalTableOfContents';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Terms of Service — ORINDLE',
  description: 'Read ORINDLE’s Terms of Service for using our website and working with us for website development, social media, digital marketing, video editing, and AI automation services.',
  alternates: {
    canonical: 'https://www.orindle.com/terms-of-service',
  },
  openGraph: {
    url: 'https://www.orindle.com/terms-of-service',
    title: 'Terms of Service — ORINDLE',
    description: 'Read ORINDLE’s Terms of Service for using our website and working with us for website development, social media, digital marketing, video editing, and AI automation services.',
  }
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'services-we-provide', title: 'Services We Provide' },
  { id: 'website-use', title: 'Website Use' },
  { id: 'service-inquiries', title: 'Service Inquiries' },
  { id: 'project-scope', title: 'Project Scope' },
  { id: 'payments', title: 'Payments' },
  { id: 'revisions', title: 'Revisions' },
  { id: 'client-responsibilities', title: 'Client Responsibilities' },
  { id: 'timelines', title: 'Timelines' },
  { id: 'website-development-terms', title: 'Website Development Terms' },
  { id: 'social-media-and-digital-marketing-terms', title: 'Social Media and Digital Marketing Terms' },
  { id: 'video-editing-terms', title: 'Video Editing Terms' },
  { id: 'ai-automation-terms', title: 'AI Automation Terms' },
  { id: 'third-party-tools', title: 'Third-Party Tools' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'no-guaranteed-results', title: 'No Guaranteed Results' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'cancellation-and-refunds', title: 'Cancellation and Refunds' },
  { id: 'changes-to-terms', title: 'Changes to Terms' },
  { id: 'contact', title: 'Contact' },
];

export default function TermsOfServicePage() {
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
        "@id": "https://www.orindle.com/terms-of-service/#webpage",
        "url": "https://www.orindle.com/terms-of-service",
        "name": "Terms of Service — ORINDLE",
        "description": "Read ORINDLE’s Terms of Service for using our website and working with us for website development, social media, digital marketing, video editing, and AI automation services."
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
            "name": "Terms of Service",
            "item": "https://www.orindle.com/terms-of-service"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-cream text-black selection:bg-lime selection:text-black flex flex-col">
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header theme="cream" />

      {/* Hero Section */}
      <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16 max-w-4xl mx-auto w-full text-center border-b-[4px] border-black">
        <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-black/60 mb-6">
          <Link href="/" className="hover:text-hotpink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Terms of Service</span>
        </div>
        
        <div className="inline-block bg-lime text-black border-2 border-black px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 transform rotate-2">
          TERMS OF SERVICE
        </div>
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[0.9]">
          Clear terms.<br/>
          <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>Better work.</span>
        </h1>
        <p className="font-medium text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed">
          These Terms of Service explain the rules, responsibilities, and conditions for using the ORINDLE website and working with ORINDLE for digital services.
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
            By accessing or using our website and services, you agree to comply with these terms.
          </p>

          <hr className="border-black/20 my-10" />

          <section id="introduction" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">1</span>
              Introduction
            </h2>
            <p>
              By accessing the ORINDLE website, communicating with us, or engaging our services, you agree to be bound by these Terms of Service and our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>

          <section id="services-we-provide" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">2</span>
              Services We Provide
            </h2>
            <p>ORINDLE provides digital services including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Social Media Management</li>
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Video Editing</li>
              <li>AI Automation</li>
              <li>Related digital strategy and consulting services</li>
            </ul>
          </section>

          <section id="website-use" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">3</span>
              Website Use
            </h2>
            <p>By using this website, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Misuse the website or its infrastructure</li>
              <li>Submit false or misleading information through our forms</li>
              <li>Attempt to damage, hack, or disrupt the website&apos;s functionality</li>
              <li>Copy, reproduce, or steal website content, layouts, or branding without permission</li>
              <li>Use the website for any illegal or unauthorized purposes</li>
            </ul>
          </section>

          <section id="service-inquiries" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">4</span>
              Service Inquiries
            </h2>
            <p>
              Submitting a lead form, email, or contacting ORINDLE does not guarantee service acceptance. ORINDLE reserves the right to accept, reject, or customize projects based on fit, availability, technical scope, and project requirements.
            </p>
          </section>

          <section id="project-scope" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">5</span>
              Project Scope
            </h2>
            <p>
              Every project is unique. The specific scope, deliverables, timeline, pricing structure, revision limits, and payment terms will be discussed and agreed upon separately in a formal proposal or agreement before any work begins.
            </p>
          </section>

          <section id="payments" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">6</span>
              Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Pricing varies depending on final project requirements and scope.</li>
              <li>Work may require advance payment or specific milestone payments.</li>
              <li>Services typically start only after payment confirmation.</li>
              <li>All payment terms, structural deposits, and schedules must be fully agreed upon before the project begins.</li>
            </ul>
          </section>

          <section id="revisions" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">7</span>
              Revisions
            </h2>
            <p>
              Revisions are provided subject to the agreed project scope. Extra revisions, significant design changes, or new structural requirements outside the original agreed scope may require additional billing or extended timelines.
            </p>
          </section>

          <section id="client-responsibilities" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">8</span>
              Client Responsibilities
            </h2>
            <p>To ensure a successful project, clients are responsible for providing:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Correct business details and factual information</li>
              <li>Brand assets (logos, colors, typography)</li>
              <li>Content, images, videos, or account access if needed</li>
              <li>Clear and timely feedback during revision cycles</li>
              <li>Formal approvals required to complete the work stages</li>
            </ul>
          </section>

          <section id="timelines" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">9</span>
              Timelines
            </h2>
            <p>
              Estimated timelines depend entirely on project scope, client response time, content availability, revision cycles, and technical requirements. Delays in providing feedback, content, or structural assets may directly delay final delivery.
            </p>
          </section>

          <section id="website-development-terms" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">10</span>
              Website Development Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>ORINDLE may architect and build websites, landing pages, e-commerce stores, or service pages.</li>
              <li>Final delivery depends completely on the formally agreed structural scope.</li>
              <li>Domain names, hosting services, third-party software tools, paid premium plugins, or ongoing subscriptions are charged separately unless explicitly included in the written agreement.</li>
            </ul>
          </section>

          <section id="social-media-and-digital-marketing-terms" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">11</span>
              Social Media & Digital Marketing Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>ORINDLE can assist with long-term strategy, content creation, posting direction, ads, SEO, and targeted campaigns.</li>
              <li>We do not guarantee specific follower counts, lead volumes, definitive sales metrics, strict SEO rankings, or exact revenue numbers.</li>
              <li>Results always depend on market variables, offer quality, budget scale, audience accuracy, consistency, and external algorithm variations.</li>
            </ul>
          </section>

          <section id="video-editing-terms" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">12</span>
              Video Editing Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Clients must provide usable raw footage, brand guidelines, and clear editing instructions.</li>
              <li>Final delivery depends on video length, narrative complexity, and requested revision rounds.</li>
              <li>Additional formats (e.g., resizing for different platforms) or significant structural re-edits may incur extra costs if outside the directly agreed scope.</li>
            </ul>
          </section>

          <section id="ai-automation-terms" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">13</span>
              AI Automation Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>ORINDLE may build AI chatbots, WhatsApp automation systems, CRM workflows, and lead response software.</li>
              <li>Automation performance intrinsically depends on external tools, API integrations, third-party platform stability, and proper client-side setup.</li>
              <li>Fees for third-party platforms (e.g., OpenAI, Twilio, Make.com) are separate and borne by the client unless specified otherwise.</li>
            </ul>
          </section>

          <section id="third-party-tools" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">14</span>
              Third-Party Tools
            </h2>
            <p>
              ORINDLE frequently relies upon third-party platforms and services such as Web3Forms, WhatsApp, hosting providers, analytics dashboards, CRM tools, automation backends, payment gateways, or ad platform APIs. We are not responsible for the downtime, policy changes, limitations, or technical failures of any third-party services.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">15</span>
              Intellectual Property
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>ORINDLE irrevocably owns its website content, custom design styles, internal assets, and core brand materials.</li>
              <li>Client-owned materials and submitted collateral remain the exclusive property of the client at all times.</li>
              <li>Final project ownership, code licensing, or usage rights depend strictly on the agreed payment schedule and project scope.</li>
              <li>ORINDLE reserves the right to showcase completed non-confidential work in our portfolio or case studies unless a formal NDA or alternative agreement states otherwise.</li>
            </ul>
          </section>

          <section id="no-guaranteed-results" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">16</span>
              No Guaranteed Results
            </h2>
            <div className="bg-hotpink/10 border-l-[4px] border-hotpink p-4 my-6">
              <p className="m-0 font-bold">
                ORINDLE works diligently to provide highly professional, high-quality digital services, but we do not guarantee specific business results, sales metrics, qualified leads, SEO rankings, follower milestones, views, or direct revenue gains.
              </p>
            </div>
          </section>

          <section id="limitation-of-liability" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">17</span>
              Limitation of Liability
            </h2>
            <p>
              Under no circumstances shall ORINDLE or its contractors be liable for any indirect, incidental, or consequential damages, business losses, missed revenue, external platform restrictions, third-party technical failures, or any systemic results outside ORINDLE&apos;s direct control.
            </p>
          </section>

          <section id="cancellation-and-refunds" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">18</span>
              Cancellation and Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Cancellation protocols and available refund conditions depend directly on the project stage and agreed formal scope.</li>
              <li>Payments rendered for completed work, initial strategy, technical planning, or already started service phases may not be refundable due to the inherent time investment.</li>
              <li>Custom refund variables or specific exit terms should be negotiated and agreed upon before the project commences.</li>
            </ul>
          </section>

          <section id="changes-to-terms" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">19</span>
              Changes to Terms
            </h2>
            <p>
              ORINDLE may update, modify, or revise these Terms of Service at any time without explicit prior notice. The absolute latest version will continuously be available on this exact web page.
            </p>
          </section>

          <section id="contact" className="mb-12 scroll-mt-32">
            <h2 className="text-3xl mb-6 flex items-center gap-4">
              <span className="bg-black text-lime w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-[2px_2px_0_0_#ff007f]">20</span>
              Contact
            </h2>
            <p>
              For any questions regarding these Terms of Service or to discuss a project agreement, please contact ORINDLE at:
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
            Ready to build with clarity?
          </h2>
          <Link 
            href="https://wa.me/919021923579" 
            target="_blank"
            className="inline-flex items-center justify-center bg-white text-black text-xl md:text-2xl font-black uppercase tracking-wide px-8 md:px-12 py-4 md:py-6 rounded-full border-[4px] border-black hover:bg-hotpink hover:text-white transition-all hover:scale-105 hover:shadow-[8px_8px_0_0_#000]"
          >
            Start with ORINDLE →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
