import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../components/Modal';
import { TodoList } from '../components/TodoList';
import { Error } from '../components/Error';
import { Todo } from '../models/Todo';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { Loader } from '../components/Loader';
import { TodoListEmpty } from '../components/TodoListEmpty';
import { TodoListNoResults } from '../components/TodoListNoResults';
import { TodoHeader } from '../components/TodoHeader';
import './App.css';
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert';

function App() {
  const { loading,
    error,
    searchedTodos,
    searchValue,
    setSearchValue,
    filterValue,
    setFilterValue,
    toggleModal,
    toggleCompleteTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    setToggleModal,
    createTodo,
    sincronizeTodos
  } = useTodos();

  const handleTodoListStatus = () => {
    // Loading
    if (loading)                return <Loader />;
    // Error
    if (error)                  return <Error error={error} />;
    // No exists TODOs
    if (!totalTodos)            return <TodoListEmpty />;
    // No search / filter results
    if (!searchedTodos.length)  return <TodoListNoResults />;

    // Normal render
    return searchedTodos.map((todo: Todo) => (
      <TodoItem
        todo={todo}
        key={todo.text}
        onComplete={toggleCompleteTodo}
        onDelete={deleteTodo}
      />
    ))
  }

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          loading={loading}
        />
      </TodoHeader>

      <TodoList>{ handleTodoListStatus() }</TodoList>

      <CreateTodoButton setToggleModal={setToggleModal}/>
      {
        toggleModal &&
        <Modal>
          <CreateTodoForm
            setToggleModal={setToggleModal}
            createTodo={createTodo}
          />
        </Modal>
      }

      <ChangeAlertWithStorageListener
        setToggleModal={setToggleModal}
        sincronize={sincronizeTodos} 
      />
    </React.Fragment>
  )
}

export default App;
