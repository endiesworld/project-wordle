import React from 'react';

function Guess({handleSubmitGuess, gameState}) {
  const [guess, setGuess] = React.useState(''); 

  function handleSubmit(event) {
    event.preventDefault();
    
    const newGuess = {guess, id: crypto.randomUUID()} ;
    handleSubmitGuess(  newGuess) ;
    
    setGuess('')
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        disabled={gameState.endGame}
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
