import React, { FC } from 'react'; 
import { Todo } from '../../models/Todo';
import './TodoItem.css';

interface Props {
  todo: Todo;
  onComplete: Function;
  onDelete: Function;
} 

const TodoItem:FC<Props> = (props) => {
  const {text, completed} = props.todo;
  
  return (
    <li className={`TodoItem ${completed ? 'TodoItem__completed' : ''}`}>

      <span
        className='TodoItem--status icon'
        onClick={() => props.onComplete(text)}
      >
        <i className={`bi ${completed ? 'bi-patch-check' : 'bi-patch-minus'}`} />
      </span>

      <p className='TodoItem--text'>
        { text }
      </p>

      <span
        title='Delete TODO'
        className='TodoItem--delete'
        onClick={() => props.onDelete(text)}
      >
        <i className='bi bi-x'/>
      </span>
    </li>
  )
}

export { TodoItem };
