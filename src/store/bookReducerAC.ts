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


type addBookACType = {
    type: ACTIONS_TYPE.ADD_BOOK
    payload: {
        name: string
        id: string
    }
}

export const addBookAC = (name: string) => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK,
        payload: {
            name,
            id: v1()
        }
    }
}

type addBookToFavoritesACType = {
    type: ACTIONS_TYPE.ADD_BOOK_TO_FAV
    payload: {
        id: string
    }
}

export const addBookToFavoritesAC = (id:string):addBookToFavoritesACType => {
    return {
        type: ACTIONS_TYPE.ADD_BOOK_TO_FAV,
        payload: {
            id
        }
    }
}

type deleteBookFromFavoritesACType = {
    type: ACTIONS_TYPE.DELETE_BOOK_FROM_FAV
    payload: {
        id: string
    }
}

export const deleteBookFromFavoritesAC = (id: string):deleteBookFromFavoritesACType => {
    return {
        type: ACTIONS_TYPE.DELETE_BOOK_FROM_FAV,
        payload: {
            id
        }
    }
}

type clearFavoritesACType = {
    type: ACTIONS_TYPE.CLEAR_FAVORITES
}

export const clearFavoritesAC = ():clearFavoritesACType => {
    return {
        type: ACTIONS_TYPE.CLEAR_FAVORITES,
    }
}