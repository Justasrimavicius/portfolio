import React from 'react';

function Header() {
    return (
        <header className='header'>
            <span>J. R.</span>
            <div className='header-nav'>
                <ul>
                    <li><button>About me</button></li>
                    <li><button>My work</button></li>
                    <li><button>Contacts</button></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;