import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="container">
                <Head />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;