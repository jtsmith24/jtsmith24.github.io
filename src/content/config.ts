import { z, defineCollection } from "astro:content";
import path from "path";
const glob = import.meta.glob("./**"); /* vite */

export const baseSchema = z.object({
  author: z.string().optional(),
  pubDatetime: z.date().optional(),
  title: z.string(),
  thumbnail: z.string().optional(),
  pinned: z.boolean().optional(),
  draft: z.boolean().optional(),
  postSlug: z.string().optional(),
  tags: z.array(z.string()).default(["others"]),
  ogImage: z.string().optional(),
  description: z.string(),
});

export type BaseFrontmatter = z.infer<typeof baseSchema>;

function assignCollection(acc: any, name: string) {
  return Object.assign(acc, {
    [name]: defineCollection({ schema: baseSchema }),
  });
}

export const collectionNames = Object.keys(glob).map(filepath =>
  path.basename(path.dirname(filepath))
);
export const allCollections = collectionNames.reduce(assignCollection, {});
