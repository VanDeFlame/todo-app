import React, { FC } from 'react'; 
import './TodoCounter.css';

interface Props {
  total: number;
  completed: number;
}

const TodoCounter:FC<Props> = ({total, completed}) => {

  return (
    <h2 className='TodoCounter'>
      Completed
      <span className={`TodoCounter--counter ${(completed === total) ? 'counter__completed' : ''}`}>
        {completed} of {total}
      </span>TODOs
    </h2>
  )
}

export { TodoCounter };
