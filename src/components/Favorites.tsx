import React from "react";
import {TitleOfTable} from "./TitleOfTable";

type favoritesPropsType = {
    favoriteBooks: Array<string>
    deleteBookFromFavorites: (name: string) => void
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
                <div>{m}
                    <button onClick={() => deleteBookFromFavorites(m)}> x</button>
                </div>
            )}
            <button onClick={clearFavorites}>Clear all</button>
        </div>
    )
})