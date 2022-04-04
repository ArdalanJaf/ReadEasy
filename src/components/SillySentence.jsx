import { alphabet } from "../util/config";
import { textToSpeech } from "../util/utils";
import { useState } from "react";

const SillySentence = (props) => {
  const [completedLetters, setCompletedLetters] = useState();
  return (
    <div
      className="sillySentence"
      onClick={() => textToSpeech(alphabet[props.letter].phrase)}
    >
      <h4>Can you say this silly sentence?</h4>
      <h3>{alphabet[props.letter].phrase}.</h3>
      <img
        className="speaker"
        src="https://www.svgrepo.com/show/93256/volume.svg"
      />
      <button>Complete</button>
    </div>
  );
};

export default SillySentence;
