import React from "react";
import {bookReducer, BookStateType} from "../bookReducer";
import {
    ACTIONS_TYPE,
    addBookAC,
    addBookToFavoritesAC,
    clearFavoritesAC,
    deleteBookFromFavoritesAC
} from "../bookReducerAC";

let initState = {

} as BookStateType

beforeEach( ()=> {
    initState = {
        books: ['Искатели Ветра', 'Ветер Полыни', 'Жнецы Ветра', 'Искра и Ветер'],
        favoriteBooks: []
    }
})

test('test should add proper book', ()=> {

    const endState = bookReducer(initState, addBookAC('Страж'))

    expect(endState.books.length).toBe(5)
    expect(endState.favoriteBooks.length).toBe(0)
    expect(initState.books.length).toBe(4)
    expect(endState.books[4]).toBe('Страж')
})

test('test should add proper book to favorites', ()=> {

    const endState = bookReducer(initState, addBookToFavoritesAC('Ветер Полыни'))

    expect(endState.books.length).toBe(4)
    expect(endState.favoriteBooks.length).toBe(1)
    expect(initState.favoriteBooks.length).toBe(0)
    expect(initState.books.length).toBe(4)
    expect(endState.favoriteBooks[0]).toBe('Ветер Полыни')
})


test('test should delete proper book from favorites', ()=> {

    initState = {
        books: ['Искатели Ветра', 'Ветер Полыни', 'Жнецы Ветра', 'Искра и Ветер'],
        favoriteBooks: ['Ветер Полыни', 'Жнецы Ветра']
    }

    const endState = bookReducer(initState, deleteBookFromFavoritesAC('Ветер Полыни'))

    expect(endState.books.length).toBe(4)
    expect(endState.favoriteBooks.length).toBe(1)
    expect(initState.favoriteBooks.length).toBe(2)
    expect(initState.books.length).toBe(4)
    expect(endState.favoriteBooks[0]).toBe('Жнецы Ветра')
})

test('test should delete all books from favorites', ()=> {

    initState = {
        books: ['Искатели Ветра', 'Ветер Полыни', 'Жнецы Ветра', 'Искра и Ветер'],
        favoriteBooks: ['Ветер Полыни', 'Жнецы Ветра']
    }

    const endState = bookReducer(initState, clearFavoritesAC())

    expect(endState.books.length).toBe(4)
    expect(endState.favoriteBooks.length).toBe(0)
    expect(initState.favoriteBooks.length).toBe(2)
    expect(initState.books.length).toBe(4)
    expect(endState.favoriteBooks[0]).toBeUndefined()
})