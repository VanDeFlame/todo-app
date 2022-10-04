import React, { FC, ReactNode } from 'react'; 
import './TodoList.css';

interface Props {
  children: ReactNode;
} 

const TodoList:FC<Props> = (props) => {
  return (
    <ul className='TodoList'>
      {props.children}
    </ul>
  )
}

export { TodoList };
