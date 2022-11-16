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

function useTodos(): AppTodo {
  const {
    state: {
      error,
      item: todos,
      loading,
    }, 
    onLoading,
    onUnsincronize: sincronizeTodos,
    saveItem: saveTodos,
  } = useLocalStorage<Todo[]>('TODOS_V2', defaultTodos)

  /* STATES */
  // Filter and Search
  const [filterValue, setFilterValue] = useState('none');
  const [searchValue, setSearchValue] = useState('');

  /* DERIVED STATES */
  // List of TODOs apply Search and Filter 
  let filteredTodos: Todo[] = todos.filter(td => (filterValue === 'none') 
    ? td : `${td.completed}` === filterValue)
  
  let searchedTodos: Todo[] = filteredTodos
    .filter(td => td.text.toLowerCase().includes(searchValue))

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
  const onSearch = (newSearchValue: string) => {
    const nSV = newSearchValue.toLowerCase();
    if (searchValue === nSV) return;
    onLoading();
    setSearchValue(nSV);
  }
  const onFilter = (newFilterValue: string) => {
    const nFV = newFilterValue.toLowerCase();
    if (filterValue === nFV) return;
    onLoading();
    setFilterValue(nFV);
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
      filteredTodos,
      searchedTodos
    },
    stateUpdaters: {
      onFilter,
      onSearch,
  
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