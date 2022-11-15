import React, { ReactNode } from "react";
import './Modal.css';

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props) {
  return (
    <div className="Modal">
      <div className='Modal--container'>
        { children }
      </div>
    </div>
  )
}

export { Modal }