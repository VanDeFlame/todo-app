import React from 'react'; 
import { useHistory } from 'react-router-dom';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const history = useHistory();

  const onCreateTodo = () => {
    history.push('/new');
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
