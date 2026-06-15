import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    description: z.string(),
    summary: z.string(),
    pubDate: z.date(),
    revision: z.string(),
    ogImage: z.string(),
    toc: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
      })
    ),
  }),
});

export const collections = { essays };
