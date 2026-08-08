import React, { useState } from 'react';
import { Flame, Sparkles, X } from 'lucide-react';

export default function NutritionCalculator({ isOpen, onClose, onAddToCart, onOpenBuilder }) {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState('female');
  const [goal, setGoal] = useState('maintain');

  if (!isOpen) return null;

  // Dummy logic for macro calculation based on inputs
  const calories = goal === 'lose' ? 1800 : goal === 'gain' ? 2800 : 2200;
  const protein = Math.round(weight * 2);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);

  return (
    <div className="modal-overlay flex items-center justify-center fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl p-8 lg:p-10 relative my-8 border border-white/5 rounded-[2rem]">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-[#8a9b91] hover:text-white transition-colors duration-500">
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-12 text-center space-y-3">
          <h2 className="font-serif text-4xl lg:text-5xl text-white">
            <span className="mr-3">✨</span>Macro Blueprint
          </h2>
          <p className="text-[#8a9b91] text-lg max-w-md mx-auto">
            Dial in your metrics to generate the perfect personalized nutrition protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Inputs */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-[#8a9b91] uppercase tracking-widest text-xs font-semibold mb-4">Biological Data</h3>
              
              <div className="flex p-1 bg-black/40 rounded-xl border border-white/5">
                <button 
                  onClick={() => setGender('female')}
                  className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-500 ${gender === 'female' ? 'bg-[#22c55e] text-[#060d09]' : 'text-[#8a9b91] hover:text-white'}`}
                >
                  Female
                </button>
                <button 
                  onClick={() => setGender('male')}
                  className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-500 ${gender === 'male' ? 'bg-[#22c55e] text-[#060d09]' : 'text-[#8a9b91] hover:text-white'}`}
                >
                  Male
                </button>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-[#8a9b91]">Age</span>
                  <span className="text-white font-serif">{age} yrs</span>
                </div>
                <input 
                  type="range" min="16" max="99" value={age} 
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full accent-[#22c55e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-[#8a9b91]">Weight</span>
                  <span className="text-white font-serif">{weight} kg</span>
                </div>
                <input 
                  type="range" min="40" max="150" value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full accent-[#22c55e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#8a9b91] uppercase tracking-widest text-xs font-semibold mb-4">Objective</h3>
              <div className="grid grid-cols-3 gap-3">
                {['lose', 'maintain', 'gain'].map(g => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`py-3 text-xs font-medium uppercase tracking-wider rounded-xl border transition-all duration-500 ${
                      goal === g 
                        ? 'border-[#22c55e] bg-[#22c55e]/10 text-[#22c55e]' 
                        : 'border-white/5 bg-black/20 text-[#8a9b91] hover:border-white/20'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Results Card */}
          <div className="flex flex-col h-full">
            <div className="glass-panel bg-[#0a1a12] p-8 rounded-3xl border border-white/5 flex-1 flex flex-col justify-between">
              
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#22c55e]/10 text-[#22c55e] mb-4">
                  <Flame className="w-8 h-8" />
                </div>
                <p className="text-[#8a9b91] uppercase tracking-widest text-xs font-semibold">Daily Target</p>
                <p className="font-serif text-6xl text-white">{calories}</p>
                <p className="text-[#8a9b91] text-sm">kcal</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-black/40 p-4 rounded-2xl text-center border border-white/5">
                  <p className="text-[#22c55e] font-medium text-lg">{protein}g</p>
                  <p className="text-[#8a9b91] text-xs uppercase tracking-wider mt-1">Protein</p>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl text-center border border-white/5">
                  <p className="text-[#eab308] font-medium text-lg">{carbs}g</p>
                  <p className="text-[#8a9b91] text-xs uppercase tracking-wider mt-1">Carbs</p>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl text-center border border-white/5">
                  <p className="text-teal-400 font-medium text-lg">{fat}g</p>
                  <p className="text-[#8a9b91] text-xs uppercase tracking-wider mt-1">Fat</p>
                </div>
              </div>

              <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 p-5 rounded-2xl">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Recommended Approach</p>
                    <p className="text-[#8a9b91] text-xs leading-relaxed">
                      Based on your metrics, a high-protein bowl with quinoa and double greens will hit these targets perfectly.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            
            <button 
              onClick={() => {
                onClose();
                if (onOpenBuilder) onOpenBuilder();
              }}
              className="mt-6 btn-primary w-full py-4 rounded-xl flex items-center justify-center font-medium bg-[#22c55e] text-[#060d09] hover:bg-[#22c55e]/90 transition-all duration-500"
            >
              Build Your Custom Bowl
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
