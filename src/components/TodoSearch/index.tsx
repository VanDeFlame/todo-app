import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './TodoSearch.css';
import TodoSearchUI from './TodoSearchUI';

interface Props {
  filterValue: string;
  onFilter: Function;
  searchValue: string;
  onSearch: Function;
  loading: boolean;
}

function TodoSearch({
  searchValue,
  filterValue, onFilter,
  loading
}: Props) {
  
  const navigate = useNavigate();
  const [search, setSearch] = React.useState(searchValue);

  const onSearch = () => {
    search
    ? navigate(`search/${search}`)
    : navigate('/')
  }

  const onHome = () => {
    setSearch('');
    navigate('/');
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
