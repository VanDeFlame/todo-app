import React from 'react';

import { AppTodo } from 'models/AppTodo';
import { Todo } from 'models/Todo';
import { TodoItem } from 'components/TodoItem';
import { TodoListEmpty } from 'components/TodoListEmpty';

interface Props {
  state: AppTodo['state'];
  stateUpdaters: AppTodo['stateUpdaters'];
}

function AllTodosPage({ state, stateUpdaters }: Props) {
  const { totalTodos, filteredTodos } = state;
  const { deleteTodo, completeTodo } = stateUpdaters;

  // No exists TODOS
  if (totalTodos <= 0) return <TodoListEmpty />;
  
  return (
    <React.Fragment>{
      filteredTodos.map((todo: Todo) => (
        <TodoItem
          todo={todo}
          key={'todo'+todo.id}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))
    }</React.Fragment>
  )
}

export { AllTodosPage };
