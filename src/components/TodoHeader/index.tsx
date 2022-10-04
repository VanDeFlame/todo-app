import React, { FC, ReactNode } from 'react'; 

interface Props {
  children: ReactNode;
} 

const TodoHeader:FC<Props> = (props) => {
  return (
    <header>
      { props.children }
    </header>
  )
}

export { TodoHeader };
