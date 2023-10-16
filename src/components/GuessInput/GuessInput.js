import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants' ;

function Guess({guesses, setGuesses}) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      const newGuess = {guess, id: crypto.randomUUID()} ;
      setGuesses( [...guesses, newGuess]) ;
    }
    setGuess('')
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess} 
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}" 
        onChange={e => {
          let yourGuess = e.target.value.toUpperCase() ;
          setGuess(yourGuess);
        }}
        />
  </form>
  </div>;
}

export default Guess;
