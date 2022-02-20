import {bookReducer, BookStateType} from "../bookReducer";
import {
    addBookAC,
    addBookToFavoritesAC,
    clearFavoritesAC,
    deleteBookFromFavoritesAC
} from "../bookReducerAC";


let initState = {} as BookStateType

beforeEach(() => {
    initState = {
        books: [{id: '1', title:'Искатели Ветра'}, {id: '2', title:'Ветер Полыни'}, {id: '3', title:'Жнецы Ветра'}, {id: '4', title:'Искра и Ветер'}],
        favoriteBooks: []
    }

})

test(' should add proper book', () => {

    const endState = bookReducer(initState, addBookAC('Страж'))

    expect(endState.books.length).toBe(5)
    expect(endState.favoriteBooks.length).toBe(0)
    expect(initState.books.length).toBe(4)
    expect(endState.books[4].title).toBe('Страж')
})

test(' should add proper book to favorites', () => {

    const endState = bookReducer(initState, addBookToFavoritesAC('2'))

    expect(endState.books.length).toBe(4)
    expect(endState.favoriteBooks.length).toBe(1)
    expect(initState.favoriteBooks.length).toBe(0)
    expect(initState.books.length).toBe(4)
    expect(endState.favoriteBooks[0].title).toBe('Ветер Полыни')
})


test('should delete proper book from favorites', () => {

    initState = {
        books: [{id: '1', title:'Искатели Ветра'}, {id: '2', title:'Ветер Полыни'}, {id: '3', title:'Жнецы Ветра'}, {id: '4', title:'Искра и Ветер'}],
        favoriteBooks: [{id: '2', title:'Ветер Полыни'}, {id: '3', title:'Жнецы Ветра'}]
    }

    const endState = bookReducer(initState, deleteBookFromFavoritesAC('2'))

    expect(endState.books.length).toBe(4)
    expect(endState.favoriteBooks.length).toBe(1)
    expect(initState.favoriteBooks.length).toBe(2)
    expect(initState.books.length).toBe(4)
    expect(endState.favoriteBooks[0].title).toBe('Жнецы Ветра')
})

test('should delete all books from favorites', () => {

    initState = {
        books: [{id: '1', title:'Искатели Ветра'}, {id: '2', title:'Ветер Полыни'}, {id: '3', title:'Жнецы Ветра'}, {id: '4', title:'Искра и Ветер'}],
        favoriteBooks: [{id: '2', title:'Ветер Полыни'}, {id: '3', title:'Жнецы Ветра'}]
    }

    const endState = bookReducer(initState, clearFavoritesAC())

    expect(endState.books.length).toBe(4)
    expect(endState.favoriteBooks.length).toBe(0)
    expect(initState.favoriteBooks.length).toBe(2)
    expect(initState.books.length).toBe(4)
    expect(endState.favoriteBooks[0]).toBeUndefined()
})