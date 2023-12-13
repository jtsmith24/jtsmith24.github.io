import type { CollectionEntry } from "astro:content";

const getSortedRecipes = (recipes: CollectionEntry<"cookbook">[]) =>
  recipes
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );

export default getSortedRecipes;
