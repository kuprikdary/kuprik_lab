import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>© {year} — Иванова Иван Иванович</p>
        </div>
    );
}

export default Footer;
