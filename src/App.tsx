import React from 'react';
import './App.css';
import {TitleOfTable} from "./common/TitleOfTable";
import {Clock} from "./common/Clock";
import {Genre} from './components/Genre';
import {Header} from './Header/Header';
import {AppRoutesComponent} from './Routes/AppRoutesComponent';


export const App = () => {


    return (
        <div className='app'>
            <div className='header'>
                <Header/>
            </div>

            <div className='left'>content for left side</div>
            <div className='topleft'>
                <Clock/>
            </div>
            <div className='logo'>
                <TitleOfTable
                    title={'your books are here'}
                />
            </div>
            <div className='main'>
                <AppRoutesComponent/>
            </div>
            <div className='favorites'>
                <Genre title={'Show books by genre'}/>
            </div>
        </div>
    );
}

export default App;


