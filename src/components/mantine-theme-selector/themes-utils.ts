import {
	createTheme,
	DEFAULT_THEME,
	mergeMantineTheme,
	type CSSVariablesResolver,
	type MantineTheme,
	type MantineThemeColors,
	type MantineThemeOverride,
} from "@mantine/core";

type Color = [
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
];

type CustomColors = {
	primary: Color;
};

type CustomThemeConfig = MantineThemeOverride & {
	colors: CustomColors;
};

export type CustomTheme = MantineTheme & {
	colors: MantineThemeColors & CustomColors;
};

export function createCustomTheme(config: CustomThemeConfig): CustomTheme {
	return mergeMantineTheme(
		DEFAULT_THEME,
		createTheme({ ...config, primaryColor: "primary" }),
	) as CustomTheme;
}

export const resolver: CSSVariablesResolver = (theme) => {
	return {
		variables: {},
		dark: {},
		light: {
			"--mantine-color-text": theme.colors.dark[0],
			"--mantine-color-body": theme.colors.dark[9],
			"--mantine-color-placeholder": "",
			"--mantine-color-anchor": theme.colors.primary[5],
			"--mantine-color-dimmed": "",
			"--mantine-color-default-border": "",
			"--mantine-color-default-hover": "",
			"--mantine-color-default": "",
		},
	};
};
