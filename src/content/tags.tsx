import type { MantineColor } from "@mantine/core";
import { IconClick } from "@tabler/icons-react";

export const tagNames = ["button"] as const;

export type TagName = (typeof tagNames)[number];

export type TagInfo = {
	icon: React.ReactNode;
	description: string;
	color: MantineColor;
};

export const tags: Record<TagName, TagInfo> = {
	button: {
		icon: <IconClick />,
		description: "Everything related to buttons",
		color: "blue",
	},
};
