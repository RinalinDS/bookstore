import {ACTIONS_TYPE, GeneralTypeForBooksReducer} from "./bookReducerAC";

export type BookStateType = {
    books: Array<string>
    favoriteBooks: Array<string>
}


function unique(favoriteBooks: Array<string>): Array<string> {
    let result: Array<string> = [];
    for (let str of favoriteBooks) {
        if (!result.includes(str)) {
            result = [...result, str]
        }
    }
    return result;
}

const initState = {
    books: ['Искатели Ветра', 'Ветер Полыни', 'Жнецы Ветра', 'Искра и Ветер'],
    favoriteBooks: []
}



export const bookReducer = (state: BookStateType = initState, action: GeneralTypeForBooksReducer): BookStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_BOOK:
            return {...state, books: [...state.books, action.payload.name]}
        case ACTIONS_TYPE.ADD_BOOK_TO_FAV:
            const copyFavoriteBooks = [action.payload.name, ...state.favoriteBooks]
            const uniqueBooks = unique(copyFavoriteBooks)
            return {...state, favoriteBooks: uniqueBooks}
        case ACTIONS_TYPE.DELETE_BOOK_FROM_FAV:
            return {...state, favoriteBooks: state.favoriteBooks.filter(f => f !== action.payload.name)}
        case ACTIONS_TYPE.CLEAR_FAVORITES :
            return {...state, favoriteBooks: []}
        default:
            return state
    }
}



