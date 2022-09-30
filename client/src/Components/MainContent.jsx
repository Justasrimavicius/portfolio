import React from 'react';
import { useEffect } from 'react';

import MouseCursorEffect from '../Animations/MouseCursorEffect';

import AboutMe from '../Components/MainSections/AboutMe';
import Projects from '../Components/MainSections/Projects';
import ContactMe from './MainSections/ContactMe';

// MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function MainContent(props) {




    useEffect(()=>{
        MouseCursorEffect();
        document.querySelector('.intro-text').classList.add('fadein');
        setTimeout(() => {
            const miniAbout = document.querySelector('.intro-text-miniAbout');
            miniAbout.classList.add('fadein');miniAbout.style.opacity='1'}, 666);
    },[])

    return (
            <main className='MainContent'>
                <div className='gmail-dash'>
                    <a href='mailto:justinas.rimavicius1@gmail.com'>justinas.rimavicius1@gmail.com</a>
                    <div className='dash-for-gmail'></div>
                </div>
                {/* DONT FORGET TO REFERENCE Brittany Chang FOR THE SIDE DASHES */}
                <div className='socials-dash'>
                    <div className='socials-holder'>
                        <GitHubIcon fontSize='large'/>
                        <LinkedInIcon fontSize='large'/>
                        <FacebookIcon fontSize='large'/>
                        <div className='dash-for-socials'></div>
                    </div>
                </div>
                <canvas id='myCanvas'></canvas>
                <div className='above-fold'>
                    <div className='intro-text'>
                        <h6 className='intro-text-first'>
                            Frontend
                        </h6>
                        <h6 className='intro-text-second'>
                            website
                        </h6>
                        <h6 className='intro-text-third'>
                            developer
                        </h6>
                    </div>
                    <div className='intro-text-miniAbout'>
                        <h4>
                            I am a web developer that specializes in frontend engineering. <br></br>
                            I have been self-teaching since 2022 spring and have fallen in love <br></br>
                            with the journey of continous learning!<br></br>
                        </h4>
                        <button>CONTACT ME</button>
                    </div>
                </div>
                <AboutMe aboutMeRef={props.refs.aboutMeSection}/>
                <Projects myWorkRef={props.refs.myWorkSection}/>
                <ContactMe contactMeRef={props.refs.contactMeSection}/>
            </main>
    );
}

export default MainContent;