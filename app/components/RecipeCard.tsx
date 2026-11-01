import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { title, emoji, description, minutes, difficulty, cuisine } = recipe;

  return (
    <article className="card">
      <div className="card-art" aria-hidden="true">
        {emoji}
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-meta">
          <span>⏱ {minutes} min</span>
          <span className={`difficulty difficulty-${difficulty.toLowerCase()}`}>
            {difficulty}
          </span>
          <span>{cuisine}</span>
        </div>
      </div>
    </article>
  );
}
