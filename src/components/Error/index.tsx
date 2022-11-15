import React, { FC } from 'react'; 
import './Error.css';

interface Props {
  error: any
} 

const Error:FC<Props> = ({error}) => {
  return (
    <div className='Error'>
      <h2>{error.error}</h2>
      <p>{error.msg}</p>
    </div>
  )
}

export { Error };
