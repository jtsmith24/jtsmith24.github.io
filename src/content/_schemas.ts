import { z } from "astro:content";

export const recipeSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date().optional(),
    title: z.string(),
    pinned: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type RecipeFrontmatter = z.infer<typeof recipeSchema>;
