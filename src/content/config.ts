import { defineCollection, reference, z } from "astro:content";

const wikiCollection = defineCollection({
	type: "content",
	schema: z.object({
		description: z.string(),
		tags: z.array(z.string()),
		inspirations: z.array(z.string().url()),
		mantineComponents: z.array(z.string()),
		related: z.array(reference("wiki")),
	}),
});

export const collections = {
	wiki: wikiCollection,
};
