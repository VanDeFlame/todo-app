import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  }

  return (
    <div className='NotFound'>
      <h2>Error 404</h2>
      <p>Page not found.</p>

      <button 
        className='button'
        onClick={onClick}
      >
        Return to Home
      </button>
    </div>
  )
}

export { NotFound };
