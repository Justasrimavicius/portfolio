import React from 'react';

function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <span>J. R.</span>
                <div className='header-nav'>
                    <ul>
                        <li><button>About me</button></li>
                        <li><button>My work</button></li>
                        <li><button>Contacts</button></li>
                    </ul>
                </div>
            <div className='divider headerDivider'></div>
            </header>
        </React.Fragment>

    );
}

export default Header;