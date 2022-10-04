import React, { FC, useState } from 'react'; 
import './CreateTodoForm.css';

interface Props {
  setToggleModal: Function
  createTodo: Function
}

const CreateTodoForm:FC<Props> = (props) => {
  const [newTodoName, setNewTodoName] = useState('');
  
  const onChange = (event: any) => {
    setNewTodoName(event.target.value);
  }

  const onCancel = () => {
    setTimeout(() => props.setToggleModal(false), 250)
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    props.createTodo(newTodoName);
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
