import React, { FC } from 'react'; 
import './CreateTodoButton.css';

interface Props {
  setToggleModal: Function;
}

const CreateTodoButton:FC<Props> = ({ setToggleModal }) => {

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
