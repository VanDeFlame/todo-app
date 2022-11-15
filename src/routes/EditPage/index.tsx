import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useTodos } from 'hooks/useTodos';
import { TodoForm } from 'components/TodoForm';
import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';

function EditPage() {  
  const { todoId } = useParams();
  const location = useLocation();

  const { state, stateUpdaters, functions } = useTodos();
  const { loading } = state;
  const { editTodo } = stateUpdaters;
  const { findTodo } = functions;

  // ID is an number?
  const id = Number(todoId ?? '');
  if (isNaN(id)) return (<NotFound />);
  
  // Location is empty and need loading?
  const locationTodo = location.state?.todo;
  if (!locationTodo && loading) return (<Loader />)

  // Exists a TODO?
  const todo = locationTodo ?? findTodo(id);
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
