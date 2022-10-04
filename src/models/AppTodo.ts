import { Todo } from "./Todo";

export interface AppTodo {
  loading: boolean,
  error: any,
  totalTodos: number,
  completedTodos: number,
  searchValue: string,
  setSearchValue: Function,
  filterValue: string,
  setFilterValue: Function,
  searchedTodos: Todo[],
  toggleCompleteTodo: Function,
  deleteTodo: Function,
  createTodo: Function,
  toggleModal: boolean,
  setToggleModal: Function,
}