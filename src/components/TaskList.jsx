import TaskItem from "./TaskItem";

export default function TaskList({ displayedTasks, whenDelete }) {
	return (
		<ul className="flex flex-col-reverse gap-y-3 max-h-60 overflow-y-scroll px-6">
			{displayedTasks.map((item) => (
				<TaskItem
					title={item.task}
					key={item.taskId}
					onClick={() => whenDelete(item.taskId)}
				/>
			))}
		</ul>
	);
}
