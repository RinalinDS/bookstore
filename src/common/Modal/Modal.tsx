import React, {FC} from 'react';
import s from './style/Modal.module.css'

type propsType = {
  isModalActive: string
  setModalVisibility: (value: string) => void
}

export const Modal: FC<propsType> = ({children, isModalActive, setModalVisibility}) => {
  const onChangeHandler = () => {
    setModalVisibility('')
  }
  return (
    <div className={s.container} onClick={onChangeHandler}>
      <div className={s.modal} onClick={(e) => {
        e.stopPropagation()
      }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;