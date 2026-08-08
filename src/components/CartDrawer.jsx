import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ShoppingBag, X, Trash2, Plus, Minus, Tag, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckoutSuccess }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [deliverySlot, setDeliverySlot] = useState('express');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const ecoFee = cartItems.length > 0 ? 1.50 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + ecoFee);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'PURE10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'HEALTHY20') {
      setDiscountPercent(20);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try "PURE10" for 10% off!');
    }
  };

  const handleCheckout = () => {
    // Fire celebratory confetti burst!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#f59e0b', '#34d399', '#ffffff']
    });

    onCheckoutSuccess({
      orderId: `PB-${Math.floor(100000 + Math.random() * 900000)}`,
      total: grandTotal,
      items: cartItems,
      deliverySlot
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel rounded-none border-l border-emerald-500/30 bg-gray-950/95 flex flex-col justify-between animate-fade-in shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Your Organic Order</h3>
                <p className="text-xs text-gray-400">{cartItems.length} items in your bag</p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="text-4xl opacity-50">🥗</div>
                <h4 className="text-base font-bold text-white">Your bag is empty</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Add chef-crafted bowls, cold-pressed juices, or build your custom creation!
                </p>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="glass-card p-3.5 flex items-center gap-3 border-gray-800/80 bg-gray-900/60">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded-xl object-cover border border-gray-800"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.calories} Cals • ${item.price.toFixed(2)} each</p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2 bg-gray-950 px-2 py-1 rounded-lg border border-gray-800">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-white text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-white text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-emerald-400">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-500 hover:text-rose-400 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-800 bg-gray-950/90 space-y-4">
              
              {/* Promo Code Input */}
              <div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input 
                      type="text"
                      placeholder="Promo Code (try PURE10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white uppercase focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <button 
                    onClick={applyPromo}
                    disabled={promoApplied}
                    className="btn-secondary text-xs px-3 py-1.5 border-emerald-500/40 text-emerald-300"
                  >
                    {promoApplied ? 'Applied ✓' : 'Apply'}
                  </button>
                </div>
                {promoError && <p className="text-[10px] text-rose-400 mt-1">{promoError}</p>}
                {promoApplied && <p className="text-[10px] text-emerald-400 mt-1">✓ {discountPercent}% discount code applied!</p>}
              </div>

              {/* Delivery Slot Option */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <button
                  onClick={() => setDeliverySlot('express')}
                  className={`p-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                    deliverySlot === 'express' 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'bg-gray-900 border-gray-800 text-gray-400'
                  }`}
                >
                  ⚡ Express 30m Hot
                </button>
                <button
                  onClick={() => setDeliverySlot('scheduled')}
                  className={`p-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                    deliverySlot === 'scheduled' 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'bg-gray-900 border-gray-800 text-gray-400'
                  }`}
                >
                  🕒 Scheduled Window
                </button>
              </div>

              {/* Cost Calculation breakdown */}
              <div className="space-y-1.5 text-xs border-t border-gray-800/80 pt-3">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-400">
                  <span>Eco Packaging & Carbon Offsets</span>
                  <span className="text-white">${ecoFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-gray-800">
                  <span>Grand Total</span>
                  <span className="text-emerald-400 text-base font-serif font-extrabold">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="btn-primary w-full justify-center text-sm py-3 shadow-xl cursor-pointer"
              >
                <span>Express Organic Checkout (${grandTotal.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
