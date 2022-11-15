import { Todo } from "./Todo";

interface AppTodo {
  state: {
    error: any;
    loading: boolean;
    searchValue: string;
    filterValue: string;
    
    completedTodos: number,
    totalTodos: number,
    searchedTodos: Todo[],
  };

  stateUpdaters: {
    onFilter: Function;
    onSearch: Function;
    
    createTodo: Function;
    deleteTodo: Function;
    editTodo: Function;
    
    completeTodo: Function;
    sincronizeTodos: Function;
  }

  functions: {
    findTodo: Function;
  }
}

export type { AppTodo }