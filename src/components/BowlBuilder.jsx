import React, { useState } from 'react';
import { BOWL_BUILDER_OPTIONS } from '../data/foodData';
import { Sparkles, Utensils, Flame, Plus, Check, RefreshCw } from 'lucide-react';

export default function BowlBuilder({ onAddToCart, isOpen, onClose }) {
  const [bowlName, setBowlName] = useState('My Custom Power Bowl');
  const [selectedBase, setSelectedBase] = useState(BOWL_BUILDER_OPTIONS.bases[0]);
  const [selectedProtein, setSelectedProtein] = useState(BOWL_BUILDER_OPTIONS.proteins[0]);
  const [selectedVeggies, setSelectedVeggies] = useState([BOWL_BUILDER_OPTIONS.veggies[0]]);
  const [selectedSauce, setSelectedSauce] = useState(BOWL_BUILDER_OPTIONS.sauces[0]);
  const [selectedCrunch, setSelectedCrunch] = useState([BOWL_BUILDER_OPTIONS.crunch[0]]);

  const toggleVeggie = (v) => {
    if (selectedVeggies.some(item => item.id === v.id)) {
      if (selectedVeggies.length > 1) {
        setSelectedVeggies(selectedVeggies.filter(item => item.id !== v.id));
      }
    } else {
      setSelectedVeggies([...selectedVeggies, v]);
    }
  };

  const toggleCrunch = (c) => {
    if (selectedCrunch.some(item => item.id === c.id)) {
      if (selectedCrunch.length > 1) {
        setSelectedCrunch(selectedCrunch.filter(item => item.id !== c.id));
      }
    } else {
      setSelectedCrunch([...selectedCrunch, c]);
    }
  };

  // Calculate live macros
  const totalCalories = selectedBase.calories + selectedProtein.calories +
    selectedVeggies.reduce((sum, v) => sum + v.calories, 0) +
    selectedSauce.calories +
    selectedCrunch.reduce((sum, c) => sum + c.calories, 0);

  const totalProtein = selectedBase.protein + selectedProtein.protein +
    selectedVeggies.reduce((sum, v) => sum + v.protein, 0) +
    selectedSauce.protein +
    selectedCrunch.reduce((sum, c) => sum + c.protein, 0);

  const totalCarbs = selectedBase.carbs + selectedProtein.carbs +
    selectedVeggies.reduce((sum, v) => sum + v.carbs, 0) +
    selectedSauce.carbs +
    selectedCrunch.reduce((sum, c) => sum + c.carbs, 0);

  const totalFat = Math.round(selectedBase.fat + selectedProtein.fat +
    selectedVeggies.reduce((sum, v) => sum + v.fat, 0) +
    selectedSauce.fat +
    selectedCrunch.reduce((sum, c) => sum + c.fat, 0));

  const basePrice = 12.00;
  const totalPrice = basePrice + selectedBase.price + selectedProtein.price +
    selectedVeggies.reduce((sum, v) => sum + v.price, 0) +
    selectedSauce.price +
    selectedCrunch.reduce((sum, c) => sum + c.price, 0);

  const handleAddCustomBowl = () => {
    const customBowlItem = {
      id: `custom-bowl-${Date.now()}`,
      name: bowlName || 'Custom Pure Bowl',
      category: 'bowls',
      price: totalPrice,
      rating: 5.0,
      reviews: 1,
      image: '/assets/avocado_power_bowl.png',
      calories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fat: totalFat,
      tags: ['custom', 'organic', 'fresh'],
      badge: 'Custom Chef Creation ✨',
      description: `Bases: ${selectedBase.name} • Protein: ${selectedProtein.name} • Veggies: ${selectedVeggies.map(v => v.name).join(', ')} • Sauce: ${selectedSauce.name}`,
      ingredients: [selectedBase.name, selectedProtein.name, ...selectedVeggies.map(v => v.name), selectedSauce.name, ...selectedCrunch.map(c => c.name)]
    };

    onAddToCart(customBowlItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay z-50 overflow-y-auto py-10" onClick={onClose}>
      <div 
        className="glass-panel max-w-4xl w-full p-6 sm:p-8 relative my-auto animate-fade-in border-emerald-500/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white bg-gray-900/80 w-8 h-8 rounded-full flex items-center justify-center border border-gray-800"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xl">
            🥣
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              Custom Bowl Studio <span className="text-emerald-400 text-xs font-bold bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/40">LIVE MACRO CALCULATOR</span>
            </h2>
            <p className="text-xs text-gray-300">Design your personalized superfood bowl with real-time nutrient tracking.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Ingredient Selection Steps */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bowl Name Input */}
            <div>
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">Name Your Creation</label>
              <input 
                type="text"
                value={bowlName}
                onChange={(e) => setBowlName(e.target.value)}
                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Step 1: Base */}
            <div>
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px]">1</span>
                Select Organic Base
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {BOWL_BUILDER_OPTIONS.bases.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBase(b)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedBase.id === b.id
                        ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-md shadow-emerald-950/50'
                        : 'bg-gray-950/50 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>{b.name}</span>
                      {selectedBase.id === b.id && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">{b.calories} Cals • {b.protein}g Protein</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Clean Protein */}
            <div>
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">2</span>
                Choose Clean Protein
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {BOWL_BUILDER_OPTIONS.proteins.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProtein(p)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedProtein.id === p.id
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-md shadow-amber-950/50'
                        : 'bg-gray-950/50 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>{p.name}</span>
                      {selectedProtein.id === p.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">+{p.protein}g Protein • +${p.price.toFixed(2)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Fresh Greens & Veggies */}
            <div>
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center text-[10px]">3</span>
                Add Veggies & Greens (Multi-Select)
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {BOWL_BUILDER_OPTIONS.veggies.map(v => {
                  const isSelected = selectedVeggies.some(item => item.id === v.id);
                  return (
                    <button
                      key={v.id}
                      onClick={() => toggleVeggie(v)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-500/20 border-teal-500 text-white'
                          : 'bg-gray-950/50 border-gray-800 text-gray-300 hover:border-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span>{v.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-teal-400" />}
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1">{v.calories} Cals • +${v.price.toFixed(2)}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Sauce */}
            <div>
              <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px]">4</span>
                Select House Sauce
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {BOWL_BUILDER_OPTIONS.sauces.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSauce(s)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSauce.id === s.id
                        ? 'bg-purple-500/20 border-purple-500 text-white'
                        : 'bg-gray-950/50 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>{s.name}</span>
                      {selectedSauce.id === s.id && <Check className="w-4 h-4 text-purple-400" />}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">{s.calories} Cals • +${s.price.toFixed(2)}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Real-time Live Macro Visualizer Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-4 glass-panel p-5 border-emerald-500/40 space-y-5 bg-gray-950/90">
              
              <div className="text-center pb-3 border-b border-gray-800">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Live Nutritional Profile</span>
                <h4 className="font-serif text-lg font-bold text-white mt-1">{bowlName}</h4>
              </div>

              {/* Total Calorie Ring Card */}
              <div className="bg-gradient-to-br from-emerald-950/80 to-teal-950/80 p-4 rounded-2xl border border-emerald-500/30 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-emerald-500 bg-gray-950 shadow-lg shadow-emerald-500/20 mb-2">
                  <div>
                    <span className="text-xl font-extrabold text-white leading-none block">{totalCalories}</span>
                    <span className="text-[9px] text-emerald-400 uppercase font-bold">Cals</span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 font-medium">Estimated Energy Target</p>
              </div>

              {/* Macro Bar breakdown */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-emerald-400">Protein</span>
                    <span className="text-white">{totalProtein}g</span>
                  </div>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full transition-all duration-300" style={{ width: `${Math.min(100, (totalProtein / 60) * 100)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400">Carbohydrates</span>
                    <span className="text-white">{totalCarbs}g</span>
                  </div>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full transition-all duration-300" style={{ width: `${Math.min(100, (totalCarbs / 80) * 100)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-teal-400">Healthy Fats</span>
                    <span className="text-white">{totalFat}g</span>
                  </div>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${Math.min(100, (totalFat / 50) * 100)}%` }} />
                  </div>
                </div>
              </div>

              {/* Price & Add to Cart button */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-xs text-gray-400 uppercase font-bold">Total Price</span>
                  <span className="text-2xl font-extrabold font-serif text-white">${totalPrice.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleAddCustomBowl}
                  className="btn-primary w-full justify-center py-3 text-sm shadow-xl cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add Custom Bowl to Bag
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
