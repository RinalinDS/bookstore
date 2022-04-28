import React, {useCallback, useState} from "react";
import {TitleOfTable} from "../../common/TitleOfTable";
import {BookType} from "../../store/bookReducer";
import {EditableSpan} from '../../common/EditableSpan';
import {useDispatch} from 'react-redux';
import {changeBookTitleAC} from '../../store/bookReducerAC';
import Modal from '../../common/Modal/Modal';
import DeleteBookFromFavForm from '../../common/Modal/DeleteBookFromFavoritesForm/DeleteBookFromFavForm';

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
  const [whatModalIsActive, setWhatModalIsActive] = useState<string>('')
  const [tempId, setTempId] = useState('')

  const dispatch = useDispatch()
  const changeBookTitle = useCallback((title: string, id: string): void => {
    dispatch(changeBookTitleAC(id, title))
  }, [dispatch])
  const onDeleteClickHandler = (id: string): void => {
    setTempId(id)
    setWhatModalIsActive('delete')
  }
  const onConfirmDeleteClickHandler = (): void => {
    deleteBookFromFavorites(tempId)
    setTempId('')
    setWhatModalIsActive('')
  }
  const onDeleteAllClickHandler = (): void => {
    setWhatModalIsActive('deleteAll')
  }
  const onConfirmDeleteAllClickHandler = (): void => {
    clearFavorites()
    setWhatModalIsActive('')
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

      <button onClick={onDeleteAllClickHandler}>Clear all</button>
      {whatModalIsActive === 'deleteAll' &&
        <Modal isModalActive={whatModalIsActive} setModalVisibility={setWhatModalIsActive}>
          <DeleteBookFromFavForm onConfirmDeleteClickHandler={onConfirmDeleteAllClickHandler}
                                 setModalVisibility={setWhatModalIsActive}
                                 text={'Are you sure you wanna clear favorites list?'}/>
        </Modal>}
      {whatModalIsActive === 'delete' &&
        <Modal isModalActive={whatModalIsActive} setModalVisibility={setWhatModalIsActive}>
          <DeleteBookFromFavForm onConfirmDeleteClickHandler={onConfirmDeleteClickHandler}
                                 setModalVisibility={setWhatModalIsActive}
                                 text={'Are you sure you wanna delete this book from favorites?'}/>
        </Modal>}
    </div>
  )
})