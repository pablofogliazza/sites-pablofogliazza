import { z, defineCollection, reference } from "astro:content";

const tags = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
    }),
});


const skills = defineCollection ({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        level: z.string(),
        icon: z.string(),
        roles: reference('roles').optional(),
    }),
});

const roles = defineCollection({    
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        roles: z.array(reference('roles')).optional(),
    }),
});


const works = defineCollection({
  type: "content", // v2.5.0 y posteriores
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    excerpt: z.string(),
    skills: z.array(reference('skills')),
  }),
});

const posts = defineCollection({
  type: "content", // v2.5.0 y posteriores
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(reference('tags').optional()),
    image: image().refine((img) => img.width >= 1080, {
        message: 'Image width must be at least 1080px',
    }),
    imageAlt: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = {
    works,
    posts,
    skills,
    roles,
    tags,
};
