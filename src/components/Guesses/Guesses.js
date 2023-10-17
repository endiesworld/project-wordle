import React from 'react';
import {range} from '../../utils' ;
import {checkGuess} from '../../game-helpers.js';
import {NUM_OF_GUESSES_ALLOWED, WORD_LENGTH_ALLOWED } from '../../constants' ;


function Guesses({guesses, answer}) {
  const emptyCellsLength = NUM_OF_GUESSES_ALLOWED - guesses.length ;
  const emptyCells = range(emptyCellsLength) ;
  
  return <>
    {guesses.map(({guess, id}) => {
        const guess_n_status = checkGuess(guess, answer) ;
        return (
          <p key={id} className='guess'>
            {range(WORD_LENGTH_ALLOWED).map((data, index) => 
            {
              return (
                <span key={data} className= {`cell ${guess_n_status[index].status}`}>
                {guess_n_status[index].letter}
                </span>
            )}
            )}
          </p>
        );
        }
      )}
      {emptyCells.map( (data) => {
        return (
          <p key={data} className='guess'>
          {range(WORD_LENGTH_ALLOWED).map((data) => <span key={data} className="cell"></span>)}
          </p>
        )
      })}
  </>;
}

export default Guesses;
