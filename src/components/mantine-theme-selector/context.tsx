import { MantineProvider, type MantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { createContext, useContext } from "react";
import { themes } from "./themes";
import { resolver } from "./themes-utils";

type MultipleThemeContextType = {
	theme: MantineTheme;
	themeName: string;
	setThemeName: (themeName: string) => void;
};

const MultipleThemeContext = createContext<MultipleThemeContextType>({
	theme: themes.dracula,
	themeName: "dracula",
	setThemeName: () => {},
});

type CustomMantineProviderProps = {
	children: React.ReactNode;
};

export function CustomMantineProvider({
	children,
}: CustomMantineProviderProps) {
	const [themeName, setThemeName] = useLocalStorage({
		key: "theme",
		defaultValue: "dracula",
	});

	return (
		<MultipleThemeContext.Provider
			value={{
				theme: themes[themeName],
				themeName,
				setThemeName,
			}}
		>
			<MantineProvider
				theme={themes[themeName]}
				forceColorScheme="light"
				cssVariablesResolver={resolver}
			>
				{children}
			</MantineProvider>
		</MultipleThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(MultipleThemeContext);
}
