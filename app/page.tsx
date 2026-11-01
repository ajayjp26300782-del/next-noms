import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Find your next bite.</h1>
        <p>
          Browse {recipes.length} recipes from around the world — filter-free,
          fork-friendly, and ready when you are.
        </p>
      </header>

      <section
        id="recipes"
        aria-label="Recipe catalog"
        className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6"
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
