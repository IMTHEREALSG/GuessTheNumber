import { useState } from 'react';
import NumberGuess from './components/NumberGuess';
import './App.css';

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center h-screen w-screen bg-transparent animated-gradient'>
        {start ? (
          <NumberGuess />
        ) : ( 
          <div className=' group flex flex-col items-center justify-center shadow-2xl w-3/7 h-1/4 rounded-xl bg-zinc-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-zinc-700 p-4 '>
            <h1 className='text-5xl text-zinc-800 group-hover:text-white p-3 m-3 font-bold font-sans' >Guess The Number</h1>
            <button className='group-hover:text-white p-3 m-3 border-2 rounded-2xl bg-blue-400 border-blue-400 'onClick={() => setStart(true)}>Start Game</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
