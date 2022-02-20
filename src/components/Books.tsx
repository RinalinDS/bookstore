import React from "react";
import {TitleOfTable} from "./TitleOfTable";
import {BookType} from "../store/bookReducer";

type propsType = {
    books: Array<BookType>
    addBookToFavorites: (id: string) => void
}
export const Books = React.memo(({books, addBookToFavorites}: propsType) => {
    return (
        <div>
            <TitleOfTable title={'books:'} />
            {books.map(m => <div key={m.id}> {m.title}
                    <button onClick={() => addBookToFavorites(m.id)}>+ to fav</button>
                </div>
            )}
        </div>
    )
})