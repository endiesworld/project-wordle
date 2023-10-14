import React from 'react';

function GuessHolder({guesses}) {

  return (
    <div className='guess-result'>
      {guesses.map(({guess, id}) => <p key={id} className='guess'>{guess}</p>)}
    </div>
  );
}

export default GuessHolder;
