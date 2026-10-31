export type Difficulty = "Easy" | "Medium" | "Hard";

export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  minutes: number;
  difficulty: Difficulty;
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    description: "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil.",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    description: "Char-grilled cottage cheese marinated in yogurt and warm Indian spices.",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    description: "Smashed avocado on toasted sourdough finished with chili flakes and lime.",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "ramen-bowl",
    title: "Tonkotsu Ramen",
    emoji: "🍜",
    description: "Rich pork-bone broth with springy noodles, chashu, and a jammy egg.",
    minutes: 60,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "tacos-al-pastor",
    title: "Tacos al Pastor",
    emoji: "🌮",
    description: "Marinated pork with pineapple, onion, and cilantro on warm corn tortillas.",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Mexican",
  },
  {
    id: "caprese-salad",
    title: "Caprese Salad",
    emoji: "🥗",
    description: "Ripe tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze.",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Italian",
  },
  {
    id: "beef-bourguignon",
    title: "Beef Bourguignon",
    emoji: "🍲",
    description: "Slow-braised beef in red wine with pearl onions, mushrooms, and herbs.",
    minutes: 180,
    difficulty: "Hard",
    cuisine: "French",
  },
  {
    id: "blueberry-pancakes",
    title: "Blueberry Pancakes",
    emoji: "🥞",
    description: "Fluffy buttermilk pancakes studded with blueberries and real maple syrup.",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
  },
];
