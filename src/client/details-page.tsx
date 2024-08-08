import { components, type ComponentName } from "@/content/components";
import type { FrontMatter } from "@/content/config";
import { ComponentWindow } from "@/custom/details";
import { CodeHighlight } from "@mantine/code-highlight";
import { Stack, Text, Title } from "@mantine/core";
import Markdown from "react-markdown";
import { ClientPage } from "./page";

type DetailsPageProps = {
	slug: ComponentName;
	body: string;
	frontMatter: FrontMatter;
};

export function DetailsPage({ slug, body, frontMatter }: DetailsPageProps) {
	return (
		<ClientPage>
			<Stack>
				<Stack gap={5}>
					<Title order={1}>{frontMatter.title}</Title>

					<Text c="dimmed" size="lg">
						{frontMatter.description}
					</Text>
				</Stack>

				<ComponentWindow>{components[slug]}</ComponentWindow>

				<article>
					<Markdown
						components={{
							h1({ children }) {
								return <Title>{children}</Title>;
							},
							h2({ children }) {
								return <Title order={2}>{children}</Title>;
							},
							h3({ children }) {
								return <Title order={3}>{children}</Title>;
							},
							h4({ children }) {
								return <Title order={4}>{children}</Title>;
							},
							h5({ children }) {
								return <Title order={5}>{children}</Title>;
							},
							h6({ children }) {
								return <Title order={6}>{children}</Title>;
							},
							code({ lang, children }) {
								return (
									<CodeHighlight
										code={children as string}
										language={lang}
									/>
								);
							},
						}}
					>
						{body}
					</Markdown>
				</article>
			</Stack>
		</ClientPage>
	);
}
