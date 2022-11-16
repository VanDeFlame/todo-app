import React, { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { AppTodo } from 'models/AppTodo';
import { Todo } from 'models/Todo';
import { TodoItem } from 'components/TodoItem';
import { TodoListNoResults } from 'components/TodoListNoResults';

function SearchedTodosPage() {
  const { search } = useParams();

  const { state, stateUpdaters } = useOutletContext<AppTodo>();
  const { searchValue, searchedTodos } = state;
  const { deleteTodo, completeTodo, onSearch } = stateUpdaters;
  
  // Update the search
  useEffect(() => {
    if (searchValue !== search) {
      onSearch(search);
    }
  }, [search])

  // No search / filter results
  if (!searchedTodos.length) return <TodoListNoResults />;

  return (
    <React.Fragment>{
      searchedTodos.map((todo: Todo) => (
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

export { SearchedTodosPage };
