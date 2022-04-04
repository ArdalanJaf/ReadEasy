import gsap from "gsap";

export const textToSpeech = (letter) => {
  try {
    let sound = new Audio(
      `http://api.voicerss.org/?key=fb7744e34d1740b28a2fdbdf58f7ee06&hl=en-gb&c=MP3&v=Amy&src=${letter}!`
    );
    console.log("log:", letter);
    sound.play();
  } catch (error) {
    console.log("error", error);
  }
};

export const shake = () => {
  gsap.to(".title", 0.1, { x: "+=20", yoyo: true, repeat: 5 });
};

export const expand = () => {
  gsap.to(".img", 0.1, { x: "+=20", yoyo: true, repeat: 5 });
};
