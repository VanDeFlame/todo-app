import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useTodos } from 'hooks/useTodos';
import { CreateTodoButton } from 'components/CreateTodoButton';
import { TodoCounter } from 'components/TodoCounter';
import { TodoSearch } from 'components/TodoSearch';
import { TodoList } from 'components/TodoList';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';
import { TodoHeader } from 'components/TodoHeader';
import { ChangeAlert } from 'components/ChangeAlert';  
import { AllTodosPage } from './AllTodosPage';
import { SearchedTodosPage } from './SearchedTodosPage';

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
          loading={loading}
        />
      </TodoHeader>

      <TodoList 
        errorStatus={!!error}
        onError={() => (<Error error={error} />)}
        loadingStatus={loading}
        onLoading={() => (<Loader />)}
      >
        <Switch>
          <Route exact path={'/'}>
            <AllTodosPage 
              state={state}
              stateUpdaters={stateUpdaters}            
            />
          </Route>
          <Route path={`/search/:search`}>
            <SearchedTodosPage 
              state={state}
              stateUpdaters={stateUpdaters}            
            />
          </Route>
        </Switch>
      </TodoList>

      <CreateTodoButton />

      <ChangeAlert
        sincronize={sincronizeTodos} 
      />
    </React.Fragment>
  )
}

export { Home };
