import React, { useState } from 'react';
import { HeartPulse, Flame, Target, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NutritionCalculator({ isOpen, onClose, onAddToCart, onOpenBuilder }) {
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(68); // kg
  const [height, setHeight] = useState(175); // cm
  const [gender, setGender] = useState('female');
  const [goal, setGoal] = useState('lean'); // 'lean', 'maintain', 'muscle'
  const [activity, setActivity] = useState(1.375); // moderate

  if (!isOpen) return null;

  // Mifflin-St Jeor Equation
  let bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
  let tdee = Math.round(bmr * activity);

  let targetCals = tdee;
  if (goal === 'lean') targetCals = Math.round(tdee * 0.82);
  if (goal === 'muscle') targetCals = Math.round(tdee * 1.15);

  let targetProtein = Math.round((targetCals * 0.30) / 4);
  let targetCarbs = Math.round((targetCals * 0.40) / 4);
  let targetFat = Math.round((targetCals * 0.30) / 9);

  return (
    <div className="modal-overlay z-50 py-10 overflow-y-auto" onClick={onClose}>
      <div 
        className="glass-panel max-w-3xl w-full p-6 sm:p-8 relative my-auto animate-fade-in border-amber-500/30 max-h-[90vh] overflow-y-auto"
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
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-xl">
            ⚡
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              Wellness & Macro Goal Quiz
            </h2>
            <p className="text-xs text-gray-300">Discover your optimal daily energy target & personalized organic meal blueprint.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Inputs */}
          <div className="space-y-4">
            
            {/* Gender toggle */}
            <div>
              <label className="text-xs font-bold text-gray-300 uppercase block mb-1.5">Gender</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGender('female')}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'female' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-gray-950/50 border-gray-800 text-gray-400'
                  }`}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender('male')}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'male' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-gray-950/50 border-gray-800 text-gray-400'
                  }`}
                >
                  Male
                </button>
              </div>
            </div>

            {/* Sliders: Weight, Height, Age */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-gray-300">Weight</span>
                <span className="text-amber-400">{weight} kg</span>
              </div>
              <input 
                type="range" min="40" max="130" value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-amber-500 bg-gray-900 rounded-lg h-2"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-gray-300">Height</span>
                <span className="text-amber-400">{height} cm</span>
              </div>
              <input 
                type="range" min="140" max="210" value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-amber-500 bg-gray-900 rounded-lg h-2"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-gray-300">Age</span>
                <span className="text-amber-400">{age} years</span>
              </div>
              <input 
                type="range" min="16" max="80" value={age} 
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-amber-500 bg-gray-900 rounded-lg h-2"
              />
            </div>

            {/* Primary Goal */}
            <div>
              <label className="text-xs font-bold text-gray-300 uppercase block mb-1.5">Primary Fitness Goal</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setGoal('lean')}
                  className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-center cursor-pointer ${
                    goal === 'lean' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-gray-950/50 border-gray-800 text-gray-400'
                  }`}
                >
                  🌱 Fat Loss & Detox
                </button>
                <button
                  onClick={() => setGoal('maintain')}
                  className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-center cursor-pointer ${
                    goal === 'maintain' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-gray-950/50 border-gray-800 text-gray-400'
                  }`}
                >
                  ⚡ Energy Maintenance
                </button>
                <button
                  onClick={() => setGoal('muscle')}
                  className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-center cursor-pointer ${
                    goal === 'muscle' ? 'bg-teal-500/20 border-teal-500 text-teal-300' : 'bg-gray-950/50 border-gray-800 text-gray-400'
                  }`}
                >
                  💪 Lean Muscle Growth
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="glass-panel p-6 border-amber-500/40 bg-gray-950/90 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-center pb-3 border-b border-gray-800">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Your Daily Target Score</span>
                <div className="mt-2 text-3xl font-extrabold font-serif text-white flex items-center justify-center gap-2">
                  <Flame className="w-6 h-6 text-amber-400 animate-pulse" />
                  <span>{targetCals} kcal</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1">Recommended daily energy intake for your goal</p>
              </div>

              {/* Target Macro Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-emerald-400 uppercase font-bold block">Protein</span>
                  <span className="text-base font-extrabold text-white">{targetProtein}g</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">~30%</span>
                </div>
                <div className="bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-amber-400 uppercase font-bold block">Carbs</span>
                  <span className="text-base font-extrabold text-white">{targetCarbs}g</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">~40%</span>
                </div>
                <div className="bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                  <span className="text-[10px] text-teal-400 uppercase font-bold block">Fats</span>
                  <span className="text-base font-extrabold text-white">{targetFat}g</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">~30%</span>
                </div>
              </div>

              {/* Recommended Dish */}
              <div className="bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-lg">
                  🥗
                </div>
                <div>
                  <p className="text-[10px] text-emerald-400 uppercase font-bold">Recommended Pure Dish</p>
                  <p className="text-xs font-bold text-white">Wild Salmon & Avocado Power Bowl</p>
                  <p className="text-[10px] text-gray-400">38g Protein • Organic Quinoa & Edamame</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 space-y-2">
              <button 
                onClick={() => {
                  onClose();
                  onOpenBuilder();
                }}
                className="btn-amber w-full justify-center text-xs py-3 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Build Meal for {targetCals} Cals
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
