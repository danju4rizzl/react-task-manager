import { useState } from "react";

export default function TaskForm({ onAddTask }) {
	const [userValue, setUserValue] = useState("");
	const isEmpty = userValue.length;

	function handleSubmit() {
		if (!isEmpty) {
			return alert("You need to enter some text");
		}

		onAddTask(userValue);
		setUserValue(""); // to reset the form input
	}

	return (
		<div className="">
			<p className="text-sm text-center mb-3">
				Character:{" "}
				{isEmpty > 0
					? `${isEmpty} ${isEmpty === 70 ? "Max 🔴" : "🟢"}`
					: "None 🔴"}
			</p>
			<form className="flex" onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					name="taskInput"
					placeholder="Feed Bing at 3pm"
					maxLength={70}
					className="py-2 px-3 text-2xl rounded-lg text-center border outline-1 outline-current bg-slate-700/50"
					onChange={(e) => setUserValue(e.target.value)}
					value={userValue}
				/>

				<button
					className="py-1.5 px-8 mx-5 ease-in duration-300 rounded-md bg-red-500 hover:bg-red-400 "
					type="submit"
					onClick={handleSubmit}
				>
					Save Task
				</button>
			</form>
		</div>
	);
}
