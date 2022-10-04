import React, { FC } from 'react'; 
import './Loader.css';

const Loader:FC = () => {
  return (
    <div className='Loader'>
      <h2>Loading...</h2>
      <div className='Loader--box'>
        <span className='Loader--point'>•</span>
        <span className='Loader--point'>•</span>
      </div>
    </div>
  )
}

export { Loader };
