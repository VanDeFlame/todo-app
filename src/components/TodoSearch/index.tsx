import React, { FC } from 'react'; 
import './TodoSearch.css';
import TodoSearchUI from './TodoSearchUI';

interface Props {
  searchValue: string;
  setSearchValue: Function;
  filterValue: string;
  setFilterValue: Function;
  loading: boolean;
}

const TodoSearch:FC<Props> = ({
  searchValue, setSearchValue,
  filterValue, setFilterValue, loading
}) => {
  
  const onSearchInputChange = (event: any) => {
    setSearchValue(event.target.value);
  }

  const changeFilterState = () => {
    // none => completed => incompleted => none
    switch(filterValue) {
      case 'none': setFilterValue('true'); break;
      case 'true': setFilterValue('false'); break;
      case 'false': setFilterValue('none'); break;
      default: setFilterValue('none'); break;
    }
  }

  return (
    <TodoSearchUI 
      searchValue={searchValue}
      onSearch={onSearchInputChange}
      filterValue={filterValue}
      onFilter={changeFilterState}
      loading={loading}
    />
  )
}

export { TodoSearch };
