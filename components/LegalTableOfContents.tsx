'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TOCIitem {
  id: string;
  title: string;
}

export default function LegalTableOfContents({ items }: { items: TOCIitem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile / Tablet Collapsible */}
      <div className="lg:hidden mb-8">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center bg-white border-2 border-black rounded-xl p-4 font-bold uppercase tracking-wide text-sm"
        >
          <span>Table of Contents</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <div className="mt-2 bg-white border-2 border-black rounded-xl p-4 flex flex-col gap-3">
            {items.map((item, index) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-black/70 hover:text-hotpink text-sm font-medium transition-colors"
              >
                {index + 1}. {item.title}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky */}
      <div className="hidden lg:block sticky top-32 w-64 flex-shrink-0">
        <div className="bg-cream border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0_0_#000]">
          <h3 className="font-display font-black text-lg uppercase tracking-wide mb-4">Contents</h3>
          <nav className="flex flex-col gap-3">
            {items.map((item, index) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-black/70 hover:text-hotpink hover:translate-x-1 transition-all text-sm font-bold"
              >
                {index + 1}. {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
