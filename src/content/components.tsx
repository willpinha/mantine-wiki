import { MantineThemeSelector } from "@/components/mantine-theme-selector";
import { SomeButton } from "@/components/some-button";

export const componentNames = [
	"mantine-theme-selector",
	"some-button",
] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, React.ReactNode> = {
	"mantine-theme-selector": <MantineThemeSelector />,
	"some-button": <SomeButton />,
};
