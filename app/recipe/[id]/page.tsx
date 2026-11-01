// app/recipe/[id]/page.tsx
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
import Link from "next/link";

// Opt out of instant route checking for this dynamic page
export const instant = false;

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="page">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium opacity-75 hover:opacity-100 transition-opacity"
        >
          ← Back to recipes
        </Link>

        <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-6">
          <div className="text-6xl" aria-hidden="true">
            {recipe.emoji}
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              {recipe.title}
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              {recipe.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-800 text-sm">
            <span className="px-3 py-1 rounded-full bg-neutral-800/80">
              ⏱ {recipe.minutes} minutes
            </span>
            <span
              className={`px-3 py-1 rounded-full bg-neutral-800/80 font-medium`}
            >
              {recipe.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800/80">
              🌍 {recipe.cuisine}
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Ingredients
              </h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Steps</h2>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
