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

import { Shell } from "@/components/shell";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

type ClientPageProps = {
	children: React.ReactNode;
};

export function ClientPage({ children }: ClientPageProps) {
	return (
		<MantineProvider theme={theme}>
			<Shell>{children}</Shell>
		</MantineProvider>
	);
}
