import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import TÍTULO from "./TÍTULO";
import TODOINPUT from "./TODOINPUT";
import TODOLIST from "./TODOLIST";
import TODO from "./TODO";

//create your first component
const Home = () => {
	return (
		<div className="todo">
			<div className="todo1">
				<TÍTULO/>
				<TODOINPUT/>
				<TODOLIST>
					<h2>Todos list</h2>
				</TODOLIST>
			</div>
		</div>
	
	
	
	);
};

export default Home;