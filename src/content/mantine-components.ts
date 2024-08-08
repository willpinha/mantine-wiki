export const mantineComponentsNames = ["Button"] as const;

export type MantineComponentName = (typeof mantineComponentsNames)[number];

export type MantineComponentInfo = {
	docs: string;
};

export const mantineComponents: Record<
	MantineComponentName,
	MantineComponentInfo
> = {
	Button: {
		docs: "https://mantine.dev/core/button/",
	},
};
