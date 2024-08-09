import { createCustomTheme, type CustomTheme } from "./themes-utils";

export const themes: Record<string, CustomTheme> = {
	dracula: createCustomTheme({
		colors: {
			primary: [
				"#f5ebff",
				"#e5d2ff",
				"#c5a1fa",
				"#a66df6",
				"#8a41f2",
				"#7926f1",
				"#7117f1",
				"#600cd7",
				"#5508c1",
				"#4801a9",
			],
			dark: [
				"hsla(230, 25%, 75%, 1)",
				"hsla(230, 25%, 68%, 1)",
				"hsla(230, 25%, 47%, 1)",
				"hsla(230, 25%, 37%, 1)",
				"hsla(230, 25%, 22%, 1)",
				"hsla(230, 25%, 20%, 1)",
				"hsla(230, 25%, 15%, 1)",
				"hsla(230, 25%, 11%, 1)",
				"hsla(230, 25%, 9%, 1)",
				"hsla(230, 25%, 5%, 1)",
			],
		},
		black: "#282a36",
		white: "#f8f8f2",
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
