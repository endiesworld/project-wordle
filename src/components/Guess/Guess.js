import React from 'react';

function Guess() {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    let yourGuess = guess.toUpperCase() ;
    console.log(yourGuess ) ;
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
        onChange={e => {
          setGuess(e.target.value);
        }}
        />
  </form>
  </div>;
}

export default Guess;
