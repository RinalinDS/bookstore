import React from 'react';
import {Books} from '../Books';
import {UniversalAddingForm} from '../../common/UniversalAddingForm';
import s from './style/BookContainer.module.css'

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
      <div className={s.form}>
        <UniversalAddingForm
          buttonName={'add book to collection'}
          callback={addBook}
        />
      </div>


    </>

  );
};

export default BookContainer;