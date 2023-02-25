import Heading from "./Heading";

export default function NoTask() {
	return (
		<div className="text-center">
			<h1 className="text-6xl">🔮</h1>
			<Heading
				title="No Task"
				subTitle={"Try making a new task so you can see it here"}
			/>
		</div>
	);
}
