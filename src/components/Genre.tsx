import React, {useState} from "react";
import {TitleOfTable} from "../common/TitleOfTable";
import {BookType} from "../store/bookReducer";
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../store/store';


type propsType = {
    title: string
}
export const Genre = React.memo(({title}: propsType) => {
    const [genre, setGenre] = useState('All')
    const books = useSelector<AppRootStateType, Array<BookType>>(state => state.books.books)


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
