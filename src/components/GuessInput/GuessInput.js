import React from 'react';

function Guess({handleSubmitGuess, gameState, answer}) {
  const [guess, setGuess] = React.useState(''); 

  function handleSubmit(event) {
    event.preventDefault();
    
    const newGuess = {guess, id: crypto.randomUUID()} ;
    handleSubmitGuess(  newGuess) ;
    
    setGuess('')
  }

  function EndGame(){
    return (gameState.gameState_  === "won")? 
      ( <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{' '}{gameState.guessCount} guesses</strong>.
          </p>
        </div>
      ) :
      ( <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      {gameState.endGame ?<EndGame /> : <input 
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
      }
  </form>
  </div>;
}

export default Guess;
