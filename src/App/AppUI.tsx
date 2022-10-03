import React, { FC, useContext } from 'react'; 
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../components/Modal';
import { TodoList } from '../components/TodoList';
import { TodoContext } from '../components/TodoContext';
import { Error } from '../components/Error';
import { Todo } from '../models/Todo';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { Loader } from '../components/Loader';
import { TodoListEmpty } from '../components/TodoListEmpty';
import { TodoListNoResults } from '../components/TodoListNoResults';

const AppUI:FC = () => {
  const { loading,
          error,
          searchedTodos,
          searchValue,
          filterValue,
          toggleModal
        } = useContext(TodoContext)

  const handleTodoListStatus = () => {
    // Loading
    if (loading)                return <Loader />;
    // Error
    if (error)                  return <Error error={error} />;
    // No results
    if (searchValue.length)     return <TodoListNoResults />;
    if (filterValue !== 'none') return <TodoListNoResults />;
    // No exists TODOs
    if (!searchedTodos.length)  return <TodoListEmpty />;

    // Normal
    return searchedTodos.map((todo: Todo) => (
      <TodoItem
        todo={todo}
        key={todo.text}
      />
    ))
  }

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>{ handleTodoListStatus() }</TodoList>

      <CreateTodoButton />
      {
        toggleModal &&
        <Modal>
          <CreateTodoForm />
        </Modal>
      }
    </React.Fragment>
  )
}

export { AppUI };
