import { useState } from "react";

function NumberGuess() {
  const [guess, setGuess] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = (e) => {

    e.preventDefault();
    const user = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (user === number) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
      setWon(true);
    } else if (user < number) {
      setMessage("Try a higher number");
    } else {
      setMessage("Try a lower number");
    }
    setGuess('');
  };

  const handleReset = () => {
    setGuess('');
    setNumber(Math.floor(Math.random() * 20) + 1);
    setMessage('');
    setAttempts(0);
    setWon(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-2xl">
      {won && attempts === 1 && <p className="text-green-500 text-lg font-bold">🎉🎉Incredible! You guessed it on the First Try🎊🎊</p>}
      <h2 className="text-3xl font-bold mb-4">Guess The Number</h2>
      <p className="mb-4">Guess a number between 1 and 20</p>
      <form onSubmit={handleGuess} className="flex flex-col items-center">
        <input
          type="number"
          onChange={handleChange}
          value={guess}
          placeholder="Enter your guess"
          required
          className="mb-4 p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Guess</button>
      </form>
      {won && <button onClick={handleReset} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">Play Again</button>}
      <h3 className="mt-4 text-lg">{message}</h3>
    </div>
  );
}

export default NumberGuess;