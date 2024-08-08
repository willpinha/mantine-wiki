import { defineCollection, reference, z } from "astro:content";
import { componentNames } from "./components";
import { mantineComponentsNames } from "./mantine-components";
import { tagNames } from "./tags";

const schema = z.object({
	title: z.string(),
	description: z.string(),
	component: z.enum(componentNames),
	tags: z.array(z.enum(tagNames)),
	inspirations: z.array(z.string().url()),
	mantineComponents: z.array(z.enum(mantineComponentsNames)),
	related: z.array(reference("wiki")),
});

export type FrontMatter = z.infer<typeof schema>;

const wikiCollection = defineCollection({ type: "content", schema });

export const collections = {
	wiki: wikiCollection,
};
