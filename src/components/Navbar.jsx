import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, Utensils, HeartPulse, MapPin, Menu, X, Leaf } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenBuilder, onOpenCalculator, searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav className="glass-panel mx-auto my-3 max-w-7xl px-4 py-3 sm:px-6 lg:px-8 border border-[var(--border-glass)]">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 text-decoration-none group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Pure Bites
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  ORGANIC
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium hidden sm:block">Farm-to-Table Gourmet</p>
            </div>
          </a>

          {/* Search Input Bar */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
            <input
              type="text"
              placeholder="Search organic salmon, acai bowls, matcha..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-full pl-10 pr-4 py-2 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs bg-gray-800 rounded-full w-4 h-4 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Desktop Navigation Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onOpenBuilder}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer"
            >
              <Utensils className="w-3.5 h-3.5 text-emerald-400" />
              Build Your Bowl
            </button>

            <button 
              onClick={onOpenCalculator}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all cursor-pointer"
            >
              <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
              Macro Quiz
            </button>

            <a 
              href="#farm-sourcing" 
              className="text-xs font-medium text-gray-300 hover:text-white px-3 py-2 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Origins
            </a>
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative btn-primary px-4 py-2 text-sm"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-bold">Cart</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-amber-400 text-gray-950 font-extrabold text-xs px-2 py-0.5 rounded-full shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-900/60 text-gray-300 border border-gray-800 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu expanded drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-[var(--border-glass)] mt-3 flex flex-col gap-3 animate-fade-in">
            <div className="relative w-full mb-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-xl pl-10 pr-4 py-2 text-sm text-gray-100"
              />
            </div>
            <button 
              onClick={() => { onOpenBuilder(); setMobileMenuOpen(false); }}
              className="flex items-center justify-between w-full p-3 rounded-xl bg-emerald-500/10 text-emerald-300 text-sm font-semibold border border-emerald-500/30"
            >
              <span className="flex items-center gap-2">
                <Utensils className="w-4 h-4" /> Custom Bowl Studio
              </span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </button>
            <button 
              onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
              className="flex items-center justify-between w-full p-3 rounded-xl bg-amber-500/10 text-amber-300 text-sm font-semibold border border-amber-500/30"
            >
              <span className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4" /> Wellness Macro Calculator
              </span>
              <span>⚡</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
