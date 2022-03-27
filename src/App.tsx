import React, {useCallback} from 'react';
import './App.css';
import {Favorites} from "./components/Favorites";
import {useDispatch, useSelector} from "react-redux";
import {addBookAC, addBookToFavoritesAC, clearFavoritesAC, deleteBookFromFavoritesAC} from "./store/bookReducerAC";
import {AppRootStateType} from "./store/store";
import {TitleOfTable} from "./components/TitleOfTable";
import {BookType} from "./store/bookReducer";
import {Clock} from "./components/Clock";
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import BookContainer from './BookContainer';
import {Genre} from './components/Genre';


export const App = () => {

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
        <div className='app'>
            <div className='header'>
                <nav>
                    <Link to="/">Main</Link> |{' '}
                    <Link to="/books">Books</Link> |{' '}
                    <Link to="/favorites">Favorites</Link>
                </nav>
            </div>

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
                    <Route path={'*'} element={<Navigate to={'404'}/>}/>
                    <Route path={'404'} element={<h1>SOMEONE FUCKED UP</h1>}/>
                </Routes>


            </div>
            <div className='favorites'>
                <Genre title={'Show books by genre'}/>
            </div>
        </div>
    );
}

export default App;


