import React, { useState, useMemo } from 'react';
import { Plus, Check, X } from 'lucide-react';
import { BOWL_BUILDER_OPTIONS } from '../data/foodData';

const STEPS = [
  { id: 'base', title: 'Base', options: BOWL_BUILDER_OPTIONS.bases },
  { id: 'protein', title: 'Protein', options: BOWL_BUILDER_OPTIONS.proteins },
  { id: 'veggies', title: 'Greens & Veggies', options: BOWL_BUILDER_OPTIONS.veggies },
  { id: 'sauce', title: 'Sauce', options: BOWL_BUILDER_OPTIONS.sauces },
  { id: 'crunch', title: 'Crunch', options: BOWL_BUILDER_OPTIONS.crunch },
];

export default function BowlBuilder({ onAddToCart, isOpen, onClose }) {
  const [bowlName, setBowlName] = useState('My Signature Bowl');
  const [selections, setSelections] = useState({});

  const handleSelect = (stepId, option) => {
    setSelections(prev => ({
      ...prev,
      [stepId]: option
    }));
  };

  const totals = useMemo(() => {
    const selectedOptions = Object.values(selections);
    return selectedOptions.reduce((acc, opt) => ({
      calories: acc.calories + (opt.calories || 0),
      protein: acc.protein + (opt.protein || 0),
      carbs: acc.carbs + (opt.carbs || 0),
      fat: acc.fat + (opt.fat || 0),
      price: acc.price + (opt.price || 0)
    }), { calories: 0, protein: 0, carbs: 0, fat: 0, price: 0 });
  }, [selections]);

  const basePrice = 12.00;

  if (!isOpen) return null;

  return (
    <div className="modal-overlay flex items-center justify-center fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="glass-panel w-full max-w-4xl p-8 lg:p-10 relative mt-auto mb-auto">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-[#8a9b91] hover:text-white transition-colors duration-500">
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-10 text-center space-y-2">
          <h2 className="font-serif text-4xl lg:text-5xl text-white">
            <span className="mr-3">🥗</span>Build Your Bowl
          </h2>
          <p className="text-[#8a9b91] text-lg">Select fresh, organic ingredients for your perfect meal</p>
        </div>

        {/* Bowl Name Input */}
        <div className="mb-10 max-w-sm mx-auto">
          <input 
            type="text" 
            value={bowlName}
            onChange={(e) => setBowlName(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center text-white focus:outline-none focus:border-[#22c55e] transition-all duration-500 font-serif text-xl"
            placeholder="Name your bowl..."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Steps (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-12">
            {STEPS.map((step, index) => (
              <div key={step.id} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="uppercase tracking-widest text-sm text-[#8a9b91] font-semibold">
                    Choose Your {step.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.options.map(option => {
                    const isSelected = selections[step.id]?.id === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(step.id, option)}
                        className={`flex items-center p-4 rounded-2xl border transition-all duration-500 text-left ${
                          isSelected 
                            ? 'border-[#22c55e] bg-[#22c55e]/5' 
                            : 'border-white/5 hover:border-white/20 bg-black/20'
                        }`}
                      >
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">{option.name}</p>
                          <p className="text-[#8a9b91] text-xs mt-1">
                            {option.calories} cal • {option.protein}g protein
                            {option.price > 0 && ` • +$${option.price.toFixed(2)}`}
                          </p>
                        </div>
                        {isSelected ? (
                          <Check className="w-5 h-5 text-[#22c55e] ml-3" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#8a9b91] ml-3" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Live Macros (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 glass-panel bg-[#0a1a12] p-8 space-y-8 rounded-3xl border border-white/5">
              <div className="text-center">
                <h4 className="font-serif text-2xl text-white mb-4">Nutrition</h4>
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-[#22c55e]/30">
                  <div className="text-center">
                    <span className="block text-3xl font-serif text-white">{totals.calories}</span>
                    <span className="text-xs text-[#8a9b91] uppercase tracking-wider">kcal</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#8a9b91]">Protein</span>
                    <span className="text-white">{totals.protein}g</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#22c55e] transition-all duration-500" style={{ width: `${Math.min((totals.protein / 60) * 100, 100)}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#8a9b91]">Carbs</span>
                    <span className="text-white">{totals.carbs}g</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#eab308] transition-all duration-500" style={{ width: `${Math.min((totals.carbs / 80) * 100, 100)}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#8a9b91]">Fat</span>
                    <span className="text-white">{totals.fat}g</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${Math.min((totals.fat / 40) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                <div>
                  <p className="text-sm text-[#8a9b91]">Total Price</p>
                  <p className="font-serif text-3xl text-white">${(basePrice + totals.price).toFixed(2)}</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  const customBowl = {
                    id: `custom-bowl-${Date.now()}`,
                    name: bowlName || 'Custom Pure Bowl',
                    price: basePrice + totals.price,
                    image: '/assets/avocado_power_bowl.png',
                    macros: { calories: totals.calories, protein: totals.protein, carbs: totals.carbs, fats: totals.fat },
                    dietary: ['Custom', 'Organic'],
                    description: Object.values(selections).map(s => s.name).join(' • '),
                  };
                  onAddToCart(customBowl);
                  onClose();
                }}
                className="w-full bg-[#22c55e] text-[#060d09] py-4 rounded-xl font-bold flex items-center justify-center hover:bg-[#22c55e]/90 transition-all duration-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
