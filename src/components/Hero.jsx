import React from 'react';
import { Star } from 'lucide-react';

export default function Hero({ onOpenBuilder, onExploreMenu }) {
  return (
    <section className="py-32 overflow-hidden relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content (7 columns) */}
          <div className="lg:col-span-7 space-y-10 max-w-2xl">
            <div className="inline-block bg-[#f0f9f0] text-[#22c55e] px-4 py-2 rounded-full shadow-lg">
              <p className="text-[10px] uppercase tracking-widest font-bold">
                100% Organic Farm-to-Table
              </p>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white leading-[1.2]">
              Pure Clean<br />
              Eating. <span className="gradient-text">Artisanal Flavor.</span>
            </h1>
            
            <p className="text-[#8a9b91] text-lg max-w-lg leading-loose">
              Experience the perfect harmony of nature's finest ingredients, 
              expertly crafted into meals that nourish your body and elevate 
              your everyday dining experience. No compromises.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <button 
                onClick={onOpenBuilder} 
                className="bg-white text-[#060d09] px-8 py-4 rounded-full font-bold text-sm shadow-xl hover:bg-gray-100 transition-all duration-300"
              >
                Build Your Bowl
              </button>
              <button 
                onClick={onExploreMenu} 
                className="btn-secondary px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                Explore Menu
              </button>
            </div>
          </div>

          {/* Right Image (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Fresh organic salad bowl" 
                className="w-full h-[640px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d09]/80 to-transparent"></div>
            </div>

            {/* Floating Rating Badge */}
            <div className="glass-card absolute left-4 lg:-left-6 top-12 p-4 rounded-2xl flex items-center gap-4 animate-float border border-white/5 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Star className="text-emerald-500 w-6 h-6 fill-emerald-500" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">4.9/5</p>
                <p className="text-xs text-[#8a9b91]">2k+ Reviews</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
