export const CATEGORIES = [
  { id: 'all', label: 'All Pure Creations', icon: '✨' },
  { id: 'bowls', label: 'Chef\'s Power Bowls', icon: '🥗' },
  { id: 'smoothies', label: 'Cold-Pressed & Smoothies', icon: '🥤' },
  { id: 'wraps', label: 'Artisanal Wraps', icon: '🌯' },
  { id: 'snacks', label: 'Superfood Bites', icon: '⚡' }
];

export const DIETARY_FILTERS = [
  { id: 'vegan', label: '100% Vegan' },
  { id: 'keto', label: 'Keto Friendly' },
  { id: 'gf', label: 'Gluten-Free' },
  { id: 'protein', label: 'High Protein (30g+)' },
  { id: 'organic', label: 'Raw Organic' }
];

export const MENU_ITEMS = [
  {
    id: 'avocado-salmon-bowl',
    name: 'Wild Atlantic Salmon & Avocado Power Bowl',
    category: 'bowls',
    price: 18.99,
    rating: 4.95,
    reviews: 142,
    image: '/assets/avocado_power_bowl.png',
    calories: 540,
    protein: 38,
    carbs: 42,
    fat: 22,
    tags: ['organic', 'protein', 'gf'],
    badge: 'Chef\'s Pick 👑',
    description: 'Sustainably caught pan-seared wild salmon, hass avocado slices, organic tri-color quinoa, steamed edamame, shaved radishes, micro-greens, drizzled with toasted sesame tamari glaze.',
    ingredients: ['Wild Atlantic Salmon', 'Hass Avocado', 'Organic Tri-color Quinoa', 'Steamed Edamame', 'Radish Shavings', 'Alfalfa Sprouts', 'Tamari Sesame Glaze']
  },
  {
    id: 'dragon-acai-bowl',
    name: 'Royal Dragon Fruit & Acai Superfood Bowl',
    category: 'smoothies',
    price: 14.50,
    rating: 4.92,
    reviews: 98,
    image: '/assets/dragon_fruit_bowl.png',
    calories: 380,
    protein: 14,
    carbs: 58,
    fat: 10,
    tags: ['vegan', 'organic', 'gf'],
    badge: 'Antioxidant Boost 🌸',
    description: 'Blend of organic pink pitaya dragon fruit and wild Amazonian acai berries. Topped with fresh raspberries, blueberries, sprouted chia seeds, and raw toasted coconut chips.',
    ingredients: ['Organic Pink Pitaya', 'Wild Amazon Acai', 'Raw Coconut Milk', 'Chia Seeds', 'Blueberries', 'Raspberries', 'Coconut Flakes']
  },
  {
    id: 'truffle-mushroom-wrap',
    name: 'Wild Truffle & Roasted Mushroom Spinach Wrap',
    category: 'wraps',
    price: 16.25,
    rating: 4.88,
    reviews: 76,
    image: '/assets/truffle_wrap.png',
    calories: 460,
    protein: 26,
    carbs: 48,
    fat: 18,
    tags: ['vegan', 'keto', 'organic'],
    badge: 'Gourmet Vegan 🍄',
    description: 'Slow-roasted oyster and shiitake mushrooms sautéed in white truffle cashew cream, wrapped in an organic spinach tortilla with baby arugula and heirloom cherry tomatoes.',
    ingredients: ['Oyster Mushrooms', 'Shiitake Mushrooms', 'Spinach Tortilla', 'White Truffle Cashew Cheese', 'Baby Arugula', 'Sun-dried Tomatoes']
  },
  {
    id: 'artisanal-matcha-latte',
    name: 'Ceremonial Uji Matcha & Velvet Oat Latte',
    category: 'smoothies',
    price: 7.95,
    rating: 4.98,
    reviews: 215,
    image: '/assets/matcha_latte.png',
    calories: 140,
    protein: 6,
    carbs: 18,
    fat: 4,
    tags: ['vegan', 'organic', 'gf'],
    badge: 'Clean Focus 🍵',
    description: 'First-harvest shade-grown ceremonial Uji matcha stone-ground and whisked with steamed organic sprouted oat milk and a touch of raw monkfruit elixir.',
    ingredients: ['Ceremonial Uji Matcha', 'Sprouted Oat Milk', 'Monkfruit Extract', 'Vanilla Bean']
  },
  {
    id: 'raw-cacao-protein-bites',
    name: 'Raw Cacao & Pistachio Superfood Bliss Balls',
    category: 'snacks',
    price: 9.99,
    rating: 4.90,
    reviews: 110,
    image: '/assets/superfood_snack.png',
    calories: 280,
    protein: 16,
    carbs: 24,
    fat: 14,
    tags: ['vegan', 'keto', 'protein', 'organic'],
    badge: 'Keto Power ⚡',
    description: 'Hand-rolled energy spheres crafted with raw Ecuadorian cacao, sprouted pumpkin seeds, almond protein, and rolled in crushed Mediterranean pistachios and coconut flakes.',
    ingredients: ['Raw Cacao Paste', 'Sprouted Almond Flour', 'Organic Pumpkin Seeds', 'Crushed Pistachios', 'Ceylon Cinnamon']
  },
  {
    id: 'green-goddess-detox',
    name: 'Cold-Pressed Green Goddess Glow Elixir',
    category: 'smoothies',
    price: 11.50,
    rating: 4.87,
    reviews: 84,
    image: '/assets/hero_pure_bites.png',
    calories: 120,
    protein: 4,
    carbs: 26,
    fat: 1,
    tags: ['vegan', 'organic', 'gf'],
    badge: 'Daily Detox 🌱',
    description: '100% cold-pressed organic Tuscan kale, English cucumber, Granny Smith apple, fresh ginger root, and lemon with a hint of wild spirulina.',
    ingredients: ['Organic Tuscan Kale', 'English Cucumber', 'Green Apple', 'Fresh Ginger', 'Lemon Juice', 'Blue Spirulina']
  }
];

export const BOWL_BUILDER_OPTIONS = {
  bases: [
    { id: 'b1', name: 'Tri-color Organic Quinoa', calories: 140, protein: 5, carbs: 26, fat: 2.5, price: 0 },
    { id: 'b2', name: 'Wild Forbidden Black Rice', calories: 160, protein: 4, carbs: 32, fat: 1.5, price: 0.5 },
    { id: 'b3', name: 'Roasted Cauliflower Rice', calories: 45, protein: 2, carbs: 8, fat: 0.5, price: 0 },
    { id: 'b4', name: 'Alfalfa & Baby Kale Bed', calories: 30, protein: 3, carbs: 4, fat: 0.5, price: 0 }
  ],
  proteins: [
    { id: 'p1', name: 'Pan-Seared Wild Atlantic Salmon', calories: 240, protein: 28, carbs: 0, fat: 14, price: 5.5 },
    { id: 'p2', name: 'Herb-Marinated Free-Range Chicken', calories: 210, protein: 32, carbs: 0, fat: 7, price: 4.5 },
    { id: 'p3', name: 'Smoked Organic Tempeh Strips', calories: 180, protein: 20, carbs: 8, fat: 9, price: 3.5 },
    { id: 'p4', name: 'Crispy Sprouted Chickpeas & Tofu', calories: 160, protein: 14, carbs: 18, fat: 6, price: 3.0 }
  ],
  veggies: [
    { id: 'v1', name: 'Fresh Hass Avocado Slices', calories: 120, protein: 2, carbs: 6, fat: 11, price: 2.0 },
    { id: 'v2', name: 'Steamed Edamame Beans', calories: 60, protein: 6, carbs: 5, fat: 2.5, price: 1.0 },
    { id: 'v3', name: 'Roasted Beetroot & Carrots', calories: 50, protein: 1, carbs: 11, fat: 0.2, price: 1.0 },
    { id: 'v4', name: 'Wild Mushroom Sauté', calories: 70, protein: 3, carbs: 6, fat: 4, price: 1.5 }
  ],
  sauces: [
    { id: 's1', name: 'White Truffle Cashew Cream', calories: 90, protein: 2, carbs: 4, fat: 8, price: 1.5 },
    { id: 's2', name: 'Golden Turmeric Lemon Tahini', calories: 75, protein: 3, carbs: 3, fat: 6, price: 1.0 },
    { id: 's3', name: 'Spicy Avocado Lime Chimichurri', calories: 65, protein: 1, carbs: 2, fat: 6, price: 1.0 },
    { id: 's4', name: 'Raw Cacao Tamari Glaze', calories: 40, protein: 1, carbs: 8, fat: 1, price: 0.8 }
  ],
  crunch: [
    { id: 'c1', name: 'Toasted Sprouted Hemp Seeds', calories: 45, protein: 3, carbs: 1, fat: 3.5, price: 0.8 },
    { id: 'c2', name: 'Crushed Mediterranean Pistachios', calories: 50, protein: 2, carbs: 2, fat: 4, price: 1.0 },
    { id: 'c3', name: 'Raw Organic Chia Seeds', calories: 40, protein: 2, carbs: 3, fat: 2.5, price: 0.5 },
    { id: 'c4', name: 'Toasted Pumpkin Seeds', calories: 45, protein: 2, carbs: 1, fat: 3.5, price: 0.5 }
  ]
};

export const FARM_PARTNERS = [
  {
    name: 'Valley Greens Organic Farm',
    location: 'Sonoma Valley, CA',
    distance: '18 miles away',
    specialty: 'Hydroponic Tuscan Kale & Microgreens',
    certified: 'USDA 100% Organic',
    icon: '🌱'
  },
  {
    name: 'Oceanic Wild Salmon Co.',
    location: 'Pacific Northwest Harbor',
    distance: 'Wild Caught Daily',
    specialty: 'Sustainably Hook-Line Wild Salmon',
    certified: 'MSC Certified Sustainable',
    icon: '🐟'
  },
  {
    name: 'Golden Sun Avocado Groves',
    location: 'Ojai, California',
    distance: '34 miles away',
    specialty: 'Tree-Ripened Hass Avocados',
    certified: 'Regenerative Organic Certified',
    icon: '🥑'
  }
];
