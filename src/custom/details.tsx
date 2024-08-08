import { Box } from "@mantine/core";

type ComponentWindowProps = {
	children: React.ReactNode;
};

export function ComponentWindow({ children }: ComponentWindowProps) {
	return (
		<Box bd="1px solid gray.3" p="xs" style={{ borderRadius: 5 }}>
			{children}
		</Box>
	);
}
