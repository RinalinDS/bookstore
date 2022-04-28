import React, {FC} from 'react';
import s from './style/DeleteBookFromFavForm.module.css'

type PropsType = {
  setModalVisibility: (value: string) => void
  onConfirmDeleteClickHandler: () => void
  text: string
}

export const DeleteBookFromFavForm: FC<PropsType> = ({setModalVisibility, onConfirmDeleteClickHandler, text}) => {
  return (
    <div className={s.container}><span>{text}</span>
      <div className={s.btn_container}>
        <button className={s.cancelButton} onClick={() => setModalVisibility('')}>Cancel</button>
        <button className={s.confirmButton} onClick={onConfirmDeleteClickHandler}>Yes</button>
      </div>
    </div>
  );
};

export default DeleteBookFromFavForm;