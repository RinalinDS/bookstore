import React from "react";
import {TitleOfTable} from "./TitleOfTable";
import {BookType} from "../store/bookReducer";

type favoritesPropsType = {
    favoriteBooks: Array<BookType>
    deleteBookFromFavorites: (id: string) => void
    clearFavorites: () => void
}
export const Favorites = React.memo(({
                                         favoriteBooks,
                                         deleteBookFromFavorites,
                                         clearFavorites
                                     }: favoritesPropsType) => {

    return (
        <div>
            <TitleOfTable title={'List of favorite books:'}/>
            {favoriteBooks.map(m =>
                <div key={m.id}>{m.title}
                    <button onClick={() => deleteBookFromFavorites(m.id)}> x</button>
                </div>
            )}
            <button onClick={clearFavorites}>Clear all</button>
        </div>
    )
})