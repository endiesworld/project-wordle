import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessHolder from '../GuessHolder';
import EndGame from '../EndGame';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants' ;

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]) ;
  const [gameState, setGameState] = React.useState(
    {guessCount:0, endGame: false, gameState_: null}
    );
  

  function handleSubmitGuess(newGuess) {
    const guessUpdate = [...guesses, newGuess]
    setGuesses( guessUpdate ) ;

    let guessCount = guessUpdate.length ;
    let endGame = false;
    let gameState_ = null ;
    
    if((guessCount === NUM_OF_GUESSES_ALLOWED) || (newGuess.guess === answer)){
      endGame = true ;
      gameState_ = (newGuess.guess === answer)? "won" : "lost";
    }
    
    setGameState( {guessCount, endGame, gameState_})
  }

  return <>
            <GuessHolder guesses={guesses} answer={answer} />
            <GuessInput answer={answer} handleSubmitGuess={handleSubmitGuess} gameState={gameState}/>
            {gameState.endGame &&<EndGame answer={answer} gameState={gameState}/>}
          </>;
}

export default Game;
