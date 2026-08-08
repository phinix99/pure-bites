import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import BowlBuilder from './components/BowlBuilder';
import NutritionCalculator from './components/NutritionCalculator';
import CartDrawer from './components/CartDrawer';
import OrderTrackerModal from './components/OrderTrackerModal';
import FarmTraceability from './components/FarmTraceability';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [activeOrderDetails, setActiveOrderDetails] = useState(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.id === item.id);
      if (existing) {
        return prevItems.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems(prev => prev.map(item => item.id === itemId ? { ...item, quantity } : item));
    }
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleCheckoutSuccess = (orderDetails) => {
    setActiveOrderDetails(orderDetails);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500/30 selection:text-white">
      
      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBuilder={() => setIsBuilderOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenBuilder={() => setIsBuilderOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* Thin accent divider between hero and menu */}
        <div className="container-custom">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        </div>

        <MenuSection
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
        />

        {/* Thin accent divider */}
        <div className="container-custom">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        </div>

        <FarmTraceability />
      </main>

      {/* Modals */}
      <BowlBuilder
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <NutritionCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onAddToCart={handleAddToCart}
        onOpenBuilder={() => setIsBuilderOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutSuccess={handleCheckoutSuccess}
      />

      <OrderTrackerModal
        orderDetails={activeOrderDetails}
        onClose={() => setActiveOrderDetails(null)}
      />

      {/* Footer */}
      <Footer
        onOpenBuilder={() => setIsBuilderOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />
    </div>
  );
}
