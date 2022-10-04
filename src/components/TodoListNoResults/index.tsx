import React, { FC } from 'react'; 
import './TodoListNoResults.css';

const TodoListNoResults:FC = () => {
  return (
    <div className='TodoListNoResults'>
      <h2>No results</h2>
      <p>Try changing the search</p> 
    </div>
  )
}

export { TodoListNoResults };
