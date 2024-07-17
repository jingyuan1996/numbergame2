import { useState } from "react";
import "./App.css";
import "./w3.css";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function Repoheader(props) {
  return <h2>{props.text}</h2>;
}

function App() {
  const [targetNumber, setTargetNumber] = useState(getRandomNumber);
  const [guessNumber, setGuessNumber] = useState(0);
  const [message, setMessage] = useState("guess a number");

  const handleReset = () => {
    setTargetNumber(getRandomNumber());
    setMessage("guess a number");
  };

  const handleGuessChange = (e) => {
    setGuessNumber(e.target.value);
  };

  const handleAnsSubmit = () => {
    if (isNaN(guessNumber)) {
      setMessage("guess a number");
    } else if (guessNumber == targetNumber) {
      setMessage("correct");
    } else if (guessNumber < targetNumber) {
      setMessage("tooSmall");
    } else {
      setMessage("tooLarge");
    }
  };

  return (
    <>
      <h1>guess number game 1-100</h1>
      <Repoheader text={message} />
      <input
        type="number"
        value={guessNumber}
        onChange={handleGuessChange}
        min="1"
        max="100"
        className="w3-input"
      ></input>
      <br></br>
      <button className="button_test" onClick={handleAnsSubmit}>
        your
      </button>
      <br></br>
      <button className="button_test" onClick={handleReset}>
        restart game
      </button>
    </>
  );
}

export default App;
