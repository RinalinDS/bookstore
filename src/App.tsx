import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.css';
import {Favorites} from "./components/Favorites";
import {UniversalAddingForm} from "./UniversalAddingForm";

export const App = React.memo(() => {


    const [books, setBooks] = useState<Array<string>>(['Искатели Ветра', 'Ветер полыни', 'Жнецы Ветра', 'Искра и Ветер'])

    const [favoriteBooks, setFavoriteBooks] = useState<Array<string>>([])

    function unique(favoriteBooks: Array<string>): Array<string> {
        let result: Array<string> = [];
        for (let str of favoriteBooks) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }


    const addBook = useCallback((title) => {
        setBooks([...books, title])
    }, [setBooks, books])


    const addBookToFavorites = (name: string) => {
        const copyFavoriteBooks = [name, ...favoriteBooks]
        const books = unique(copyFavoriteBooks)
        setFavoriteBooks([...books])
    }
    const deleteBookFromFavorites = (name: string) => {
        const books = unique(favoriteBooks)
        setFavoriteBooks(books.filter(f => f !== name))
    }
    const clearFavorites = () => {
        setFavoriteBooks([])
    }


    return (
        <div className="App">
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