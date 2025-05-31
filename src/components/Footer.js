import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>© {year} — Иванов Иван Иванович</p>
        </div>
    );
}

export default Footer;