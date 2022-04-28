import {v1} from "uuid";
import {ACTIONS_TYPE, GeneralTypeForBooksReducer} from "./bookReducerAC";
import {unique} from '../utility/unique func';

// initState

const initState: BookStateType = {
    books: [{
        id: v1(), title: 'Искатели Ветра', genre: 'Fantasy'},
        {id: v1(), title: 'Ветер Полыни', genre: 'Fantasy'},
        {id: v1(), title: 'Жнецы Ветра', genre: 'Might and Magic'},
        {id: v1(),title: 'Искра и Ветер', genre: 'Might and Magic'}
    ],
    favoriteBooks: []
}

// reducer

export const bookReducer = (state: BookStateType = initState, action: GeneralTypeForBooksReducer): BookStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, {id: v1(), title: action.payload.name, genre: 'New'}]
            }
        case ACTIONS_TYPE.ADD_BOOK_TO_FAV:
            const copyFavoriteBooks = [...state.books.filter(f => f.id === action.payload.id), ...state.favoriteBooks]
            const uniqueBooks = unique(copyFavoriteBooks)
            return {...state, favoriteBooks: uniqueBooks}
        case ACTIONS_TYPE.DELETE_BOOK_FROM_FAV:
            return {...state, favoriteBooks: state.favoriteBooks.filter(f => f.id !== action.payload.id)}
        case ACTIONS_TYPE.CLEAR_FAVORITES :
            return {...state, favoriteBooks: []}
        case ACTIONS_TYPE.CHANGE_BOOK_TITLE:
            return {
                ...state,
                books: state.books.map(m => m.id === action.payload.id ? {...m, title: action.payload.title} : m)
            }
        default:
            return state
    }
}


// types

export type BookType = {
    id: string
    title: string
    genre: string
}

export type BookStateType = {
    books: Array<BookType>
    favoriteBooks: Array<BookType>
}



