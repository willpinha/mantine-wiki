import { Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function MyComponent() {
	const { hovered, ref } = useHover();

	return (
		<div ref={ref}>
			<Button>{hovered ? "Hovered!" : "Hover me"}</Button>
		</div>
	);
}
