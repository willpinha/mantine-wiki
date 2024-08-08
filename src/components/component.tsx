const modules = import.meta.glob("../content/wiki/**/index.tsx", {
	eager: true,
});

export function SomeComponent({ x }: { x: string }) {
	const Comp = modules[x].default;

	return <Comp />;
}
