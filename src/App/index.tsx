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
    createTodo
  } = useTodos();

  const handleTodoListStatus = () => {
    // Loading
    if (loading) return <Loader />;
    // Error
    if (error)   return <Error error={error} />;
    
    // Normal
    if (searchedTodos.length) {
      return searchedTodos.map((todo: Todo) => (
        <TodoItem
          todo={todo}
          key={todo.text}
          onComplete={toggleCompleteTodo}
          onDelete={deleteTodo}
        />
      ))
    }
    
    // No results
    if (searchValue.length)     return <TodoListNoResults />;
    if (filterValue !== 'none') return <TodoListNoResults />;

    // No exists TODOs
    return <TodoListEmpty />;
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
        />
      </TodoHeader>

      <TodoList>{ handleTodoListStatus() }</TodoList>

      <CreateTodoButton setToggleModal={setToggleModal}/>
      {
        toggleModal &&
        <Modal>
          <CreateTodoForm setToggleModal={setToggleModal} createTodo={createTodo}/>
        </Modal>
      }
    </React.Fragment>
  )
}

export default App;
