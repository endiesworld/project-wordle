import React from 'react';
import {range} from '../../utils' ;
import {NUM_OF_GUESSES_ALLOWED} from '../../constants' ;

function GuessHolder({guesses}) {
  const emptyCellsLenght = NUM_OF_GUESSES_ALLOWED - guesses.length ;
  const emptyCells = range(emptyCellsLenght) ;
  return (
    <div className='guess-result'>
      {guesses.map(({guess, id}) => {
        return (
          <p key={id} className='guess'>
            <span className="cell">{guess[0]}</span>
            <span className="cell">{guess[1]}</span>
            <span className="cell">{guess[2]}</span>
            <span className="cell">{guess[3]}</span>
            <span className="cell">{guess[4]}</span>
          </p>
        );
        }
      )}
      {emptyCells.map( (data) => {
        return (
          <p key={data} className='guess'>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
        )
      })}
    </div>
  );
}
//{guess.map((char, index) => <span key={`${char}-${index}`} className="cell">char</span>)}
          

export default GuessHolder;
