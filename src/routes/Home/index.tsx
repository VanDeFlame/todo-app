import React from 'react';
import { Outlet } from 'react-router-dom';

import { useTodos } from 'hooks/useTodos';
import { CreateTodoButton } from 'components/CreateTodoButton';
import { TodoCounter } from 'components/TodoCounter';
import { TodoSearch } from 'components/TodoSearch';
import { TodoList } from 'components/TodoList';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';
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
  } = state;

  const {
    onFilter,
    onSearch,

    sincronizeTodos,
  } = stateUpdaters;

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

      <TodoList 
        errorStatus={!!error}
        onError={() => (<Error error={error} />)}
        loadingStatus={loading}
        onLoading={() => (<Loader />)}
      >
        <Outlet context={{state, stateUpdaters}} />
      </TodoList>

      <CreateTodoButton />

      <ChangeAlert
        sincronize={sincronizeTodos} 
      />
    </React.Fragment>
  )
}

export { Home };
