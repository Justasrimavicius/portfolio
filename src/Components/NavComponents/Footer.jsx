import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Footer(props) {
    return (
        <React.Fragment>
<div className='divider' style={{backgroundColor:'black'}}></div>
        <footer className='footer'>

            <div className='footer-upper'>
                <a href='https://github.com/Justasrimavicius/portfolio'>Source code</a>
            </div>
            <div className='footer-middle'>
                <ul>
                    <li><button onClick={()=>{props.refs.aboutMeSection.current.scrollIntoView()}}>About me</button></li>
                    <li><button onClick={()=>{props.refs.myWorkSection.current.scrollIntoView()}}>My work</button></li>
                    <li><button onClick={()=>{props.refs.contactMeSection.current.scrollIntoView()}}>Contacts</button></li>
                </ul>
                <div className='divider'></div>
            </div>
            <div className='footer-lower'>
                <p className='footer-email' ><EmailIcon /> justinas.rimavicius1@gmail.com</p>
                <p className='copyright'>© twenty20two</p>
                <a href='https://www.linkedin.com/in/justinas-rimavicius/'><LinkedIn /> LinkedIn</a>
            </div>

        </footer>
        </React.Fragment>

    );
}

export default Footer;