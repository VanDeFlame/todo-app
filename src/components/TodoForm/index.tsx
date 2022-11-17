import React from 'react';
import { useHistory } from 'react-router-dom';
import './TodoForm.css';

interface Props {
  actionType: string;
  submitAction: Function;
  todoText?: string;
}

function TodoForm({actionType, submitAction, todoText}: Props) {
  const history = useHistory();

  const onCancel = () => {
    history.push('/');
  }
  
  const onSubmit = (event: any) => {
    event.preventDefault();
    const todoText = new FormData(event.target).get('text') as string;
    submitAction(todoText)    
    history.push('/');
  }

  return (
    <form onSubmit={onSubmit}  className='TodoForm'>
      <h2 className='TodoForm--title'>
        { `${actionType.toUpperCase()} TODO` }
      </h2>

      <textarea
        className='TodoForm--input text-area'
        name='text'
        placeholder='Make my TODO list'
        defaultValue={todoText}
      />

      <div className='TodoForm--actions'>
        <button 
          className='TodoForm--actions--button button' 
          type='button'
          onClick={onCancel}
        >Cancel</button>

        <button 
          className='TodoForm--actions--button button' 
          type='submit'
        >{ actionType }</button>
      </div>
    </form>
  )
}

export { TodoForm };
