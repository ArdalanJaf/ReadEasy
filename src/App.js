import LetterA from "./components/LetterA";
import LetterB from "./components/LetterB";
import LetterC from "./components/LetterC";
import { useState } from "react";
import Welcome from "./components/Welcome";
import Letter from "./components/Letter";

const App = () => {
  const [screen, setScreen] = useState(0);
  const [letter, setLetter] = useState();

  const onKeyDown = (e) => {
    setLetter(e.key);
  };

  return (
    <div onKeyDown={onKeyDown} tabIndex="0" style={{ height: "100vh" }}>
      {screen === 0 && <Welcome onKeyDown={onKeyDown} />}
      {letter && <Letter letter={letter} />}
    </div>
  );
};

export default App;

// letter input needs joi validation incase of non-letter-keys
// accessibility
