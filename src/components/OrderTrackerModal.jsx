import React from 'react';
import { CheckCircle2, Clock, Bike, ChefHat, PackageCheck, PhoneCall, X } from 'lucide-react';

export default function OrderTrackerModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  // Assuming orderDetails.status is a number 0-3
  const currentStep = orderDetails.status || 1; 
  
  const steps = [
    { title: 'Order Confirmed', time: '12:42 PM', icon: CheckCircle2 },
    { title: 'Preparing your bowl', time: '12:45 PM', icon: ChefHat },
    { title: 'Quality Check', time: '1:02 PM', icon: PackageCheck },
    { title: 'Out for Delivery', time: '1:05 PM', icon: Bike }
  ];

  return (
    <div className="modal-overlay flex items-center justify-center fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="glass-panel w-full max-w-2xl p-8 lg:p-12 relative my-8 border border-white/5 rounded-[2rem]">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-[#8a9b91] hover:text-white transition-colors duration-500">
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-black/40 text-[#8a9b91] text-xs font-semibold tracking-widest uppercase">
            Order #{orderDetails.id || '98201'}
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-white">Track Progress</h2>
          <div className="inline-flex items-center space-x-2 bg-[#22c55e]/10 px-4 py-2 rounded-xl text-[#22c55e]">
            <Clock className="w-4 h-4" />
            <span className="font-medium">ETA: 15-20 mins</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 space-y-12 mb-14">
          {/* Connecting Line */}
          <div className="absolute top-4 bottom-4 left-[2.2rem] w-px bg-white/5"></div>
          
          {steps.map((step, idx) => {
            const isDone = idx < currentStep;
            const isCurrent = idx === currentStep;
            const Icon = step.icon;

            return (
              <div key={idx} className="relative flex items-center pl-16 group">
                {/* Node */}
                <div className={`absolute left-0 w-11 h-11 rounded-xl flex items-center justify-center z-10 transition-all duration-500 ${
                  isDone ? 'bg-[#22c55e] text-[#060d09]' : 
                  isCurrent ? 'bg-[#0a1a12] border-2 border-[#22c55e] text-[#22c55e] animate-pulse' : 
                  'bg-black/40 border border-white/5 text-[#8a9b91]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className={`text-lg font-medium ${isDone || isCurrent ? 'text-white' : 'text-[#8a9b91]'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[#8a9b91] text-sm mt-1">{step.time}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Courier Details */}
        {currentStep >= 3 && (
          <div className="glass-panel bg-[#0a1a12] p-6 rounded-2xl border border-white/5 flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" 
                alt="Courier" 
                className="w-14 h-14 rounded-full bg-white/10"
              />
              <div>
                <p className="text-white font-medium">Alex M.</p>
                <p className="text-[#8a9b91] text-sm">Your Delivery Partner</p>
              </div>
            </div>
            <button className="w-12 h-12 rounded-full bg-black/40 border border-white/5 flex items-center justify-center text-[#22c55e] hover:bg-[#22c55e]/10 transition-colors">
              <PhoneCall className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[#8a9b91] text-sm">
            Total Paid <span className="text-white font-medium ml-2">${orderDetails.total || '24.50'}</span>
          </p>
        </div>

      </div>
    </div>
  );
}
