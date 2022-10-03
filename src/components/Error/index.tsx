import React, { FC } from 'react'; 
import './Error.css';

interface Props {
  error: any
} 

const Error:FC<Props> = ({error}) => {
  return (
    <div className='Error'>
      <h2>Error {error}</h2>
      <p>Has ocurred an error</p>
    </div>
  )
}

export { Error };
