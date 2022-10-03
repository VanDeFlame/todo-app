import React, { FC, useContext } from 'react'; 
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const TodoCounter:FC = () => {
  const {completedTodos, totalTodos} = useContext(TodoContext);

  return (
    <h2 className='TodoCounter'>
      Completed
      <span className={`TodoCounter--counter ${(completedTodos === totalTodos) ? 'counter__completed' : ''}`}>
        {completedTodos} of {totalTodos}
      </span>TODOs
    </h2>
  )
}

export { TodoCounter };
