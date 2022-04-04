const Welcome = (props) => {
  return (
    <div className="welcome">
      <h1>Read Easy </h1>
      <h2>Press a letter on your keyboard!</h2>
      {props.letter && <h2>Click the letter or the picture</h2>}
    </div>
  );
};

export default Welcome;
