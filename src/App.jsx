import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Heading from "./components/Heading";
import NoTask from "./components/NoTask";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
	const [allTasks, setAllTasks] = useState([]);

	const getLocalData = () => JSON.parse(localStorage.getItem("storedTask"));

	const addNewTask = (task) => {
		const newTask = { taskId: uuidv4(), task };

		setAllTasks([...allTasks, newTask]);
	};

	const deleteTask = (currentId) => {
		const confirmDelete = confirm("Are you sure you want to delete this task");
		if (!confirmDelete) {
			return;
		} else {
			setAllTasks(allTasks.filter((task) => task.taskId !== currentId));
		}
	};

	/* When componentMounts get stored task from localStorage
	 * then update the allTask's state only ONCE
	 */
	useEffect(() => {
		const localData = getLocalData();
		if (localData != null) {
			setAllTasks(localData);
		}
	}, []);

	/* Always update/store the task in localStorage
	 * whenever the allTask's state changes
	 */
	useEffect(() => {
		if (allTasks.length) {
			localStorage.setItem("storedTask", JSON.stringify(allTasks)); // Store the state in localStorage
		} else {
			localStorage.clear();
		}
	}, [allTasks]);

	return (
		<div className="bg-slate-900 text-white h-screen px-10 lg:px-44 grid grid-flow-row content-center gap-y-10">
			<div className="mx-auto">
				<Heading
					title={"Task Manager"}
					subTitle="A simple way to manage your tasks, anywhere"
				/>
				<TaskForm onAddTask={addNewTask} />
			</div>
			<div className="lg:mx-20">
				{allTasks.length > 0 ? (
					<TaskList displayedTasks={allTasks} whenDelete={deleteTask} />
				) : (
					<NoTask />
				)}
			</div>
		</div>
	);
}

export default App;
