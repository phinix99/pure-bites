import React, { useState } from 'react';
import { Plus, Star, Flame, Eye, X } from 'lucide-react';
import { CATEGORIES, DIETARY_FILTERS, MENU_ITEMS } from '../data/foodData';

const MenuSection = ({ searchQuery = '', onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState(null);

  const handleAddToCart = (item) => {
    if (onAddToCart) onAddToCart(item);
    setToast(`Added ${item.name} to cart`);
    setTimeout(() => setToast(null), 3000);
  };

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesFilter = activeFilter === 'All' || item.dietary.includes(activeFilter);
    return matchesSearch && matchesCategory && matchesFilter;
  });

  return (
    <section id="menu-section" className="py-28">
      <div className="container-custom">
      {/* Header Pattern */}
      <div className="flex flex-col items-center text-center space-y-8 mb-24">
        <span className="text-sm uppercase tracking-[0.2em] text-[#8a9b91] font-semibold">Curated Selection</span>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2]">Our Menu</h2>
        <div className="w-12 h-[2px] bg-[#22c55e] opacity-60"></div>
        <p className="text-[#8a9b91] max-w-2xl mx-auto leading-loose text-lg">
          Nourishing, chef-crafted meals designed for optimal health and performance. 
          Sourced from local organic farms.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col space-y-8 mb-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setActiveCategory('All')}
            className="relative flex flex-col items-center group"
          >
            <span className={`text-sm transition-colors duration-500 ${activeCategory === 'All' ? 'text-white' : 'text-[#8a9b91] group-hover:text-white'}`}>
              All
            </span>
            {activeCategory === 'All' && <div className="w-1 h-1 rounded-full bg-[#22c55e] mt-1 absolute -bottom-3"></div>}
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className="relative flex flex-col items-center group"
            >
              <span className={`text-sm transition-colors duration-500 ${activeCategory === cat.name ? 'text-white' : 'text-[#8a9b91] group-hover:text-white'}`}>
                {cat.name}
              </span>
              {activeCategory === cat.name && <div className="w-1 h-1 rounded-full bg-[#22c55e] mt-1 absolute -bottom-3"></div>}
            </button>
          ))}
        </div>

        {/* Dietary Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-1.5 rounded-full text-xs transition-all duration-500 ${activeFilter === 'All' ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30' : 'text-[#8a9b91] border border-white/5 hover:border-white/20'}`}
          >
            All Filters
          </button>
          {DIETARY_FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs transition-all duration-500 ${activeFilter === filter ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30' : 'text-[#8a9b91] border border-white/5 hover:border-white/20'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="relative h-[420px] rounded-[32px] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl" 
            onClick={() => setSelectedItem(item)}
          >
            {/* Background Image */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d09]/90 via-[#060d09]/30 to-transparent"></div>
            
            {/* Top Bar: Badge & Add Button */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
              <div className="flex flex-col gap-2">
                {item.dietary.slice(0, 1).map(d => (
                  <span key={d} className="bg-[#f0f9f0] text-[#22c55e] text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {d}
                  </span>
                ))}
                {item.isPopular && (
                  <span className="bg-[#fffbeb] text-[#eab308] text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Popular
                  </span>
                )}
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#060d09] transition-all duration-300 shadow-lg"
              >
                <Plus size={18} />
              </button>
            </div>
            
            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col">
              <div className="flex justify-between items-end">
                <div className="max-w-[70%]">
                  <h3 className="font-serif text-3xl text-white font-bold mb-1 leading-none">{item.name}</h3>
                  <p className="text-white/80 text-xs font-medium line-clamp-1">{item.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white text-xl font-bold font-serif">${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#8a9b91]">No items found matching your criteria.</p>
        </div>
      )}

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center sm:p-8 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedItem(null)}>
          <div className="w-full h-full sm:max-w-md sm:h-[800px] sm:rounded-[40px] overflow-hidden relative flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            
            {/* Full background image */}
            <img src={selectedItem.image} alt={selectedItem.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] via-[#060d09]/60 to-transparent"></div>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {/* Top Content */}
            <div className="relative z-10 px-8 pt-20">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedItem.dietary.map(d => (
                  <span key={d} className="bg-[#f0f9f0] text-[#22c55e] text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {d}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-4xl font-serif font-bold text-white leading-none">{selectedItem.name}</h3>
                <p className="text-white/90 text-xl font-bold font-serif ml-4">${selectedItem.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-auto relative z-10 px-6 pb-6 w-full">
              {/* Glass Nutrition Grid */}
              <div className="glass-grid flex w-full mb-6 text-white text-center">
                <div className="glass-grid-item flex-1 p-5">
                  <p className="text-white/70 text-[10px] font-medium tracking-wider mb-2">Protein</p>
                  <p className="text-2xl font-serif font-bold">{selectedItem.macros.protein}g</p>
                  <p className="text-white/50 text-xs mt-3">{Math.round((selectedItem.macros.protein / 50) * 100)}%</p>
                </div>
                <div className="glass-grid-item flex-1 p-5">
                  <p className="text-white/70 text-[10px] font-medium tracking-wider mb-2">Carbs</p>
                  <p className="text-2xl font-serif font-bold">{selectedItem.macros.carbs}g</p>
                  <p className="text-white/50 text-xs mt-3">{Math.round((selectedItem.macros.carbs / 275) * 100)}%</p>
                </div>
                <div className="glass-grid-item flex-1 p-5">
                  <p className="text-white/70 text-[10px] font-medium tracking-wider mb-2">Fat</p>
                  <p className="text-2xl font-serif font-bold">{selectedItem.macros.fats}g</p>
                  <p className="text-white/50 text-xs mt-3">{Math.round((selectedItem.macros.fats / 78) * 100)}%</p>
                </div>
              </div>

              {/* Solid White overlapping card */}
              <div className="bg-white rounded-[32px] p-8 shadow-2xl relative">
                <p className="text-[#8a9b91] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Details</p>
                <h4 className="text-2xl font-serif font-bold text-[#060d09] mb-4">{selectedItem.name}</h4>
                <p className="text-[#5a6b62] text-sm leading-relaxed mb-8">
                  {selectedItem.description}
                </p>
                <button 
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="w-full bg-[#060d09] text-white py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#1a2e22] transition-colors"
                >
                  <Plus size={18} />
                  Add to Order
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 right-8 glass-panel px-6 py-4 rounded-xl shadow-2xl z-50 animate-fade-in border border-white/10 bg-[#060d09]/90 backdrop-blur-md">
          <p className="text-white text-sm flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
            {toast}
          </p>
        </div>
      )}
      </div>
    </section>
  );
};

export default MenuSection;
