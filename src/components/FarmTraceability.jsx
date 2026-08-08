import React from 'react';
import { FARM_PARTNERS } from '../data/foodData';
import { MapPin, ShieldCheck, Leaf, Globe, Star, Quote } from 'lucide-react';

export default function FarmTraceability() {
  const reviews = [
    {
      id: 1,
      author: 'Dr. Elena Rostova',
      role: 'Clinical Nutritionist & Author',
      avatar: '👩‍⚕️',
      text: 'Pure Bites has completely redefined organic meal delivery. Every ingredient tastes vibrant and freshly harvested. The macro accuracy is top-tier!',
      rating: 5
    },
    {
      id: 2,
      author: 'Marcus Vance',
      role: 'CrossFit Athlete & Coach',
      avatar: '🏋️‍♂️',
      text: 'The Wild Salmon Power Bowl and custom bowl builder are my daily staples. 38g of clean protein without seed oils or hidden sugars!',
      rating: 5
    },
    {
      id: 3,
      author: 'Sophia Chen',
      role: 'Wellness Blogger',
      avatar: '🌿',
      text: 'The ceremonial Uji matcha latte and dragon fruit bowl are works of art. Super fast 30-min eco delivery too!',
      rating: 5
    }
  ];

  return (
    <section id="farm-sourcing" className="py-16 relative overflow-hidden">
      <div className="container-custom relative z-10 space-y-16">
        
        {/* Farm Sourcing Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full">
            100% Ingredient Traceability
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Rooted in Local Farm Sourcing
          </h2>
          <p className="text-gray-300 text-sm">
            We partner exclusively with certified regenerative organic farms within 50 miles of our artisanal kitchens.
          </p>
        </div>

        {/* Farm Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FARM_PARTNERS.map((farm, idx) => (
            <div key={idx} className="glass-card p-6 border-emerald-500/30 bg-gray-950/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{farm.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {farm.distance}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-white">{farm.name}</h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {farm.location}
                  </p>
                </div>

                <p className="text-xs text-gray-300 border-t border-gray-800 pt-3">
                  <strong>Harvest Specialty:</strong> {farm.specialty}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{farm.certified}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="pt-10 border-t border-gray-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              Community Love
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-3">
              Trusted by 15,000+ Clean Eaters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(rev => (
              <div key={rev.id} className="glass-panel p-6 border-gray-800 bg-gray-900/60 relative flex flex-col justify-between">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-500/10 pointer-events-none" />

                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-300 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80 mt-4">
                  <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-lg">
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                    <p className="text-[10px] text-emerald-400 font-medium">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
