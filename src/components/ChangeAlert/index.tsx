import React, { FC } from 'react'; 
import { Modal } from '../Modal';
import { useStorageListener } from '../../hooks/useStorageListener';
import './ChangeAlert.css';

interface Props {
  sincronize: Function;
}

const ChangeAlert:FC<Props> = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  const onReload = () => {
    setTimeout(() => {
      toggleShow();
    }, 250)
  }

  if (show) return (
    <Modal>
      <div className='ChangeAlert'>
        <h2>Changes detected</h2>
        <p>Do you want sincronize?</p>

        <button 
          className='ChangeAlert--button button'
          type='button'
          onClick={onReload}
        >Reload</button>
      </div>
    </Modal>
  )
  else return null;
}

export { ChangeAlert };


