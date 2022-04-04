import { alphabet } from "../util/config";
import axios from "axios";

const Letter = (props) => {
  const { letter } = props;

  const textToSpeech = async (letter) => {
    try {
      const result =
        await axios.get(`http://api.voicerss.org/?key=fb7744e34d1740b28a2fdbdf58f7ee06&hl=en-gb&c=WAV&v=Amy&src=${letter}!
    `);
      console.log(result.data);
      let sound = new Audio(result.data);
      sound.play();
      return result.data; //function that makes the sound
    } catch (error) {
      console.log("error :(", error);
    }
  };

  return (
    <>
      <h2 onClick={() => textToSpeech(letter)}>{alphabet[letter].title}</h2>

      <img src={alphabet[letter].img} alt={letter} />
    </>
  );
};

export default Letter;

// Show image
// Show p
// sound bite?
