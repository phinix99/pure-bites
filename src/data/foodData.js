export const CATEGORIES = [
  { id: 'bowls', name: 'Power Bowls', icon: '🥗' },
  { id: 'smoothies', name: 'Drinks & Smoothies', icon: '🥤' },
  { id: 'wraps', name: 'Artisanal Wraps', icon: '🌯' },
  { id: 'snacks', name: 'Superfood Bites', icon: '⚡' }
];

export const DIETARY_FILTERS = [
  'Vegan',
  'Keto',
  'Gluten-Free',
  'High Protein',
  'Organic'
];

export const MENU_ITEMS = [
  {
    id: 'avocado-salmon-bowl',
    name: 'Wild Salmon & Avocado Bowl',
    category: 'Power Bowls',
    price: 18.99,
    rating: 4.9,
    reviews: 142,
    image: '/assets/avocado_power_bowl.png',
    macros: { calories: 540, protein: 38, carbs: 42, fats: 22 },
    dietary: ['High Protein', 'Gluten-Free', 'Organic'],
    isPopular: true,
    description: 'Pan-seared wild Atlantic salmon with hass avocado, tri-color quinoa, edamame, radish shavings, and a sesame tamari glaze.',
    ingredients: ['Wild Atlantic Salmon', 'Hass Avocado', 'Organic Tri-color Quinoa', 'Steamed Edamame', 'Radish Shavings', 'Alfalfa Sprouts', 'Tamari Sesame Glaze']
  },
  {
    id: 'dragon-acai-bowl',
    name: 'Dragon Fruit Acai Bowl',
    category: 'Drinks & Smoothies',
    price: 14.50,
    rating: 4.9,
    reviews: 98,
    image: '/assets/dragon_fruit_bowl.png',
    macros: { calories: 380, protein: 14, carbs: 58, fats: 10 },
    dietary: ['Vegan', 'Organic', 'Gluten-Free'],
    isPopular: true,
    description: 'Organic pink pitaya and Amazonian acai blended smooth, topped with fresh berries, chia seeds, and toasted coconut.',
    ingredients: ['Organic Pink Pitaya', 'Wild Amazon Acai', 'Raw Coconut Milk', 'Chia Seeds', 'Blueberries', 'Raspberries', 'Coconut Flakes']
  },
  {
    id: 'truffle-mushroom-wrap',
    name: 'Truffle Mushroom Wrap',
    category: 'Artisanal Wraps',
    price: 16.25,
    rating: 4.8,
    reviews: 76,
    image: '/assets/truffle_wrap.png',
    macros: { calories: 460, protein: 26, carbs: 48, fats: 18 },
    dietary: ['Vegan', 'Organic'],
    isPopular: false,
    description: 'Slow-roasted oyster and shiitake mushrooms in white truffle cashew cream, wrapped in an organic spinach tortilla with baby arugula.',
    ingredients: ['Oyster Mushrooms', 'Shiitake Mushrooms', 'Spinach Tortilla', 'White Truffle Cashew Cream', 'Baby Arugula', 'Sun-dried Tomatoes']
  },
  {
    id: 'artisanal-matcha-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'Drinks & Smoothies',
    price: 7.95,
    rating: 4.9,
    reviews: 215,
    image: '/assets/matcha_latte.png',
    macros: { calories: 140, protein: 6, carbs: 18, fats: 4 },
    dietary: ['Vegan', 'Organic', 'Gluten-Free'],
    isPopular: true,
    description: 'First-harvest ceremonial Uji matcha stone-ground and whisked with steamed sprouted oat milk and raw monkfruit.',
    ingredients: ['Ceremonial Uji Matcha', 'Sprouted Oat Milk', 'Monkfruit Extract', 'Vanilla Bean']
  },
  {
    id: 'raw-cacao-protein-bites',
    name: 'Cacao Pistachio Bliss Balls',
    category: 'Superfood Bites',
    price: 9.99,
    rating: 4.9,
    reviews: 110,
    image: '/assets/superfood_snack.png',
    macros: { calories: 280, protein: 16, carbs: 24, fats: 14 },
    dietary: ['Vegan', 'Keto', 'High Protein', 'Organic'],
    isPopular: false,
    description: 'Hand-rolled energy spheres with raw Ecuadorian cacao, sprouted pumpkin seeds, almond protein, and crushed pistachios.',
    ingredients: ['Raw Cacao Paste', 'Sprouted Almond Flour', 'Organic Pumpkin Seeds', 'Crushed Pistachios', 'Ceylon Cinnamon']
  },
  {
    id: 'green-goddess-detox',
    name: 'Green Goddess Elixir',
    category: 'Drinks & Smoothies',
    price: 11.50,
    rating: 4.8,
    reviews: 84,
    image: '/assets/hero_pure_bites.png',
    macros: { calories: 120, protein: 4, carbs: 26, fats: 1 },
    dietary: ['Vegan', 'Organic', 'Gluten-Free'],
    isPopular: false,
    description: 'Cold-pressed organic Tuscan kale, English cucumber, green apple, fresh ginger, lemon, and a touch of wild spirulina.',
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
