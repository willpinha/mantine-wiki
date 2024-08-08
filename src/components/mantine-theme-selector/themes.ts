import {
	createTheme,
	DEFAULT_THEME,
	mergeMantineTheme,
	type MantineTheme,
	type MantineThemeColors,
	type MantineThemeOverride,
} from "@mantine/core";

type CustomColors = {
	primary: [
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
};

type CustomThemeConfig = MantineThemeOverride & {
	colors: CustomColors;
};

interface CustomTheme extends MantineTheme {
	colors: MantineThemeColors & {
		primary: string;
	};
}

function createCustomTheme(config: CustomThemeConfig): CustomTheme {
	return mergeMantineTheme(DEFAULT_THEME, createTheme(config)) as CustomTheme;
}

export const themes: Record<string, CustomTheme> = {
	light: createCustomTheme({
		colors: {
			primary: [
				"#ffe9f6",
				"#ffd1e6",
				"#faa1c9",
				"#f66eab",
				"#f24391",
				"#f02881",
				"#f01879",
				"#d60867",
				"#c0005c",
				"#a9004f",
			],
		},
	}),
	dark: createCustomTheme({
		colors: {
			primary: [
				"#fff4e2",
				"#ffe9cc",
				"#ffd09c",
				"#fdb766",
				"#fca13a",
				"#fb931d",
				"#fc8c0c",
				"#e17900",
				"#c86a00",
				"#ae5a00",
			],
		},
	}),
};
