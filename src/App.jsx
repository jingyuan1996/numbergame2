import { useState } from "react";
import "./App.css";

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
      <Repoheader text={targetNumber} />
      <Repoheader text={guessNumber} />
      <input
        type="number"
        value={guessNumber}
        onChange={handleGuessChange}
        min="1"
        max="100"
      ></input>
      <button onClick={handleAnsSubmit}>your </button>
      <button onClick={handleReset}>restart game </button>
    </>
  );
}

export default App;
