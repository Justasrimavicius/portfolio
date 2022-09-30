import React, { useEffect } from 'react';

function Header(props) {

    return (
        <React.Fragment>
            <header className='header'>
                <span>J. R.</span>
                <div className='header-nav'>
                    <ul>
                        <li><button onClick={()=>{props.refs.aboutMeSection.current?.scrollIntoView()}}>About me</button></li>
                        <li><button onClick={()=>{props.refs.myWorkSection.current?.scrollIntoView()}}>My work</button></li>
                        <li><button onClick={()=>{props.refs.contactMeSection.current?.scrollIntoView()}}>Contacts</button></li>
                    </ul>
                </div>
            <div className='divider headerDivider'></div>
            </header>
        </React.Fragment>

    );
}

export default Header;