import React from "react";
import {TitleOfTable} from "../common/TitleOfTable/TitleOfTable";
import {BookType} from "../store/bookReducer";
import {Book} from "./Book";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

type propsType = {

    addBookToFavorites: (id: string) => void
    title: string
}
export const Books = React.memo(({addBookToFavorites, title}: propsType) => {
    const books = useSelector<AppRootStateType, Array<BookType>>(state => state.books.books)

    return (
        <div>
            <TitleOfTable title={title}/>
            {books.map(m => <Book key={m.id} id={m.id} title={m.title} callback={addBookToFavorites}/>
            )}

        </div>
    )
})

