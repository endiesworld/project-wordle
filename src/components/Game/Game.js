import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessHolder from '../GuessHolder';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  return <>
            <GuessHolder guesses={guesses} />
            <Guess guesses={guesses} setGuesses={setGuesses}/>
          </>;
}

export default Game;
