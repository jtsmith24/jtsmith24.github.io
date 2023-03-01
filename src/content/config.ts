import { defineCollection } from "astro:content";
import { recipeSchema } from "./_schemas";

const recipes = defineCollection({
  schema: recipeSchema,
});

export const collections = { recipes };
