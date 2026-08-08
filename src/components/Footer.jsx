import React from 'react';
import { Leaf, Send, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBuilder, onOpenCalculator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060d09] border-t border-white/5 py-20 text-[#8a9b91]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Leaf className="text-emerald-500 w-6 h-6" />
              <span className="font-serif text-2xl font-bold tracking-wide text-white">Pure Bites</span>
            </div>
            
            <p className="max-w-md leading-relaxed text-sm">
              Elevating the standard of clean eating. We source the finest organic ingredients 
              to craft meals that respect both your body and the planet.
            </p>

            <div className="max-w-md relative mt-4">
              <input 
                type="email" 
                placeholder="Subscribe for updates" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-6 pr-12 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all duration-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-white transition-all duration-500">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end text-sm">
            <div className="space-y-4">
              <h4 className="text-white font-semibold mb-6">Menu</h4>
              <ul className="space-y-4">
                <li><button onClick={onOpenBuilder} className="hover:text-emerald-400 transition-colors">Build a Bowl</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Signature Salads</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Warm Bowls</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Beverages</button></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><button className="hover:text-emerald-400 transition-colors">Our Story</button></li>
                <li><button onClick={onOpenCalculator} className="hover:text-emerald-400 transition-colors">Nutrition</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Sustainability</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Pure Bites. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
