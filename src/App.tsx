import React from 'react';
import {Genre} from './components/Favorites/Genre/Genre';
import {AppRoutesComponent} from './Routes/AppRoutesComponent';
import {Header} from './Header/Header';
import s from './App.module.css'


export const App = () => {


  return (
    <div className={s.background}>
      <Header/>

      <div className={s.main}>
        <div className={s.right}>
          <Genre title={'Show books by genre'}/>
        </div>
        <div className={s.center}>
          <AppRoutesComponent/>
        </div>
        <div className={s.left}>
          ЧЕТО СЛЕВА
        </div>
      </div>
    </div>
  );
}

export default App;


