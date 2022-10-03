import React, { FC, useContext } from 'react'; 
import { Todo } from '../../models/Todo';
import { TodoContext } from '../TodoContext';
import './TodoItem.css';

interface Props {
  todo: Todo;
} 

const TodoItem:FC<Props> = (props) => {
  const { toggleCompleteTodo, deleteTodo} = useContext(TodoContext);
  const {text, completed} = props.todo;
  
  return (
    <li className={`TodoItem ${completed ? 'TodoItem__completed' : ''}`}>

      <span
        className='TodoItem--status icon'
        onClick={() => toggleCompleteTodo(text)}
      >
        <i className={`bi ${completed ? 'bi-patch-check' : 'bi-patch-minus'}`} />
      </span>

      <p className='TodoItem--text'>
        { text }
      </p>

      <span
        title='Delete TODO'
        className='TodoItem--delete'
        onClick={() => deleteTodo(text)}
      >
        <i className='bi bi-x'/>
      </span>
    </li>
  )
}

export { TodoItem };
