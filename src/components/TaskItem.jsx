import { BiTrash } from "react-icons/bi";

export default function TaskItem({ title, onClick }) {
	return (
		<li className="h-12 flex-1 flex justify-between bg-gray-700/50 rounded-lg pl-10">
			<span className="text-lg my-auto leading-5 ">{title}</span>
			<button
				className="bg-red-500 hover:bg-red-400 text-2xl text-center p-3 rounded-r-lg"
				onClick={onClick}
			>
				<BiTrash />
			</button>
		</li>
	);
}
