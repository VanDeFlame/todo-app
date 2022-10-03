import React, { FC, useContext } from 'react'; 
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch:FC = () => {
  const { searchValue, setSearchValue, filterValue, setFilterValue } = useContext(TodoContext)

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
    <div className='TodoSearch'>
      <input
        title='Search TODOs'
        name='searchbar'
        className='TodoSearch--input input-text'
        placeholder='Write here to filter list'
        value={searchValue}
        onChange={onSearchInputChange}
      />

      <button
        title='Filter completed / incompleted TODOs'
        name='filter'
        className='TodoSearch--filter button icon'
        onClick={changeFilterState}
      >
        <i className={`bi bi-funnel-fill ${filterValue}`} />
      </button>
      
    </div>
  )
}

export { TodoSearch };
