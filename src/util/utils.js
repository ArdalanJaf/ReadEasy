import axios from "axios";

export const textToSpeech = async (letter) => {
  const result =
    await axios.get(`http://api.voicerss.org/?key=fb7744e34d1740b28a2fdbdf58f7ee06&hl=en-uk&v=Amy&src=${letter}!
  `);
};
