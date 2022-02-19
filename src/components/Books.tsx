import React from "react";
import {TitleOfTable} from "./TitleOfTable";

type propsType = {
    books: Array<string>
    addBookToFavorites: (title: string) => void
}
export const Books = React.memo(({books, addBookToFavorites}: propsType) => {
    return (
        <div>
            <TitleOfTable title={'books:'} />
            {books.map(m => <div> {m}
                    <button onClick={() => addBookToFavorites(m)}>+ to fav</button>
                </div>
            )}
        </div>
    )
})