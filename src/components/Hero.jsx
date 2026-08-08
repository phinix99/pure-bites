import React from 'react';
import { Sparkles, Utensils, Award, ShieldCheck, Flame, ArrowRight, Star } from 'lucide-react';

export default function Hero({ onOpenBuilder, onExploreMenu }) {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>100% Certified Organic Farm-to-Table</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] text-white">
              Pure Clean Eating, <br />
              <span className="gradient-text">10x Artisanal Flavor.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Elevate your daily nutrition with chef-crafted power bowls, cold-pressed elixirs, and customizable superfood meals. Zero refined sugars, zero seed oils — just pure, organic nourishment.
            </p>

            {/* CTA Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenBuilder}
                className="btn-primary text-base px-7 py-3.5 shadow-lg shadow-emerald-600/30 group cursor-pointer"
              >
                <Utensils className="w-5 h-5 text-emerald-950 group-hover:rotate-12 transition-transform" />
                <span>Build Custom Bowl</span>
                <ArrowRight className="w-4 h-4 text-emerald-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={onExploreMenu}
                className="btn-secondary text-base px-6 py-3.5 border-emerald-500/30 text-emerald-200 hover:border-emerald-500/60"
              >
                <span>Explore Organic Menu</span>
              </button>
            </div>

            {/* Key trust highlights */}
            <div className="pt-6 border-t border-gray-800/80 grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">100% Non-GMO</p>
                  <p className="text-[11px] text-gray-400">USDA Certified</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Zero Seed Oils</p>
                  <p className="text-[11px] text-gray-400">Cold Pressed EVOO</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Express Delivery</p>
                  <p className="text-[11px] text-gray-400">Hot & Fresh 30m</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer glowing border card */}
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-emerald-500/30 via-transparent to-amber-500/20 shadow-2xl">
                <img 
                  src="/assets/hero_pure_bites.png" 
                  alt="Pure Bites Gourmet Organic Spread" 
                  className="w-full h-[440px] object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Rating Badge */}
                <div className="absolute top-6 right-6 glass-panel px-4 py-2.5 flex items-center gap-2 border border-emerald-500/40 shadow-xl animate-float">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">4.98 / 5.0</span>
                </div>

                {/* Floating Daily Delivery Stat */}
                <div className="absolute bottom-6 left-6 glass-panel p-4 flex items-center gap-3 border border-emerald-500/40 shadow-2xl">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-gray-950 text-lg shadow-md">
                    🌱
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Daily Fresh Harvest</p>
                    <p className="text-sm font-bold text-white">15,400+ Meals Served</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
