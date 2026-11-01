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
];
