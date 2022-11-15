import React, { FC } from 'react'; 
import './TodoSearch.css';
import TodoSearchUI from './TodoSearchUI';

interface Props {
  filterValue: string;
  onFilter: Function;
  searchValue: string;
  onSearch: Function;
  loading: boolean;
}

const TodoSearch:FC<Props> = ({
  searchValue, onSearch,
  filterValue, onFilter,
  loading
}) => {
  
  const onSearchInputChange = (event: any) => {
    onSearch(event.target.value);
  }

  const changeFilterState = () => {
    // none => completed => incompleted => none
    switch(filterValue) {
      case 'none': onFilter('true'); break;
      case 'true': onFilter('false'); break;
      case 'false': onFilter('none'); break;
      default: onFilter('none'); break;
    }
  }

  return (
    <TodoSearchUI 
      filterValue={filterValue}
      onFilter={changeFilterState}
      searchValue={searchValue}
      onSearch={onSearchInputChange}
      loading={loading}
    />
  )
}

export { TodoSearch };
