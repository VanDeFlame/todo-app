import React, { FC } from 'react'; 
import './TodoListEmpty.css';

const TodoListEmpty:FC = () => {
  return (
    <div className='TodoListEmpty'>
      <h2>List empty</h2>
      <p>Create your first TODO!</p> 
    </div>
  )
}

export { TodoListEmpty };
