import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-cream text-black px-4 py-12 border-t-[4px] border-black mt-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/" className="font-display font-black text-4xl tracking-tighter uppercase">
            ORINDLE<span className="text-hotpink">.</span>
          </Link>
          <p className="font-bold text-sm text-black/70">
            Premium digital growth systems for modern Indian businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto flex-1 lg:ml-12 font-bold text-sm uppercase tracking-wide">
          <div className="flex flex-col gap-4">
            <span className="text-black/40 mb-2">Agency</span>
            <Link href="/#services" className="hover:text-hotpink transition-colors">Services</Link>
            <Link href="/#pricing" className="hover:text-hotpink transition-colors">Pricing</Link>
            <Link href="/#process" className="hover:text-hotpink transition-colors">Process</Link>
            <Link href="/#faq" className="hover:text-hotpink transition-colors">FAQ</Link>
          </div>
          
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-2">
            <span className="text-black/40 mb-2">Services</span>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/social-media-management" className="hover:text-hotpink transition-colors">Social Media Management</Link>
              <Link href="/services/website-development" className="hover:text-hotpink transition-colors">Website Development</Link>
              <Link href="/services/digital-marketing" className="hover:text-hotpink transition-colors">Digital Marketing</Link>
              <Link href="/services/video-editing" className="hover:text-hotpink transition-colors">Video Editing</Link>
              <Link href="/services/ai-automation" className="hover:text-hotpink transition-colors">AI Automation</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-3 text-sm font-bold">
          <a href="mailto:tejas@orindle.com" className="hover:text-hotpink transition-colors border-2 border-black rounded-full px-6 py-2 bg-white hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#000]">tejas@orindle.com</a>
          <span className="text-black/50 mt-4">© 2026 ORINDLE. All rights reserved.</span>
          <div className="flex gap-4 mt-2">
            <Link href="/privacy-policy" className="hover:text-hotpink transition-colors text-xs text-black/50">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-hotpink transition-colors text-xs text-black/50">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
