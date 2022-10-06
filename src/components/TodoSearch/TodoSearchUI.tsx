import React, { FC } from 'react'; 

interface Props {
  searchValue: string;
  onSearch: Function;
  filterValue: string;
  onFilter: Function;
  loading: boolean
} 

const TodoSearchUI:FC<Props> = ({
  searchValue, onSearch,
  onFilter, filterValue, loading
}) => {
  
  return (
    <div className='TodoSearch'>
      <input
        title='Search TODOs'
        name='searchbar'
        className='TodoSearch--input input-text'
        placeholder='Write here to filter list'
        value={searchValue}
        disabled={loading}
        onChange={e => onSearch(e)}
      />

      <button
        title='Filter completed / incompleted TODOs'
        name='filter'
        className='TodoSearch--filter button icon'
        onClick={() => onFilter()}
        disabled={loading}
      >
        <i className={`bi bi-funnel-fill ${filterValue}`} />
      </button>
      
    </div>
  )
}

export default TodoSearchUI;
