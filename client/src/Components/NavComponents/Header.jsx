import React from 'react';

function Header() {
    return (
        <header className='header'>
            <span>J. R.</span>
            <div className='header-nav'>
                <ul>
                    <button>About me</button>
                    <button>My work</button>
                    <button>Contacts</button>
                </ul>
            </div>
        </header>
    );
}

export default Header;