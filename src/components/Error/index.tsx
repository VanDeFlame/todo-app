import React from 'react'; 
import './Error.css';

interface Props {
  error: {
    error: any,
    msg: string
  }
} 

function Error({error}: Props) {
  return (
    <div className='Error'>
      <h2>{error.error}</h2>
      <p>{error.msg}</p>
    </div>
  )
}

export { Error };
