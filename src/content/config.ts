import { z, defineCollection } from "astro:content";

const proyectoCollection = defineCollection({
  type: "content", // v2.5.0 y posteriores
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: "content", // v2.5.0 y posteriores
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = {
  proyectos: proyectoCollection,
  blog: blogCollection,
};
