import React, { FC } from 'react'; 
import { Modal } from '../Modal';
import { useStorageListener } from '../../hooks/useStorageListener';
import './ChangeAlert.css';

interface Props {
  setToggleModal: Function;
  sincronize: Function;
}

const ChangeAlert:FC<Props> = ({ setToggleModal, sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  const onReload = () => {
    setTimeout(() => {
      setToggleModal(false);
      toggleShow();
    }, 250)
  }

  if (show) return (
    <Modal>
      <div className='ChangeAlert'>
        <h2>Changes detected</h2>
        <p>Do you want sincronize?</p>
        
        <div className='CreateTodoForm--actions'>
          <button 
            className='CreateTodoForm--actions--button button'
            type='button'
            onClick={onReload}
          >Reload</button>
        </div>
      </div>
    </Modal>
  )
  else return null;
}

export { ChangeAlert };


