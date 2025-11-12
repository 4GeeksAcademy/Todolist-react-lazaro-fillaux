import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css"
import { useState } from "react";


const Home = () => {
	const [tareas, setTareas] = useState([])
	const [imputValue, setImputValue] = useState("")

	function añadirTarea() {
		setTareas([...tareas, imputValue]);
	}

	function quitarTarea(index) {
		setTareas(tareas.filter((_, i) => i !== index));

	}





	return (
		<div className="todo">
			<div className="todo1">
				<h1 id="tit"><bold>TODO</bold></h1>
				<input
					type="text"
					className="TODOINPUT"
					placeholder="Que tienes en mente ..."
					onChange={(event) => setImputValue(event.target.value)}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							añadirTarea();
						}
					}}
				/>
				<ul>
					{tareas.map((tarea, index) => (
						<li key={index}>
							{tarea}
							<button onClick={() => quitarTarea(index)} className = "cruz">❌</button>
						</li>
					))}
					<p>hay {tareas.length} tareas</p>
				</ul>
			</div>
		</div>



	);
};

export default Home;