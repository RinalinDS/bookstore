import React, {useCallback} from 'react';
import './App.css';
import {Favorites} from "./components/Favorites";
import {UniversalAddingForm} from "./components/UniversalAddingForm";
import {useDispatch, useSelector} from "react-redux";
import {addBookAC, addBookToFavoritesAC, clearFavoritesAC, deleteBookFromFavoritesAC} from "./store/bookReducerAC";
import {AppRootStateType} from "./store/store";
import {Books} from "./components/Books";
import {TitleOfTable} from "./components/TitleOfTable";
import {BookType} from "./store/bookReducer";
import {Clock} from "./components/Clock";
import {Genre} from "./components/Genre";


export const App = () => {

    const dispatch = useDispatch()
    const books = useSelector<AppRootStateType, Array<BookType>>(state => state.books.books)
    const favoriteBooks = useSelector<AppRootStateType, Array<BookType>>(state => state.books.favoriteBooks)


    const addBook = useCallback((title) => {
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
        <div className='app'>
            <div className='header'>header content</div>
            <div className='left'>content for left side</div>
            <div className='topleft'>
                <Clock/>
            </div>
            <div className='logo'>
                <TitleOfTable
                    title={'your books are here'}
                />
            </div>
            <div className='main'>
                <Books
                    title={'books'}
                    addBookToFavorites={addBookToFavorites}
                />

                <UniversalAddingForm
                    buttonName={'add book to collection'}
                    callback={addBook}
                />
                <Genre title={'Show books by genre'} books={books}/>


            </div>
            <div className='favorites'>
                <Favorites
                    favoriteBooks={favoriteBooks}
                    deleteBookFromFavorites={deleteBookFromFavorites}
                    clearFavorites={clearFavorites}
                />
            </div>
        </div>
    );
}

export default App;

