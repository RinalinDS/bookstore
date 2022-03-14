import React, {useState} from "react";
import {TitleOfTable} from "./TitleOfTable";
import {BookType} from "../store/bookReducer";


type propsType = {
    title: string
    books: BookType[]
}
export const Genre = React.memo(({title, books}: propsType) => {
    const [genre, setGenre] = useState('All')


    return (
        <div>
            <TitleOfTable title={title}/>
            <button onClick={() => setGenre('New')}> Filter by new</button>
            <button onClick={() => setGenre('Fantasy')}> Filter by Fantasy</button>
            <button onClick={() => setGenre('Might and Magic')}> Filter by Might and Magic</button>
            <button onClick={() => setGenre('All')}> Filter by All</button>
            { (genre === 'All'?books : books.filter(f => f.genre === genre)).map(m =>
                <>
                    <div>{m.title}</div>
                </>)}


        </div>
    )
})
