import React from 'react';
import {range} from '../../utils' ;
import {NUM_OF_GUESSES_ALLOWED, WORD_LENGTH_ALLOWED } from '../../constants' ;


function Guesses({guesses}) {
  const emptyCellsLenght = NUM_OF_GUESSES_ALLOWED - guesses.length ;
  const emptyCells = range(emptyCellsLenght) ;
  return <>
    {guesses.map(({guess, id}) => {
        return (
          <p key={id} className='guess'>
            {range(WORD_LENGTH_ALLOWED).map((data, index) => <span key={data} className="cell">
              {guess[index]}
            </span>)}
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
