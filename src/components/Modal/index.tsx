import React, { FC, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";
import './Modal.css';

interface Props {
  children: ReactNode;
}

const Modal:FC<Props> = (props): ReactPortal  =>{
  const modal = document.getElementById('modal');
  
  return createPortal(
    <div className="Modal">
      <div className='Modal--container'>
        { props.children }
      </div>
    </div>,

    modal!
  )
}

export { Modal }