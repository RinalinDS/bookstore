import { v1 } from "uuid";
import {ACTIONS_TYPE, GeneralTypeForBooksReducer} from "./bookReducerAC";

export type BookType = {
    id: string
    title: string
}

export type BookStateType = {
    books: Array<BookType>
    favoriteBooks: Array<BookType>
}


function unique(favoriteBooks: Array<BookType>): Array<BookType> {
    let result: Array<BookType> = [];
    for (let str of favoriteBooks) {
        if (!result.includes(str)) {
            result = [...result, str]
        }
    }
    return result;
}

const initState:BookStateType = {
    books: [{id: v1(), title:'Искатели Ветра'}, {id: v1(), title:'Ветер Полыни'}, {id: v1(), title:'Жнецы Ветра'}, {id: v1(), title:'Искра и Ветер'}],
    favoriteBooks: []
}



export const bookReducer = (state: BookStateType = initState, action: GeneralTypeForBooksReducer): BookStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_BOOK:
            return {...state, books: [...state.books, {id: action.payload.id , title: action.payload.name,}]}
        case ACTIONS_TYPE.ADD_BOOK_TO_FAV:
            const copyFavoriteBooks = [...state.books.filter(f => f.id === action.payload.id), ...state.favoriteBooks]
            const uniqueBooks = unique(copyFavoriteBooks)
            return {...state, favoriteBooks: uniqueBooks}
        case ACTIONS_TYPE.DELETE_BOOK_FROM_FAV:
            return {...state, favoriteBooks: state.favoriteBooks.filter(f => f.id !== action.payload.id)}
        case ACTIONS_TYPE.CLEAR_FAVORITES :
            return {...state, favoriteBooks: []}
        default:
            return state
    }
}



