import React, { useState } from 'react';
import { Leaf, Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenBuilder, onOpenCalculator, searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#060d09] border-b border-white/5 py-5 px-8">
      <div className="container-custom mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Leaf className="text-emerald-500 w-6 h-6" />
          <span className="font-serif text-2xl font-bold tracking-wide text-white">Pure Bites</span>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex items-center w-full max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9b91]" />
          <input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-[#8a9b91] focus:outline-none focus:border-emerald-500/50 transition-all duration-500"
          />
        </div>

        {/* Right: Links & Cart */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={onOpenBuilder} className="text-[#8a9b91] hover:text-white transition-all duration-500">
            Build Bowl
          </button>
          <button onClick={onOpenCalculator} className="text-[#8a9b91] hover:text-white transition-all duration-500">
            Nutrition
          </button>
          <button onClick={onOpenCart} className="relative flex items-center gap-2 text-white hover:text-emerald-400 transition-all duration-500">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#060d09] border-b border-white/5 p-8 flex flex-col gap-6 shadow-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9b91]" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50"
            />
          </div>
          <button onClick={() => { onOpenBuilder(); setMobileMenuOpen(false); }} className="text-left text-[#8a9b91] text-lg">Build Bowl</button>
          <button onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }} className="text-left text-[#8a9b91] text-lg">Nutrition</button>
          <button onClick={() => { onOpenCart(); setMobileMenuOpen(false); }} className="text-left flex items-center gap-3 text-white text-lg">
            Cart ({cartCount})
          </button>
        </div>
      )}
    </nav>
  );
}
