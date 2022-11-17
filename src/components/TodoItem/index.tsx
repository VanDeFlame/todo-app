import React, { FC, MouseEventHandler } from 'react'; 
import { useHistory } from 'react-router-dom';
import { Todo } from '../../models/Todo';
import './TodoItem.css';

interface Props {
  todo: Todo;
  onComplete: MouseEventHandler;
  onDelete: MouseEventHandler;
} 

const TodoItem:FC<Props> = ({todo, onComplete, onDelete}) => {
  const {text, completed} = todo;
  const history = useHistory()

  const onEdit = () => {
    history.push(`/edit/${todo.id}`)
  }

  return (
    <li className={`TodoItem ${completed ? 'TodoItem__completed' : ''}`}>

      <span
        className='TodoItem--status icon'
        onClick={onComplete}
      >
        <i className={`bi ${completed ? 'bi-patch-check' : 'bi-patch-minus'}`} />
      </span>

      <p className='TodoItem--text'>
        { text }
      </p>

      <span
        title='Delete TODO'
        className='TodoItem--action action__delete'
        onClick={onDelete}
      >
        <i className='bi bi-x'/>
      </span>

      <span
        title='Edit TODO'
        className='TodoItem--action action__edit'
        onClick={onEdit}
      >
        <i className='bi bi-pencil-fill'/>
      </span>
    </li>
  )
}

export { TodoItem };
