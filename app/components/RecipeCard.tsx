import type { Recipe } from "../data/recipes";
import Link from "next/link";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { id, title, emoji, description, minutes, difficulty, cuisine } = recipe;

  return (
    <Link href={`/recipe/${id}`} className="card block group no-underline">
      <div className="card-art" aria-hidden="true">
        {emoji}
      </div>
      <div className="card-body">
        <h3 className="card-title group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
        <p className="card-description">{description}</p>
        <div className="card-meta">
          <span>⏱ {minutes} min</span>
          <span className={`difficulty difficulty-${difficulty.toLowerCase()}`}>
            {difficulty}
          </span>
          <span>{cuisine}</span>
        </div>
      </div>
    </Link>
  );
}
