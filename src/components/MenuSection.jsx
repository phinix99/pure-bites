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
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Pattern */}
      <div className="flex flex-col items-center text-center space-y-6 mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8a9b91]">Curated Selection</span>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">Our Menu</h2>
        <div className="w-12 h-[2px] bg-[#22c55e] opacity-60"></div>
        <p className="text-[#8a9b91] max-w-2xl mx-auto leading-relaxed">
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
          <div key={item.id} className="glass-card group overflow-hidden flex flex-col rounded-2xl">
            <div className="relative h-64 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {item.isPopular && <span className="bg-[#eab308]/90 text-black text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded backdrop-blur-sm">Popular</span>}
              </div>
              <button 
                onClick={() => setSelectedItem(item)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]"
              >
                <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Eye size={16} />
                  <span className="text-sm">View Details</span>
                </div>
              </button>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.dietary.slice(0, 2).map(d => (
                  <span key={d} className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded border border-white/10 ${d === 'Vegan' ? 'text-green-400' : d === 'High Protein' ? 'text-blue-400' : 'text-orange-400'}`}>
                    {d}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-lg text-white font-medium">{item.name}</h3>
                <div className="flex items-center text-[#eab308] gap-1">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs text-white/80">{item.rating}</span>
                </div>
              </div>
              
              <p className="text-[#8a9b91] text-xs line-clamp-2 mb-5 flex-grow">
                {item.description}
              </p>
              
              <div className="grid grid-cols-4 gap-2 mb-6 text-center border-y border-white/5 py-3">
                <div className="flex flex-col items-center">
                  <Flame size={14} className="text-orange-500 mb-1" />
                  <span className="text-white text-xs">{item.macros.calories}</span>
                  <span className="text-[#8a9b91] text-[9px] uppercase">Cal</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-xs mt-[18px]">{item.macros.protein}g</span>
                  <span className="text-[#8a9b91] text-[9px] uppercase">Pro</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-xs mt-[18px]">{item.macros.carbs}g</span>
                  <span className="text-[#8a9b91] text-[9px] uppercase">Carb</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-xs mt-[18px]">{item.macros.fats}g</span>
                  <span className="text-[#8a9b91] text-[9px] uppercase">Fat</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white text-xl font-medium">${item.price.toFixed(2)}</span>
                <button 
                  onClick={() => handleAddToCart(item)}
                  className="w-10 h-10 rounded-full bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center hover:bg-[#22c55e] hover:text-white transition-colors duration-300 border border-[#22c55e]/30"
                >
                  <Plus size={20} />
                </button>
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
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col md:flex-row relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X size={18} />
            </button>
            
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060d09]/80 hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] to-transparent md:hidden"></div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col bg-[#060d09]">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedItem.dietary.map(d => (
                  <span key={d} className="text-xs uppercase tracking-widest text-[#8a9b91] border border-white/10 px-3 py-1 rounded-full">
                    {d}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{selectedItem.name}</h3>
              <div className="flex items-center text-[#eab308] gap-1 mb-6">
                <Star size={16} fill="currentColor" />
                <span className="text-sm text-white/80">{selectedItem.rating} ({selectedItem.reviews || 42} reviews)</span>
              </div>
              
              <p className="text-[#8a9b91] leading-relaxed mb-8">
                {selectedItem.description}
                <br /><br />
                Crafted with organic, locally sourced ingredients to provide optimal nutrition without compromising on taste.
              </p>
              
              <div className="grid grid-cols-4 gap-4 mb-10">
                <div className="glass-card p-3 flex flex-col items-center justify-center rounded-xl">
                  <Flame size={18} className="text-orange-500 mb-2" />
                  <span className="text-white font-medium">{selectedItem.macros.calories}</span>
                  <span className="text-[#8a9b91] text-[10px] uppercase">Calories</span>
                </div>
                <div className="glass-card p-3 flex flex-col items-center justify-center rounded-xl">
                  <span className="text-white font-medium mt-6">{selectedItem.macros.protein}g</span>
                  <span className="text-[#8a9b91] text-[10px] uppercase">Protein</span>
                </div>
                <div className="glass-card p-3 flex flex-col items-center justify-center rounded-xl">
                  <span className="text-white font-medium mt-6">{selectedItem.macros.carbs}g</span>
                  <span className="text-[#8a9b91] text-[10px] uppercase">Carbs</span>
                </div>
                <div className="glass-card p-3 flex flex-col items-center justify-center rounded-xl">
                  <span className="text-white font-medium mt-6">{selectedItem.macros.fats}g</span>
                  <span className="text-[#8a9b91] text-[10px] uppercase">Fats</span>
                </div>
              </div>
              
              <div className="mt-auto flex items-center gap-6">
                <span className="text-3xl font-medium text-white">${selectedItem.price.toFixed(2)}</span>
                <button 
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="flex-1 btn-primary py-4 px-6 rounded-xl flex items-center justify-center gap-2 font-medium text-white bg-[#22c55e] hover:bg-[#1ea850] transition-colors"
                >
                  <Plus size={20} />
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
    </section>
  );
};

export default MenuSection;
