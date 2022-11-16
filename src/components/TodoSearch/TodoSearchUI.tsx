import React, { MouseEventHandler } from 'react'; 

interface Props {
  searchValue: string;
  setSearch: Function;
  onSearch: Function;
  filterValue: string;
  onFilter: MouseEventHandler;
  onHome: MouseEventHandler;
  loading: boolean
} 

function TodoSearchUI({
  searchValue, setSearch, onSearch,
  onFilter, filterValue, loading, onHome
}: Props) {
  
  const onEnterKey = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  }

  return (
    <div className='TodoSearch'>
      <button
        title='Search TODOs'
        className='TodoSearch--home button icon'
        onClick={onHome}
        disabled={loading}
      >
        <i className='bi bi-house-fill' />
      </button>

      <input
        title='Search TODOs'
        name='searchbar'
        className='TodoSearch--input input-text'
        placeholder='Write here to filter list'
        value={searchValue}
        disabled={loading}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={onEnterKey}
      />

      {(searchValue !== '') ? (
        <>
          <button
            title='Clear input'
            className='TodoSearch--clear icon'
            disabled={loading}
            onClick={() => setSearch('')}
          >
            <i className='bi bi-x' />
          </button>
        
          <button
            title='Search TODOs'
            name='search'
            className='TodoSearch--search button icon'
            onClick={() => onSearch()}
            disabled={loading}
          >
            <i className='bi bi-search' />
          </button>
        </>
      ) : (
        <button
          title='Filter completed / incompleted TODOs'
          className='TodoSearch--filter button icon'
          onClick={onFilter}
          disabled={loading}
        >
          <i className={`bi bi-funnel-fill ${filterValue}`} />
        </button>
      )}
      
    </div>
  )
}

export default TodoSearchUI;
