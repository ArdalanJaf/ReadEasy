import { alphabet } from "../util/config";
import { textToSpeech, shake, expand } from "../util/utils";
import gsap from "gsap";
import SillySentence from "./SillySentence";

const Letter = (props) => {
  const { letter } = props;

  const interact = (data, animation) => {
    textToSpeech(data);
    animation();
  };

  return (
    //container
    <>
      <div className="letterContainer">
        <div className="header" onClick={() => interact(letter, shake)}>
          <h2 className="title">{alphabet[letter].title}</h2>
          <img
            className="speaker"
            src="https://www.svgrepo.com/show/93256/volume.svg"
          />
        </div>
        <div
          className="img"
          onClick={() => interact(alphabet[letter].animal, expand)}
        >
          <img
            className="animal"
            src={alphabet[letter].img}
            alt={letter.animal}
          />
          <img
            className="speaker"
            src="https://www.svgrepo.com/show/93256/volume.svg"
          />
        </div>
      </div>
      <SillySentence letter={letter} />
    </>
  );
};

export default Letter;
