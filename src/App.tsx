import React, {useCallback} from 'react';
import './App.css';
import {Favorites} from "./components/Favorites";
import {UniversalAddingForm} from "./components/UniversalAddingForm";
import {useDispatch, useSelector} from "react-redux";
import {addBookAC, addBookToFavoritesAC, clearFavoritesAC, deleteBookFromFavoritesAC} from "./store/bookReducerAC";
import {AppRootStateType} from "./store/store";

export const App = React.memo(() => {

    const dispatch = useDispatch()
    const books = useSelector<AppRootStateType, Array<string>>(state => state.books.books)
    const favoriteBooks = useSelector<AppRootStateType, Array<string>>(state => state.books.favoriteBooks)

    const addBook = useCallback((title) => {
        dispatch(addBookAC(title))
    }, [dispatch])


    const addBookToFavorites = useCallback((title: string) => {
        dispatch(addBookToFavoritesAC(title))
    }, [dispatch])
    const deleteBookFromFavorites = useCallback((title: string) => {
       dispatch(deleteBookFromFavoritesAC(title))
    },[dispatch])
    const clearFavorites = useCallback(() => {
        dispatch(clearFavoritesAC())
    }, [dispatch])


    return (
        <div>
            <h1>your favourite books are here</h1>
            <div>
                {books.map(m => {
                    return <div> {m}
                        <button onClick={() => addBookToFavorites(m)}>+ to fav</button>
                    </div>
                })}
            </div>
            <UniversalAddingForm buttonName={'add book to collection'} callback={addBook}/>
            <Favorites favoriteBooks={favoriteBooks} deleteBookFromFavorites={deleteBookFromFavorites}
                       clearFavorites={clearFavorites}/>
        </div>
    );
})

export default App;