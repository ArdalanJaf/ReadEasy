import { alphabet } from "../util/config";
import { textToSpeech, shake, expand } from "../util/utils";
import gsap from "gsap";

const Letter = (props) => {
  const { letter } = props;

  const interact = (data, animation) => {
    textToSpeech(data);
    animation();
  };

  return (
    <>
      <h2 onClick={() => interact(letter, shake)} className="title">
        {alphabet[letter].title}
      </h2>

      <img
        onClick={() => interact(alphabet[letter].animal, expand)}
        src={alphabet[letter].img}
        alt={letter.animal}
        className="img"
      />
    </>
  );
};

export default Letter;

// Show image
// Show p
// sound bite?
