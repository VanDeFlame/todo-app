import React from 'react'; 
import { useHistory, useRouteMatch } from 'react-router-dom';
import './TodoSearch.css';
import TodoSearchUI from './TodoSearchUI';

interface Props {
  filterValue: string;
  onFilter: Function;
  searchValue: string;
  loading: boolean;
}

function TodoSearch({
  searchValue, 
  filterValue, onFilter,
  loading
}: Props) {
  
  const history = useHistory();
  const [search, setSearch] = React.useState(searchValue);

  const onSearch = () => {
    search
    ? history.push(`/search/${search}`)
    : history.push('/')
  }

  const onHome = () => {
    setSearch('');
    history.push('/');
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
      searchValue={search}
      onSearch={onSearch}
      setSearch={setSearch}
      onHome={onHome}
      loading={loading}
    />
  )
}

export { TodoSearch };
