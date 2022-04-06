import { useState } from "react";
import Welcome from "./components/Welcome";
import Letter from "./components/Letter";
import "./normalize.css";
import "./app.scss";

const App = () => {
	const [letter, setLetter] = useState("");

	const onKeyDown = (e) => {
		const letterNumber = /^[a-zA-Z]+$/;
		if (e.key.match(letterNumber) && e.key.length === 1) setLetter(e.key);
		else {
			setLetter("");
		}
	};

	return (
		<div
			className="container"
			onKeyDown={onKeyDown}
			tabIndex="0"
			style={{ height: "100vh" }}
		>
			<Welcome onKeyDown={onKeyDown} letter={letter} />
			{letter && <Letter letter={letter} />}
		</div>
	);
};

export default App;
