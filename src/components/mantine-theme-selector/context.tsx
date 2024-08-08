import { MantineProvider, type MantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { createContext, useContext } from "react";
import { themes } from "./themes";

type MultipleThemeContextType = {
	theme: MantineTheme;
	setThemeName: (themeName: string) => void;
};

const MultipleThemeContext = createContext<MultipleThemeContextType>({
	theme: themes.light,
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
		defaultValue: "light",
	});

	return (
		<MultipleThemeContext.Provider
			value={{
				theme: themes[themeName],
				setThemeName,
			}}
		>
			<MantineProvider theme={themes[themeName]}>
				{children}
			</MantineProvider>
		</MultipleThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(MultipleThemeContext);
}
