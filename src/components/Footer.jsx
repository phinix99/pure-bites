import React, { useState } from 'react';
import { Leaf, Send, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBuilder, onOpenCalculator }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-[var(--border-glass)] pt-16 pb-12 relative overflow-hidden">
      <div className="container-custom relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-gray-950 shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">Pure Bites</span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              100% Certified Organic Farm-to-Table Dining & Express Meal Delivery. Crafted daily with zero refined sugars, zero seed oils, and absolute nutrient transparency.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <label className="text-[11px] font-bold text-gray-300 uppercase block mb-1.5">Get $10 Off Your First Order</label>
              <div className="flex max-w-xs gap-2">
                <input 
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button type="submit" className="btn-primary text-xs px-3.5 py-2">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 font-semibold mt-1.5">
                  ✓ Welcome to the Pure Bites family! Check your inbox for $10 voucher.
                </p>
              )}
            </form>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Explore Menu</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#menu-section" className="hover:text-emerald-400 transition-colors">Chef's Power Bowls</a></li>
              <li><a href="#menu-section" className="hover:text-emerald-400 transition-colors">Cold-Pressed Juices</a></li>
              <li><a href="#menu-section" className="hover:text-emerald-400 transition-colors">Artisanal Wraps</a></li>
              <li><a href="#menu-section" className="hover:text-emerald-400 transition-colors">Superfood Energy Bites</a></li>
            </ul>
          </div>

          {/* Col 3: Interactive Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Wellness Tools</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={onOpenBuilder} className="hover:text-emerald-400 transition-colors text-left">
                  Custom Bowl Studio
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-amber-400 transition-colors text-left">
                  Macro Goal Quiz
                </button>
              </li>
              <li><a href="#farm-sourcing" className="hover:text-emerald-400 transition-colors">Local Farm Directory</a></li>
            </ul>
          </div>

          {/* Col 4: Sustainability & Certs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sustainability</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> USDA 100% Organic</li>
              <li className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-emerald-400" /> Zero Plastic Packaging</li>
              <li className="flex items-center gap-1.5">⚡ 100% Carbon Neutral Delivery</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Pure Bites Inc. All rights reserved. Crafted with care for clean living.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 text-emerald-400 hover:underline font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
