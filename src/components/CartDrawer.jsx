import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus, Tag, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems = [], onUpdateQuantity, onRemoveItem, onCheckoutSuccess }) {
  const [promoCode, setPromoCode] = useState('');
  
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = cartItems.length > 0 ? 3.99 : 0;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + deliveryFee + tax;

  const handleCheckout = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#eab308', '#ffffff']
    });
    setTimeout(() => {
      if (onCheckoutSuccess) {
        onCheckoutSuccess({
          orderId: `PB-${Math.floor(100000 + Math.random() * 900000)}`,
          total: grandTotal,
          items: cartItems,
        });
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#060d09] h-full border-l border-white/5 flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="px-8 py-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-[#22c55e]" />
            <h2 className="font-serif text-2xl text-white">Your Order</h2>
            <span className="bg-[#22c55e]/20 text-[#22c55e] px-2 py-0.5 rounded-full text-xs font-bold">
              {cartItems.length}
            </span>
          </div>
          <button onClick={onClose} className="text-[#8a9b91] hover:text-white transition-colors duration-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-[#8a9b91] space-y-4">
              <span className="text-6xl">🥗</span>
              <p className="text-lg">Your bowl is looking empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/5 flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-black/40 flex items-center justify-center text-3xl">🥗</div>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-white font-medium text-sm truncate pr-2">{item.name}</h4>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8a9b91] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[#8a9b91] text-xs mt-1">
                      {item.macros?.calories || '—'} kcal
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-3 bg-black/40 rounded-full border border-white/5 p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#8a9b91] hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#8a9b91] hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-white font-serif">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/5 bg-[#0a1a12] p-8 space-y-6">
            
            {/* Promo */}
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8a9b91]" />
              <input 
                type="text" 
                placeholder="Gift card or promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#22c55e] transition-colors"
              />
            </div>

            {/* Delivery Slot */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 px-4 rounded-xl border border-[#22c55e] bg-[#22c55e]/10 text-white text-sm font-medium transition-all duration-300">
                ASAP (15-25m)
              </button>
              <button className="py-3 px-4 rounded-xl border border-white/5 bg-black/20 text-[#8a9b91] text-sm font-medium hover:border-white/20 transition-all duration-300">
                Schedule
              </button>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 text-sm pt-4 border-t border-white/5">
              <div className="flex justify-between text-[#8a9b91]">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#8a9b91]">
                <span>Delivery Fee</span>
                <span className="text-white">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#8a9b91]">
                <span>Est. Tax</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
            </div>

            {/* Total & Checkout */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between items-end mb-6">
                <span className="text-[#8a9b91] uppercase tracking-widest text-xs font-semibold">Total Due</span>
                <span className="font-serif text-4xl text-white">${grandTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-[#22c55e] text-[#060d09] py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#22c55e]/90 transition-all duration-500"
              >
                <span>Complete Order</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
