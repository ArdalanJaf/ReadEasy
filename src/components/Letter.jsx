import { alphabet } from "../util/config";
import { textToSpeech, shake } from "../util/utils";
import gsap from "gsap";

const Letter = (props) => {
  const { letter } = props;

  const interact = (data, movement) => {
    textToSpeech(data);
    movement();
  };

  return (
    <>
      <h2 onClick={() => interact(letter, shake)}>{alphabet[letter].title}</h2>

      <img
        onClick={() => textToSpeech(alphabet[letter].animal)}
        src={alphabet[letter].img}
        alt={letter}
      />
    </>
  );
};

export default Letter;

// Show image
// Show p
// sound bite?
