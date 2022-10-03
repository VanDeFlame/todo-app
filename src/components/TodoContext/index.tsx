import React, { FC, createContext, ReactNode, useState } from 'react'; 
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ContextValue } from './ContextValue';
import { Todo } from '../../models/Todo';

const TodoContext = createContext({} as ContextValue);

interface Props {
  children: ReactNode;
}

// Default todos
const defaultTodos: Todo[] = [
  { text: 'Make CSS for the ToDo Item', completed: true },
  { text: 'Create the search bar logic', completed: true },
  { text: 'Organize a meetup', completed: false },
]

const TodoProvider:FC<Props> = (props) => {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage<Todo[]>('Todos', defaultTodos)
  
  // Filter and Search
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('none');

  // Modal
  const [toggleModal, setToggleModal] = useState(false);

  // Total and Completed
  const completedTodos = todos.filter(td => td.completed).length;
  const totalTodos = todos.length;

  // TODO functions
  const toggleCompleteTodo = (text: string) => {
    const i = todos.findIndex(td => td.text === text);
    const newTodos = [...todos];
    newTodos[i].completed = !todos[i].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  const createTodo = (text: string) => {
    const newTodo: Todo = {
      text: text,
      completed: false
    }
    saveTodos([...todos, newTodo]);
  }

  // List of TODOs apply Search and Filter 
  let searchedTodos = todos
    .filter(td => td.text.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(td => (filterValue==='none') ? td : `${td.completed}` === filterValue)
  

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      filterValue,
      setFilterValue,
      searchedTodos,
      toggleCompleteTodo,
      deleteTodo,
      createTodo,
      toggleModal,
      setToggleModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }