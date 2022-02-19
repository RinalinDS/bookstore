import React from "react";

type favoritesPropsType = {
    favoriteBooks: Array<string>
    deleteBookFromFavorites: (name: string) => void
    clearFavorites: () => void
}
export const Favorites = React.memo(({favoriteBooks,
                                         deleteBookFromFavorites,
                                         clearFavorites}: favoritesPropsType) => {

    return (
        <div>
            <p>list of favorite books</p>
            {favoriteBooks.map(m => {
                return (

                    <div>{m}
                        <button onClick={() => deleteBookFromFavorites(m)}> x</button>
                    </div>


                )
            })}
            <button onClick={clearFavorites}>Clear all</button>
        </div>
    )
})