export enum ACTIONS_TYPE {
    ADD_BOOK = "ADD_BOOK",
    ADD_BOOK_TO_FAV = "ADD_BOOK_TO_FAV",
    DELETE_BOOK_FROM_FAV = 'DELETE_BOOK_FROM_FAV',
    CLEAR_FAVORITES = 'CLEAR_FAVORITES'
}


export type GeneralTypeForBooksReducer =
    addBookACType |
    addBookToFavoritesACType |

    deleteBookFromFavoritesACType |
    clearFavoritesACType


type addBookACType = {
    type: ACTIONS_TYPE.ADD_BOOK
    payload: {
        name: string
    }
}

export const addBookAC = (name: string) => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK,
        payload: {
            name
        }
    }
}

type addBookToFavoritesACType = {
    type: ACTIONS_TYPE.ADD_BOOK_TO_FAV
    payload: {
        name: string
    }
}

export const addBookToFavoritesAC = (name: string) => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK_TO_FAV,
        payload: {
            name
        }
    }
}

type deleteBookFromFavoritesACType = {
    type: ACTIONS_TYPE.DELETE_BOOK_FROM_FAV
    payload: {
        name: string
    }
}

export const deleteBookFromFavoritesAC = (name: string) => {
    return {
        type: ACTIONS_TYPE.DELETE_BOOK_FROM_FAV,
        payload: {
            name
        }
    }
}

type clearFavoritesACType = {
    type: ACTIONS_TYPE.CLEAR_FAVORITES
}

export const clearFavoritesAC = () => {
    return {
        type: ACTIONS_TYPE.CLEAR_FAVORITES,
    }
}