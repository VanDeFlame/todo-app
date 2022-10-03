import React, { FC, useContext } from 'react'; 
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

const CreateTodoButton:FC = () => {
  const { setToggleModal } = useContext(TodoContext)

  return (
    <button
      title='Create new TODO'
      onClick={() => setToggleModal(true)}
      className='CreateTodoButton button'
    >
      <i className='bi bi-plus-lg' />
    </button>
  )
}

export { CreateTodoButton };
