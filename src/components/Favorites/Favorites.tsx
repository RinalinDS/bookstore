import React, {useCallback, useState} from "react";
import {TitleOfTable} from "../../common/TitleOfTable";
import {BookType} from "../../store/bookReducer";
import {EditableSpan} from '../../common/EditableSpan';
import {useDispatch} from 'react-redux';
import {changeBookTitleAC} from '../../store/bookReducerAC';
import Modal from '../../common/Modal/Modal';
import s from './style/Favorites.module.css'

type favoritesPropsType = {
  favoriteBooks: Array<BookType>
  deleteBookFromFavorites: (id: string) => void
  clearFavorites: () => void
}
export const Favorites = React.memo(({
                                       favoriteBooks,
                                       deleteBookFromFavorites,
                                       clearFavorites
                                     }: favoritesPropsType) => {
  const [isModalActive, setModalVisibility] = useState<boolean>(false)
  const [tempId, setTempId] = useState('')

  const dispatch = useDispatch()
  const changeBookTitle = useCallback((title: string, id: string) => {
    dispatch(changeBookTitleAC(id, title))
  }, [dispatch])
  const onDeleteClickHandler = (id: string) => {
    setTempId(id)
    setModalVisibility(true)
  }
  const onConfirmDeleteClickHandler = () => {
    deleteBookFromFavorites(tempId)
    setTempId('')
    setModalVisibility(false)
  }


  return (
    <div>
      <TitleOfTable title={'List of favorite books:'}/>
      {favoriteBooks.map(m =>
        <div key={m.id}><EditableSpan title={m.title} onChange={(title) => changeBookTitle(title, m.id)}/>
          <button onClick={() => {
            onDeleteClickHandler(m.id)
          }}> x
          </button>
        </div>
      )}
      <button onClick={clearFavorites}>Clear all</button>
      {isModalActive && <Modal isModalActive={isModalActive} setModalVisibility={setModalVisibility}>
        <div className={s.container}><span>Are you sure you wanna delete this book from favorites?</span>
          <div className={s.btn_container}>
            <button className={s.cancelButton} onClick={() => setModalVisibility(false)}>Cancel</button>
            <button className={s.confirmButton} onClick={onConfirmDeleteClickHandler}>Yes</button>
          </div>
        </div>
      </Modal> }
    </div>
  )
})