import { alphabet } from "../util/config";
import { textToSpeech } from "../util/utils";
import { useState } from "react";

const SillySentence = (props) => {
  const [completedLetters, setCompletedLetters] = useState([]);

  const addToComplete = () => {
    const completedLettersCopy = [...completedLetters];
    if (!completedLettersCopy.includes(props.letter)) {
      completedLettersCopy.push(props.letter);
      completedLettersCopy.sort();
      setCompletedLetters(completedLettersCopy);
    }
  };

  return (
    <div className="sillySentence">
      <h4>Can you say this silly sentence?</h4>
      <div
        className="phrase"
        onClick={() => textToSpeech(alphabet[props.letter].phrase)}
      >
        <h3>{alphabet[props.letter].phrase}.</h3>
        <img
          className="speaker"
          src="https://www.svgrepo.com/show/93256/volume.svg"
          alt=""
        />
      </div>
      <button onClick={addToComplete}>Complete</button>
      {completedLetters.length > 0 && (
        <p className="completedLetters">{completedLetters.join(" ")}</p>
      )}
    </div>
  );
};

export default SillySentence;
