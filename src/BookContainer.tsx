import React from 'react';
import {Books} from './components/Books';
import {UniversalAddingForm} from './common/UniversalAddingForm';

type propsType = {
    addBookToFavorites: (id: string) => void
    addBook: (title: string) => void

}

const BookContainer = ({addBookToFavorites, addBook}: propsType) => {
    return (
        <>
            <Books
                title={'books'}
                addBookToFavorites={addBookToFavorites}
            />

            <UniversalAddingForm
                buttonName={'add book to collection'}
                callback={addBook}
            />


        </>

    );
};

export default BookContainer;