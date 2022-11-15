import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
  const navigate = useNavigate();

  const onCreateTodo = () => {
    navigate('new', { replace: true });
  }

  return (
    <button
      title='Create new TODO'
      onClick={onCreateTodo}
      className='CreateTodoButton button'
    >
      <i className='bi bi-plus-lg' />
    </button>
  )
}

export { CreateTodoButton };
