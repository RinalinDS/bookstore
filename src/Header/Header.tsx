import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <nav>
            <Link to="/">Main</Link> |{' '}
            <Link to="/books">Books</Link> |{' '}
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
};

