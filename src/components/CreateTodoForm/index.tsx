import React, { FC, useContext, useState } from 'react'; 
import { TodoContext } from '../TodoContext';
import './CreateTodoForm.css';

const CreateTodoForm:FC = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const { setToggleModal, createTodo } = useContext(TodoContext);
  
  const onChange = (event: any) => {
    setNewTodoName(event.target.value);
  }

  const onCancel = () => {
    setTimeout(() => setToggleModal(false), 250)
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    createTodo(newTodoName);
    onCancel();
  }

  return (
    <form onSubmit={onSubmit}  className='CreateTodoForm'>
      <label className='CreateTodoForm--title'>Create a TODO</label>

      <textarea
        className='CreateTodoForm--input text-area'
        name='text'
        placeholder='Make my TODO list'
        value={newTodoName}
        onChange={onChange}
      />

      <div className='CreateTodoForm--actions'>
        <button 
          className='CreateTodoForm--actions--button button' 
          type='button'
          onClick={onCancel}
        >Cancel</button>

        <button 
          className='CreateTodoForm--actions--button button' 
          type='submit'
        >Create</button>
      </div>
    </form>
  )
}

export { CreateTodoForm };
