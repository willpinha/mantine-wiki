import { SomeButton } from "@/components/some-button";

export const componentNames = ["some-button"] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, React.ReactNode> = {
	"some-button": <SomeButton />,
};
