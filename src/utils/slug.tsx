import type { ElementType } from "react";

/**
 * Receives a slug like /myComponent/details and returns the camel case name "myComponent". You can
 * use this to import React components dynamically in /myComponent/index.tsx
 *
 * @param slug Slug from the URL
 * @returns Camel case name
 */
export function extractCamelCaseName(slug: string) {
	return slug.split("/")[0];
}

/**
 * Receives a slug like /myComponent/details and returns the sentence case name "My component". You
 * can use this to display the component name in a title or a header
 *
 * @param slug Slug from the URL
 * @returns Sentence case name
 */
export function extractSentenceCaseName(slug: string) {
	const camelCase = extractCamelCaseName(slug);

	let result = camelCase.replace(/([A-Z])/g, " $1"); // Insert a space before all capital letters

	result = result.toLowerCase();

	result = result.charAt(0).toUpperCase() + result.slice(1); // Capitalize the first letter

	return result;
}

const componentModules = import.meta.glob("../content/wiki/**/index.tsx", {
	eager: true,
});

export function ExtractComponent({ slug }: { slug: string }): React.ReactNode {
	const camelCase = extractCamelCaseName(slug);
	const path = `../content/wiki/${camelCase}/index.tsx`;

	const module = componentModules[path] as { default: ElementType };
	const Component = module.default;

	return <Component />;
}
