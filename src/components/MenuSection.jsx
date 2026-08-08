import React, { useState } from 'react';
import { CATEGORIES, DIETARY_FILTERS, MENU_ITEMS } from '../data/foodData';
import { Plus, Star, Flame, Shield, Info, Check, Eye } from 'lucide-react';

export default function MenuSection({ searchQuery, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeItemModal, setActiveItemModal] = useState(null);
  const [addedItemToast, setAddedItemToast] = useState(null);

  const toggleTag = (tagId) => {
    setSelectedTags(prev => 
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]
    );
  };

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => item.tags.includes(tag));

    return matchesCategory && matchesSearch && matchesTags;
  });

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItemToast(item.name);
    setTimeout(() => setAddedItemToast(null), 2500);
  };

  return (
    <section id="menu-section" className="py-12 relative">
      
      {/* Toast popup when adding item */}
      {addedItemToast && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel px-5 py-3.5 border-emerald-500/50 bg-emerald-950/90 text-emerald-200 text-sm font-semibold flex items-center gap-3 shadow-2xl animate-fade-in">
          <div className="w-7 h-7 rounded-full bg-emerald-500 text-gray-950 flex items-center justify-center font-bold">
            ✓
          </div>
          <span>Added <strong>{addedItemToast}</strong> to your bag!</span>
        </div>
      )}

      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            Artisanal Menu & Nutrition
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
            Handcrafted Organic Delicacies
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            Every dish is prepared using 100% organic farm ingredients with complete macronutrient transparency.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-[var(--bg-glass)] text-gray-300 border border-[var(--border-glass)] hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Dietary Tag Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-10">
          <span className="text-xs text-gray-400 font-medium mr-1">Filter Dietary:</span>
          {DIETARY_FILTERS.map(df => {
            const active = selectedTags.includes(df.id);
            return (
              <button
                key={df.id}
                onClick={() => toggleTag(df.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  active 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-md shadow-amber-950/40' 
                    : 'bg-gray-900/50 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-200'
                }`}
              >
                {active ? '✓ ' : ''}{df.label}
              </button>
            );
          })}
          {selectedTags.length > 0 && (
            <button 
              onClick={() => setSelectedTags([])}
              className="text-xs text-emerald-400 hover:underline font-medium ml-2"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="glass-panel text-center py-16 px-6 max-w-md mx-auto">
            <p className="text-3xl mb-2">🔍</p>
            <h3 className="text-lg font-bold text-white">No dishes found matching filters</h3>
            <p className="text-sm text-gray-400 mt-1">Try clearing your search query or dietary filters.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSelectedTags([]); }}
              className="btn-primary text-xs mt-4 px-4 py-2"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="glass-card overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-500/30">
                        {item.badge}
                      </span>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-gray-800 flex items-center gap-1 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{item.rating}</span>
                      <span className="text-gray-400 text-[10px]">({item.reviews})</span>
                    </div>

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="btn-secondary text-xs px-3.5 py-1.5 flex items-center gap-1 bg-gray-900/90 border-emerald-500/50 text-emerald-300">
                        <Eye className="w-3.5 h-3.5" /> View Recipe Details
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(t => (
                        <span key={t} className={`tag-badge tag-${t}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Macro Breakdown Pills */}
                    <div className="grid grid-cols-4 gap-1.5 bg-gray-950/60 p-2.5 rounded-xl border border-gray-800/80 text-center">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase">Cals</p>
                        <p className="text-xs font-bold text-white flex items-center justify-center gap-0.5">
                          <Flame className="w-3 h-3 text-amber-400" /> {item.calories}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase">Protein</p>
                        <p className="text-xs font-bold text-emerald-400">{item.protein}g</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase">Carbs</p>
                        <p className="text-xs font-bold text-gray-300">{item.carbs}g</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase">Fat</p>
                        <p className="text-xs font-bold text-gray-300">{item.fat}g</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer: Price & Quick Add */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-800/50 mt-2">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-semibold">Price</span>
                    <span className="text-xl font-bold font-serif text-white">${item.price.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {activeItemModal && (
        <div className="modal-overlay" onClick={() => setActiveItemModal(null)}>
          <div 
            className="glass-panel max-w-2xl w-full p-6 relative overflow-hidden animate-fade-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-900/80 w-8 h-8 rounded-full flex items-center justify-center border border-gray-800 z-20"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-full relative">
                <img 
                  src={activeItemModal.image} 
                  alt={activeItemModal.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-gray-950/80 px-3 py-1 rounded-full text-xs text-emerald-300 border border-emerald-500/40">
                  100% Organic Certified
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase">{activeItemModal.badge || 'Artisanal Selection'}</span>
                  <h3 className="font-serif text-xl font-bold text-white">{activeItemModal.name}</h3>
                  <p className="text-sm font-bold text-emerald-400 mt-1">${activeItemModal.price.toFixed(2)}</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">{activeItemModal.description}</p>

                {/* Macro summary */}
                <div className="grid grid-cols-4 gap-2 bg-gray-900/80 p-3 rounded-xl border border-gray-800 text-center">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Calories</span>
                    <span className="text-sm font-bold text-white">{activeItemModal.calories}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Protein</span>
                    <span className="text-sm font-bold text-emerald-400">{activeItemModal.protein}g</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Carbs</span>
                    <span className="text-sm font-bold text-amber-400">{activeItemModal.carbs}g</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Fat</span>
                    <span className="text-sm font-bold text-teal-400">{activeItemModal.fat}g</span>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h4 className="text-xs font-bold text-gray-200 uppercase mb-2">Ingredients Sourced</h4>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {activeItemModal.ingredients.map(ing => (
                      <li key={ing} className="text-xs text-gray-300 flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span> {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add CTA */}
                <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Prep time: ~10 mins</span>
                  <button
                    onClick={() => {
                      onAddToCart(activeItemModal);
                      setActiveItemModal(null);
                      setAddedItemToast(activeItemModal.name);
                      setTimeout(() => setAddedItemToast(null), 2500);
                    }}
                    className="btn-primary text-xs px-5 py-2.5"
                  >
                    <Plus className="w-4 h-4" /> Add to Order (${activeItemModal.price.toFixed(2)})
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
