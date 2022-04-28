import React, {useCallback} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import BookContainer from '../BookContainer';
import {Favorites} from '../components/Favorites/Favorites';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../store/store';
import {BookType} from '../store/bookReducer';
import {addBookAC, addBookToFavoritesAC, clearFavoritesAC, deleteBookFromFavoritesAC} from '../store/bookReducerAC';

export const AppRoutesComponent = () => {

  const dispatch = useDispatch()

  const favoriteBooks = useSelector<AppRootStateType, Array<BookType>>(state => state.books.favoriteBooks)


  const addBook = useCallback((title: string) => {
    dispatch(addBookAC(title))
  }, [dispatch])
  const addBookToFavorites = useCallback((id: string) => {
    dispatch(addBookToFavoritesAC(id))
  }, [dispatch])
  const deleteBookFromFavorites = useCallback((id: string) => {
    dispatch(deleteBookFromFavoritesAC(id))
  }, [dispatch])
  const clearFavorites = useCallback(() => {
    dispatch(clearFavoritesAC())
  }, [dispatch])


  return (
    <Routes>
      <Route path={'/books'}
             element={<BookContainer addBookToFavorites={addBookToFavorites} addBook={addBook}
             />}/>
      <Route path={'/favorites'} element={<Favorites
        favoriteBooks={favoriteBooks}
        deleteBookFromFavorites={deleteBookFromFavorites}
        clearFavorites={clearFavorites}
      />}/>
      <Route path={'/'} element={<h1>Welcome to your favorite place</h1>}/>
      <Route path={'/*'} element={<Navigate to={'404'}/>}/>
      <Route path={'404'} element={<h1>SOMEONE FUCKED UP</h1>}/>
    </Routes>
  );
};

