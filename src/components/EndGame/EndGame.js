import React from 'react';

function EndGame({gameState, answer}){

    return (
      <>
        {
          (gameState.gameState_  === "won")? 
          <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{' '}{gameState.guessCount} guesses</strong>.
              </p>
          </div>
          :
          <div className="sad banner">
              <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
      
        }
      </>
    )
  }

export default EndGame;
