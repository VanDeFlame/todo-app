import React from 'react';
import { useParams } from 'react-router-dom';

import { useTodos } from 'hooks/useTodos';
import { TodoForm } from 'components/TodoForm';
import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';

function EditPage() {  
  const { todoId } = useParams<any>();

  const { state, stateUpdaters, functions } = useTodos();
  const { loading } = state;
  const { editTodo } = stateUpdaters;
  const { findTodo } = functions;

  // ID is an number?
  const id = Number(todoId ?? '');
  if (isNaN(id)) return (<NotFound />);
  
  // need loading?
  if (loading) return (<Loader />)

  // Exists a TODO?
  const todo = findTodo(id);
  if (!todo) return (<NotFound />);


  const submitAction = (todoText: string) => {
    editTodo({
      ...todo,
      text: todoText,
    });
  }

  return (    
    <React.Fragment>
      <TodoForm 
        actionType='Edit'
        submitAction={submitAction}
        todoText={todo.text}
      />
    </React.Fragment>
  )
}

export { EditPage };
