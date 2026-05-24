'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const services = [
  { name: 'Social Media Management', href: '/services/social-media-management' },
  { name: 'Website Development', href: '/services/website-development' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Video Editing', href: '/services/video-editing' },
  { name: 'AI Automation', href: '/services/ai-automation' },
];

export default function Header({ theme = "cream" }: { theme?: "cream" | "white" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const bgClasses = {
    cream: "bg-cream/90",
    white: "bg-white/90"
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full px-4 py-4 md:px-8 backdrop-blur-md border-b-[3px] border-black text-black ${bgClasses[theme]}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-[60]">
          <Link href="/" className="font-display font-black text-2xl tracking-tighter">
          ORINDLE<span className="text-hotpink">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 font-medium">
          <Link href="/" className="hover:text-hotpink transition-colors">Home</Link>
          <div 
            className="relative group cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span className="hover:text-hotpink transition-colors flex items-center gap-1">
              Services <ChevronDown size={16} className={`transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
            </span>
            {showServices && (
              <div className="absolute top-full left-0 pt-4 w-64 blur-none">
                <div className={`${theme === 'white' ? 'bg-white' : 'bg-cream'} border-[3px] border-black rounded-xl shadow-[6px_6px_0_0_#000] overflow-hidden flex flex-col p-2`}>
                  {services.map((s) => (
                    <Link 
                      key={s.name} 
                      href={s.href}
                      className="px-4 py-2 hover:bg-lime hover:font-bold rounded-lg transition-colors text-sm"
                      onClick={() => setShowServices(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/#work" className="hover:text-hotpink transition-colors">Work</Link>
          <Link href="/#process" className="hover:text-hotpink transition-colors">Process</Link>
          <Link href="/#pricing" className="hover:text-hotpink transition-colors">Pricing</Link>
          <Link href="/#faq" className="hover:text-hotpink transition-colors">FAQ</Link>
          <Link href="https://wa.me/919021923579" target="_blank" className="hover:text-hotpink transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="https://wa.me/919021923579" target="_blank" className="inline-flex items-center justify-center bg-black text-white px-6 py-2.5 rounded-full font-bold hover:bg-hotpink transition-all border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]">
            Start →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto ${theme === 'white' ? 'bg-white' : 'bg-cream'} border-b-[3px] border-black flex flex-col py-8 px-6 gap-6 font-display text-xl text-black`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          
          <div className="flex flex-col gap-4">
            <div className="font-bold text-black/50 text-sm">SERVICES</div>
            {services.map((s) => (
              <Link 
                key={s.name} 
                href={s.href}
                className="pl-4 border-l-[3px] border-black/10 hover:border-hotpink hover:text-hotpink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </div>

          <Link href="/#work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="/#process" onClick={() => setIsOpen(false)}>Process</Link>
          <Link href="/#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/#faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="https://wa.me/919021923579" target="_blank" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <Link href="https://wa.me/919021923579" target="_blank" className="mt-4 bg-lime text-center border-[3px] border-black px-8 py-3 rounded-full font-bold">Start →</Link>
        </div>
      )}
    </header>
    <div className="h-[73px] md:h-[81px] w-full shrink-0" />
    </>
  );
}
