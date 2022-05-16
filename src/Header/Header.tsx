import React from 'react';
import s from './Header.module.css';
import {Navigation} from './Navigation';
import {Clock} from '../common/Clock';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.title}>
        <span> Your favorites are here</span>
      </div>
      <div className={s.nav}>
        <Navigation/>
      </div>
      <div className={s.clock}>
        <Clock/>
      </div>
    </div>

  );
};

