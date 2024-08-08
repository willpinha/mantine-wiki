import {
	ActionIcon,
	Button,
	ColorSwatch,
	Drawer,
	Group,
	Stack,
	Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPalette } from "@tabler/icons-react";
import { useTheme } from "./context";
import { themes } from "./themes";

export function MantineThemeSelector() {
	const [opened, { toggle, close }] = useDisclosure();
	const { setThemeName } = useTheme();

	return (
		<>
			<Drawer
				opened={opened}
				onClose={close}
				title="Mantine themes"
				position="right"
				offset={15}
				radius="md"
				size="xs"
			>
				<Stack>
					{Object.entries(themes).map(([name, theme]) => {
						const primary = theme.colors.primary[5];

						return (
							<Button
								key={name}
								variant="default"
								justify="space-between"
								fullWidth
								leftSection={name}
								onClick={() => setThemeName(name)}
							>
								<Group ml="md" gap="xs">
									<ColorSwatch size={20} color={primary} />
									<ColorSwatch size={20} color={primary} />
									<ColorSwatch size={20} color={primary} />
								</Group>
							</Button>
						);
					})}
				</Stack>
			</Drawer>

			<Tooltip label="Themes">
				<ActionIcon onClick={toggle}>
					<IconPalette />
				</ActionIcon>
			</Tooltip>
		</>
	);
}
