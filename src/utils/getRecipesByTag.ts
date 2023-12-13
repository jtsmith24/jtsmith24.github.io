import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getRecipesBytag = (recipes: CollectionEntry<"cookbook">[], tag: string) =>
  recipes.filter(recipe => slugifyAll(recipe.data.tags).includes(tag));

export default getRecipesBytag;
