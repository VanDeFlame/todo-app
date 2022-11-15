import React from 'react';

import { useTodos } from 'hooks/useTodos';
import { Todo } from 'models/Todo';
import { CreateTodoButton } from 'components/CreateTodoButton';
import { TodoCounter } from 'components/TodoCounter';
import { TodoItem } from 'components/TodoItem';
import { TodoSearch } from 'components/TodoSearch';
import { TodoList } from 'components/TodoList';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';
import { TodoListEmpty } from 'components/TodoListEmpty';
import { TodoListNoResults } from 'components/TodoListNoResults';
import { TodoHeader } from 'components/TodoHeader';
import { ChangeAlert } from 'components/ChangeAlert';  

function Home() {
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchValue,
    filterValue,

    completedTodos,
    totalTodos,
    searchedTodos,
  } = state;

  const {
    onFilter,
    onSearch,

    deleteTodo,
    completeTodo,
    sincronizeTodos,
  } = stateUpdaters;

  const handleTodoListStatus = () => {
    // Loading
    if (loading)                return <Loader />;
    // Error
    if (!!error)                return <Error error={error} />;
    // No exists TODOs
    if (!totalTodos)            return <TodoListEmpty />;
    // No search / filter results
    if (!searchedTodos.length)  return <TodoListNoResults />;

    // Normal render
    return searchedTodos.map((todo: Todo) => (
      <TodoItem
        todo={todo}
        key={'todo'+todo.id}
        onComplete={() => completeTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    ))
  }

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
          filterValue={filterValue}
          onFilter={onFilter}
          searchValue={searchValue}
          onSearch={onSearch}
          loading={loading}
        />
      </TodoHeader>

      <TodoList>{ handleTodoListStatus() }</TodoList>

      <CreateTodoButton />

      <ChangeAlert
        sincronize={sincronizeTodos} 
      />
    </React.Fragment>
  )
}

export { Home };
