import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Bike, ChefHat, PackageCheck, PhoneCall } from 'lucide-react';

export default function OrderTrackerModal({ orderDetails, onClose }) {
  const [activeStep, setActiveStep] = useState(2); // Step 2: Chef Prep
  const [etaMinutes, setEtaMinutes] = useState(22);

  useEffect(() => {
    const timer = setInterval(() => {
      setEtaMinutes(prev => (prev > 1 ? prev - 1 : 1));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  if (!orderDetails) return null;

  const steps = [
    { id: 1, title: 'Order Confirmed', desc: 'Received & verified', icon: CheckCircle2 },
    { id: 2, title: 'Chef Preparation', desc: 'Washing organic greens & searing', icon: ChefHat },
    { id: 3, title: 'Quality Check & Pack', desc: 'Zero-plastic eco container sealed', icon: PackageCheck },
    { id: 4, title: 'Courier En Route', desc: 'EV courier speeding to your doorstep', icon: Bike }
  ];

  return (
    <div className="modal-overlay z-50 py-10 overflow-y-auto" onClick={onClose}>
      <div 
        className="glass-panel max-w-2xl w-full p-6 sm:p-8 relative my-auto animate-fade-in border-emerald-500/40 bg-gray-950/95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white bg-gray-900/80 w-8 h-8 rounded-full flex items-center justify-center border border-gray-800"
        >
          ✕
        </button>

        {/* Top Header */}
        <div className="text-center pb-6 border-b border-gray-800">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-2">
            LIVE ORDER TRACKING • #{orderDetails.orderId}
          </span>
          <h2 className="font-serif text-2xl font-bold text-white">Your Organic Order is Being Prepared!</h2>
          <div className="mt-3 inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-2xl border border-gray-800">
            <Clock className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-sm font-bold text-white">Estimated Delivery in:</span>
            <span className="text-lg font-serif font-extrabold text-emerald-400">{etaMinutes} mins</span>
          </div>
        </div>

        {/* Progress Stepper */}
        <div className="py-8 space-y-6">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-800 -z-0" />

            <div className="space-y-6 relative z-10">
              {steps.map(step => {
                const Icon = step.icon;
                const isDone = step.id < activeStep;
                const isCurrent = step.id === activeStep;

                return (
                  <div key={step.id} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all ${
                      isDone 
                        ? 'bg-emerald-500 text-gray-950 shadow-md shadow-emerald-500/30' 
                        : isCurrent
                        ? 'bg-emerald-500/20 text-emerald-300 border-2 border-emerald-500 animate-pulse shadow-lg shadow-emerald-950/50'
                        : 'bg-gray-900 text-gray-500 border border-gray-800'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-bold ${isCurrent ? 'text-emerald-400' : isDone ? 'text-white' : 'text-gray-400'}`}>
                          {step.title}
                        </h4>
                        {isDone && <span className="text-xs text-emerald-400 font-bold">Completed ✓</span>}
                        {isCurrent && <span className="text-[11px] text-amber-400 font-bold animate-pulse">In Progress...</span>}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Courier Details Box */}
        <div className="glass-panel p-4 border-gray-800 bg-gray-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold border border-emerald-500/30">
              🛵
            </div>
            <div>
              <p className="text-xs font-bold text-white">Alex Rivera</p>
              <p className="text-[11px] text-gray-400">Zero-Emission EV Bicycle Courier</p>
            </div>
          </div>

          <button 
            onClick={() => alert("Calling courier: Alex Rivera (+1 800-PURE-BITES)...")}
            className="btn-secondary text-xs px-3 py-1.5 flex items-center gap-1.5 text-emerald-300 border-emerald-500/30"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>Call Driver</span>
          </button>
        </div>

        {/* Order Details summary footer */}
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-400">
            Total Paid: <strong className="text-emerald-400">${orderDetails.total.toFixed(2)}</strong> via Express Pay
          </p>
        </div>

      </div>
    </div>
  );
}
