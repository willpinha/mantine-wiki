import "@mantine/core/styles.css";

import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import { CustomMantineProvider } from "@/components/mantine-theme-selector/context";
import { Shell } from "@/custom/shell";

type ClientPageProps = {
	children: React.ReactNode;
};

export function ClientPage({ children }: ClientPageProps) {
	return (
		<CustomMantineProvider>
			<Shell>{children}</Shell>
		</CustomMantineProvider>
	);
}
