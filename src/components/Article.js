import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from '../pages/News';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function Article() {
    return (
        <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Article;