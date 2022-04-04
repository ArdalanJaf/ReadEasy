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
    //container
    <>
      <h2 onClick={() => interact(letter, shake)} className="title">
        {alphabet[letter].title}
      </h2>
      <div className="img">
        <img
          onClick={() => interact(alphabet[letter].animal, expand)}
          src={alphabet[letter].img}
          alt={letter.animal}
        />
      </div>
    </>
  );
};

export default Letter;

// Show image
// Show p
// sound bite?
