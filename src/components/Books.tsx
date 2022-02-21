import React from "react";
import {TitleOfTable} from "./TitleOfTable";
import {BookType} from "../store/bookReducer";
import {Book} from "./Book";

type propsType = {
    books: Array<BookType>
    addBookToFavorites: (id: string) => void
    title:string
}
export const Books = React.memo(({books, addBookToFavorites, title}: propsType) => {
    return (
        <div>
            <TitleOfTable title={title} />
            {books.map(m => <Book key={m.id} id={m.id} title={m.title} callback={addBookToFavorites}/>
            )}
        </div>
    )
})

