import { ExtractComponent } from "@/utils/slug";
import type React from "react";
import { ClientPage } from "./page";

type DetailsPageProps = {
	slug: string; // /myComponent/details
	children: React.ReactNode;
};

export function DetailsPage({ slug, children }: DetailsPageProps) {
	return (
		<ClientPage>
			<ExtractComponent slug={slug} />

			{children}
		</ClientPage>
	);
}
