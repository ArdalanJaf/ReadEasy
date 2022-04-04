import gsap from "gsap";

export const textToSpeech = (letter) => {
  try {
    let sound = new Audio(
      `http://api.voicerss.org/?key=fb7744e34d1740b28a2fdbdf58f7ee06&hl=en-gb&c=MP3&v=Amy&src=${letter}!`
    );
    sound.play();
  } catch (error) {
    console.log("error", error);
  }
};

export const shake = () => {
  gsap.to(".title", 0.1, { x: "+=20", yoyo: true, repeat: 5 });
};

export const expand = () => {
  gsap.to(".img", 0.1, { scale: 1.2, ease: "power2", yoyo: true, repeat: 1 });
};

// increase duration
