import {v1} from "uuid";

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


type addBookACType = ReturnType<typeof addBookAC>
type addBookToFavoritesACType = ReturnType<typeof addBookToFavoritesAC>
type deleteBookFromFavoritesACType = ReturnType<typeof deleteBookFromFavoritesAC>
type clearFavoritesACType = ReturnType<typeof clearFavoritesAC>

export const addBookAC = (name: string) => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK,
        payload: {
            name,
            id: v1()
        }
    } as const
}

export const addBookToFavoritesAC = (id: string) => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK_TO_FAV,
        payload: {
            id
        }
    } as const
}

export const deleteBookFromFavoritesAC = (id: string) => {
    return {
        type: ACTIONS_TYPE.DELETE_BOOK_FROM_FAV,
        payload: {
            id
        }
    } as const
}

export const clearFavoritesAC = () => {
    return {
        type: ACTIONS_TYPE.CLEAR_FAVORITES,
    } as const
}