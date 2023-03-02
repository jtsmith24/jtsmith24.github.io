import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (entry: CollectionEntry<any>[]) => {
  let tags: string[] = [];
  const filteredPosts = entry.filter(({ data }) => !data.draft);
  filteredPosts.forEach(entry => {
    tags = [...tags, ...entry.data.tags]
      .map(tag => slugifyStr(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return tags;
};

export default getUniqueTags;
