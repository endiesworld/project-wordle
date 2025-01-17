import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants' ;

import Guesses  from '../Guesses';

function GuessHolder({guesses, answer}) {
  
  const guesses_ = (guesses.length > NUM_OF_GUESSES_ALLOWED) ?
    guesses.slice(0, NUM_OF_GUESSES_ALLOWED) : guesses ;
  
  return (
    <div className='guess-result'>
      <Guesses guesses={guesses_}  answer={answer}/>
    </div>
  );
}

export default GuessHolder;
