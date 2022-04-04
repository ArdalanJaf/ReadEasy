import LetterA from "./components/LetterA";
import LetterB from "./components/LetterB";
import LetterC from "./components/LetterC";
import { useState } from "react";
import Welcome from "./components/Welcome";

const App = () => {
	const [screen, setScreen] = useState(0);

	const onKeyDown = (e) => {
		switch (e.key) {
			case "a":
				setScreen(1);
				break;
			case "b":
				setScreen(2);
				break;
			case "c":
				setScreen(3);
				break;
		}
	};

	return (
		<div onKeyDown={onKeyDown} tabIndex="0" style={{ height: "100vh" }}>
			{screen === 0 && <Welcome onKeyDown={onKeyDown} />}
			{screen === 1 && <LetterA />}
			{screen === 2 && <LetterB />}
			{screen === 3 && <LetterC />}
		</div>
	);
};

export default App;
