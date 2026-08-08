import React from 'react';
import { MapPin, ShieldCheck, Star, Quote } from 'lucide-react';
import { FARM_PARTNERS } from '../data/foodData';

const REVIEWS = [
  {
    id: 1,
    text: "The quality of the ingredients is immediately apparent. These meals have transformed my work-week lunches from a chore to a culinary experience.",
    author: "Elena Rodriguez",
    role: "Fitness Instructor",
    rating: 5
  },
  {
    id: 2,
    text: "Knowing exactly which farm my food comes from gives me peace of mind. The transparent sourcing and incredible taste are unmatched.",
    author: "Marcus Chen",
    role: "Wellness Advocate",
    rating: 5
  },
  {
    id: 3,
    text: "Pure Bites has mastered the balance of macros without sacrificing flavor. The locally sourced produce makes all the difference.",
    author: "Sarah Jenkins",
    role: "Marathon Runner",
    rating: 5
  }
];

const FarmTraceability = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Farm Sourcing Sub-section */}
      <div>
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a9b91]">Transparent Origins</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">Our Farm Partners</h2>
          <div className="w-12 h-[2px] bg-[#22c55e] opacity-60"></div>
          <p className="text-[#8a9b91] max-w-2xl mx-auto leading-relaxed">
            We partner exclusively with sustainable, organic farms within a 100-mile radius 
            to ensure peak freshness and nutrient density in every meal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FARM_PARTNERS.map((farm, index) => (
            <div key={index} className="glass-card p-7 rounded-2xl flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <ShieldCheck size={80} />
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-6 border border-[#22c55e]/20">
                <MapPin size={24} />
              </div>
              
              <h3 className="text-xl font-serif text-white mb-2">{farm.name}</h3>
              <p className="text-[#8a9b91] text-sm mb-6 flex items-center gap-2">
                <MapPin size={14} />
                {farm.location}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <span className="text-xs uppercase tracking-wider text-[#8a9b91] block mb-2">Specialty</span>
                <span className="text-white text-sm">{farm.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Sub-section */}
      <div>
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a9b91]">Community</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">Client Experiences</h2>
          <div className="w-12 h-[2px] bg-[#22c55e] opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map(review => (
            <div key={review.id} className="glass-card p-7 rounded-2xl flex flex-col relative">
              <div className="absolute top-7 right-7 text-[#22c55e]/20">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 text-[#eab308] mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-[#8a9b91] italic leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-serif">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">{review.author}</h4>
                  <p className="text-[#8a9b91] text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmTraceability;
