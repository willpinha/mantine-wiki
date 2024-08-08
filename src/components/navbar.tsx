import {
	ActionIcon,
	AppShell,
	Burger,
	Divider,
	Drawer,
	Group,
	Image,
	rem,
	Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Spotlight, spotlight } from "@mantine/spotlight";
import {
	IconBrandGithub,
	IconBrandMantine,
	IconCoffee,
	IconPalette,
	IconSearch,
	IconTags,
} from "@tabler/icons-react";

export function Navbar() {
	const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure();
	const [themesOpened, { toggle: toggleThemes, close: closeThemes }] =
		useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { desktop: true, mobile: !navbarOpened },
			}}
			padding="md"
		>
			<Drawer
				opened={themesOpened}
				onClose={closeThemes}
				title="Mantine themes"
				position="right"
				offset={15}
				radius="md"
				size="xs"
			>
				{/* Drawer content */}
			</Drawer>

			<Spotlight
				actions={[]}
				nothingFound="Nothing found..."
				highlightQuery
				searchProps={{
					leftSection: (
						<IconSearch
							style={{ width: rem(20), height: rem(20) }}
							stroke={1.5}
						/>
					),
					placeholder: "Search components by name...",
				}}
			/>

			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger
						opened={navbarOpened}
						onClick={toggleNavbar}
						hiddenFrom="sm"
						size="sm"
					/>

					<Group justify="space-between" style={{ flex: 1 }}>
						<ActionIcon size="xl" component="a" href="/">
							<Image src="/logo.svg" w={35} />
						</ActionIcon>

						<Group>
							<Tooltip label="Tags">
								<ActionIcon>
									<IconTags />
								</ActionIcon>
							</Tooltip>

							<Tooltip label="Mantine components">
								<ActionIcon>
									<IconBrandMantine />
								</ActionIcon>
							</Tooltip>

							<Tooltip label="Search components">
								<ActionIcon onClick={spotlight.open}>
									<IconSearch />
								</ActionIcon>
							</Tooltip>

							<Tooltip label="Themes">
								<ActionIcon onClick={toggleThemes}>
									<IconPalette />
								</ActionIcon>
							</Tooltip>

							<Divider orientation="vertical" />

							<Tooltip label="Buy me a coffee">
								<ActionIcon>
									<IconCoffee />
								</ActionIcon>
							</Tooltip>

							<Tooltip label="GitHub">
								<ActionIcon>
									<IconBrandGithub />
								</ActionIcon>
							</Tooltip>
						</Group>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar>Navbar</AppShell.Navbar>
		</AppShell>
	);
}
