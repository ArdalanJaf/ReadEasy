import { useState } from "react";
import Welcome from "./components/Welcome";
import Letter from "./components/Letter";
import "./normalize.css";
import "./App.scss";

const App = () => {
  const [letter, setLetter] = useState();

  const onKeyDown = (e) => {
    setLetter(e.key);
  };

  return (
    <div
      className="container"
      onKeyDown={onKeyDown}
      tabIndex="0"
      style={{ height: "100vh" }}
    >
      <Welcome onKeyDown={onKeyDown} />
      {letter && <Letter letter={letter} />}
    </div>
  );
};

export default App;

// letter input needs joi validation incase of non-letter-keys
// accessibility
