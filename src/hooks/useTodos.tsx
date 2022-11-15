import { useState } from 'react'; 
import { useLocalStorage } from './useLocalStorage';
import { Todo } from '../models/Todo';
import { AppTodo } from '../models/AppTodo';

// Default todos
const defaultTodos: Todo[] = [
  { id: 0, text: 'Make CSS for the ToDo Item', completed: true },
  { id: 1, text: 'Create the search bar logic', completed: true },
  { id: 2, text: 'Organize a meetup', completed: false },
]

const useTodos = (): AppTodo => {
  const {
    state: {
      error,
      item: todos,
      loading,
    }, 
    onUnsincronize: sincronizeTodos,
    saveItem: saveTodos,
  } = useLocalStorage<Todo[]>('TODOS_V2', defaultTodos)
  
  /* STATES */
  // Filter and Search
  const [filterValue, setFilterValue] = useState('none');
  const [searchValue, setSearchValue] = useState('');

  // List of TODOs apply Search and Filter 
  let searchedTodos = todos
    .filter(td => td.text.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(td => (filterValue==='none') ? td : `${td.completed}` === filterValue)
  
  // Total and Completed 
  const completedTodos = todos.filter(td => td.completed).length;
  const totalTodos = todos.length;
  
  /* STATE UPDATERS */
  const toggleCompleteTodo = (id: number) => {
    const i = todos.findIndex(td => td.id === id);
    const newTodos = [...todos];
    newTodos[i].completed = !todos[i].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (id: number) => {
    const newTodos = todos
    newTodos.splice(id, 1);
    saveTodos(newTodos);
  }
  const createTodo = (text: string) => {
    const newTodo: Todo = {
      id: newTodoId(todos),
      text: text,
      completed: false
    }
    saveTodos([...todos, newTodo]);
  }
  const editTodo = (todo: Todo) => {
    const i = todos.findIndex(td => td.id === todo.id);
    const newTodos = [...todos];
    newTodos[i] = todo;
    saveTodos(newTodos);
  }

  /* FUNCTIONS */
  const findTodo = (id: number) => {
    const todo = todos.find(td => td.id === id);
    return todo;
  }

  return {
    state: {
      error,
      loading,
      filterValue,
      searchValue,
      
      completedTodos,
      totalTodos,
      searchedTodos,
    },
    stateUpdaters: {
      onFilter: setFilterValue,
      onSearch: setSearchValue,
  
      createTodo,
      deleteTodo,
      editTodo,
      completeTodo: toggleCompleteTodo,
      sincronizeTodos,
    },
    functions: {
      findTodo
    }
  };
}

const newTodoId = (todoList: Todo[]) => {
  if (!todoList.length) return 0;

  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos }