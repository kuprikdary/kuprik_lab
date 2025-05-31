import React from 'react';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';

function Main() {
    return (
        <div className="Main">
            <Section />
            <Article />
            <Aside />
        </div>
    );
}

export default Main;