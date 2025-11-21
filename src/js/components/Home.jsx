import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css"
import { useState } from "react";


const Home = () => {

	const [tareas, setTareas] = useState([])
	const [imputValue, setImputValue] = useState("")

	function añadirTarea() {
		setTareas([...tareas, {
			"label": imputValue,
			"is_done": false
		}]);
		fetch('https://playground.4geeks.com/todo/todos/Lazarofillaux', {
			method: "POST",
			body: JSON.stringify({
				"label": imputValue,
				"is_done": false
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // Será true si la respuesta es exitosa
				console.log(resp.status); // El código de estado 201, 300, 400, etc.
				return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
			})
			.then(data => {
				// Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				// Manejo de errores
				console.log(error);
			});
	}

	function quitarTarea(index,id) {
		setTareas(tareas.filter((_, i) => i !== index));

		fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // Será true si la respuesta es exitosa
				console.log(resp.status); // El código de estado 201, 300, 400, etc.
				return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
			})
			.then(data => {
				// Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				// Manejo de errores
				console.log(error);
			});

	}

	useEffect(function () {
		fetch('https://playground.4geeks.com/todo/users/Lazarofillaux', {
			method: "GET",
		})
			.then(resp => {
				console.log(resp.ok); // Será true si la respuesta es exitosa
				console.log(resp.status); // El código de estado 201, 300, 400, etc.
				return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
			})
			.then(data => {
				// Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
				setTareas(data.todos)
			})
			.catch(error => {
				// Manejo de errores
				console.log(error);
			});

	}, [])





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
							{tarea.label}
							<button onClick={() => quitarTarea(index,tarea.id)} className="cruz">❌</button>
						</li>
					))}
					<p>hay {tareas.length} tareas</p>
				</ul>
			</div>
		</div>



	);

};

export default Home;