export type Difficulty = "Easy" | "Medium" | "Hard";

export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  minutes: number;
  difficulty: Difficulty;
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    description: "Classic Italian pizza with tomato, mozzarella, and basil.",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add mozzarella.",
      "Bake hot until the crust blisters, then top with basil.",
    ],
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    emoji: "🥘",
    description:
      "Rich and creamy north Indian curry made with paneer, tomatoes, and butter.",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Heavy cream",
      "Garam masala",
      "Kasuri methi",
    ],
    steps: [
      "Sauté onions, tomatoes, cashews, and spices, then blend into a smooth puree.",
      "Simmer the puree with butter, cream, and paneer cubes until fragrant.",
      "Garnish with kasuri methi and extra cream before serving with naan or rice.",
    ],
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    emoji: "🥞",
    description:
      "Crispy fermented rice and lentil crepe stuffed with spiced potato filling.",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: [
      "Dosa batter",
      "Potatoes",
      "Mustard seeds",
      "Curry leaves",
      "Turmeric",
      "Onions",
    ],
    steps: [
      "Prepare the filling by tempering mustard seeds, curry leaves, onions, and boiled spiced potatoes.",
      "Spread fermented batter thinly on a hot griddle and drizzle oil until golden and crisp.",
      "Place potato masala in the center, fold over, and serve hot with coconut chutney.",
    ],
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    emoji: "🍗",
    description:
      "Classic layered dish of marinated chicken and fragrant basmati rice cooked on dum.",
    minutes: 60,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: [
      "Basmati rice",
      "Chicken thighs",
      "Yogurt",
      "Fried onions (birista)",
      "Ginger-garlic paste",
      "Biryani masala",
      "Saffron milk",
      "Fresh mint & coriander",
    ],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, red chili powder, salt, and half the fried onions.",
      "Soak basmati rice for 30 minutes, then par-boil with whole spices until 70% done and drain.",
      "Sear the marinated chicken in a heavy-bottom pot until halfway cooked and a thick gravy forms.",
      "Layer the partially cooked basmati rice evenly over the chicken gravy in the pot.",
      "Top with remaining fried onions, chopped mint, coriander, ghee, and saffron milk.",
      "Seal the pot tightly with foil or dough and steam on low heat (dum) for 20 minutes before serving.",
    ],
  },
  {
    id: "chicken-shawarma",
    title: "Chicken Shawarma",
    emoji: "🌯",
    description:
      "Middle Eastern spiced marinated chicken grilled and wrapped in warm pita with toum.",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Middle Eastern",
    ingredients: [
      "Chicken thighs",
      "Greek yogurt",
      "Garlic paste",
      "Cumin & coriander",
      "Smoked paprika",
      "Pita bread",
      "Toum (garlic sauce)",
      "Pickles & tomatoes",
    ],
    steps: [
      "Whisk Greek yogurt, garlic paste, lemon juice, olive oil, cumin, coriander, paprika, and salt into a marinade.",
      "Coat the chicken thighs thoroughly and marinate in the refrigerator for at least 1 to 2 hours.",
      "Heat a heavy cast-iron skillet or grill over high heat and sear chicken until charred and fully cooked.",
      "Transfer cooked chicken to a cutting board, let rest briefly, then slice into thin, tender strips.",
      "Spread garlic toum on warm pita bread, then pile on sliced chicken, cucumber pickles, and sliced tomatoes.",
      "Roll tightly into a wrap, sear the seam-side down on the skillet until crispy, and serve warm.",
    ],
  },
];
