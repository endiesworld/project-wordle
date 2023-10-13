import React from 'react';

function Guess() {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess ) ;
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
