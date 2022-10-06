import React, { FC } from 'react'; 
import { Modal } from '../Modal';
import ChangeAlertUI from './ChangeAlertUI';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

interface Props {
  show?: boolean;
  toggleShow?: Function;
  setToggleModal: Function;
  sincronize: Function;
}

const ChangeAlert:FC<Props> = ({ show, toggleShow, setToggleModal, sincronize }) => {
  const onReload = () => {
    setTimeout(() => {
      setToggleModal(false);
      toggleShow!(false);
      sincronize(false)
    }, 250)
  }

  if (show) return (
    <Modal>
      <ChangeAlertUI onReload={onReload} />
    </Modal>
  )
  else return null;
}

const ChangeAlertWithStorageListener = withStorageListener<Props>(ChangeAlert)

export { ChangeAlertWithStorageListener };


