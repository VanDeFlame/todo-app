import React, { ReactNode } from 'react'; 
import './TodoList.css';

interface Props {
  errorStatus: boolean;
  onError: Function;
  loadingStatus: boolean;
  onLoading: Function;
  children: ReactNode;
} 

function TodoList({
  errorStatus, onError,
  loadingStatus, onLoading,
  children
}: Props) {

  return (
    <ul className='TodoList'>
    {
      (errorStatus && onError()) ||
      (loadingStatus && onLoading()) ||
      children
    }
    </ul>
  )
}

export { TodoList };
