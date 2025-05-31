import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <div className="Head">
            <Link to="/news">Новости</Link> |
            <Link to="/about">О проекте</Link> |
            <Link to="/contact">Контакты</Link>
        </div>
    );
}

export default Head;