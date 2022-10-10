import React, { useEffect, useRef } from 'react';

import BashTerminal from './BashTerminal.jsx';


function Projects(props) {

    const terminalRef1 = useRef(null);
    const terminalRef2 = useRef(null);
    const terminalRef3 = useRef(null);
    const terminalRef4 = useRef(null);

    const hasAnimatedT1 = useRef(false);
    const hasAnimatedT2 = useRef(false);
    const hasAnimatedT3 = useRef(false);
    const hasAnimatedT4 = useRef(false);


    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            isScrolledIntoView(terminalRef1.current,hasAnimatedT1);
            isScrolledIntoView(terminalRef2.current,hasAnimatedT2);
            isScrolledIntoView(terminalRef3.current,hasAnimatedT3);
            isScrolledIntoView(terminalRef4.current,hasAnimatedT4);
        })
    },[])

    function isScrolledIntoView(elem,hasAnimated){
        let rect = elem.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;

        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        if(isVisible==true && hasAnimated.current==false){
            elem.classList.add('popAnim-preAnim');
            elem.classList.add('popAnim');
            hasAnimated.current=true;
            setTimeout(() => {
                elem.classList.remove('popAnim-preAnim');
            }, 1000);
            console.log(document.querySelector(`.${elem.id}`))
            document.querySelector(`.${elem.id}`).classList.add('popAnim');

        }
    }


    return (
        <div className='projects' ref={props.myWorkRef}>
            <div className='divider'></div>
            <h4>My projects</h4>
            <div className='projects-holder'>
            <BashTerminal outerRef={terminalRef1} name={'GroupProject'} picture={<img src={require('../../photos/groupProject.jpeg')} alt='group project'></img>}/>
            <div className='GroupProject projectAbout'>
                <p className='projectAbout-name'>Group project(CURRENTLY IN PROGRESS)</p>
                {/* <div className='projectAbout-about'></div><br></br>
                <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                <ul className='projectAbout-technologies'>
                    <li>The big three(JS,HTML,CSS)</li>
                    <li>Javascript loops and game logic implementation.</li>
                </ul>
                <div className='projectAbout-view'>
                    <a href='https://github.com/Justasrimavicius/battleship'>View code</a>
                    <a href='https://jr-battleships.netlify.app/'>Live view</a>
                </div> */}
            </div>
            <div className='CoinTrace projectAbout'>
                <p className='projectAbout-name'>Cointrace</p>
                <div className='projectAbout-about'>This is a crypto exchange project - it uses <a href='https://coingecko.com'>coingecko.com</a> API for trading crypto with fake money.</div><br></br>
                <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                <ul className='projectAbout-technologies'>
                    <li>The big three(JS,HTML,CSS)</li>
                    <li>(A lot of)API calls and data manipulation</li>
                    <li>React</li>
                    <li>Material UI</li>
                </ul>
                <div className='projectAbout-view'>
                    <a href='https://github.com/Justasrimavicius/cointrace'>View code</a>
                    <a href='https://cointrace.netlify.app/'>Live view</a>
                </div>
            </div>
            <BashTerminal outerRef={terminalRef2} name={'CoinTrace'} picture={<img src={require('../../photos/coinTrace.png')} alt='coinTrace project'></img>}/>
            <BashTerminal outerRef={terminalRef3} name={'CurlyBraces'} picture={<img src={require('../../photos/dsaPhoto.jpeg')} alt='data structures algorithms project'></img>}/>

            <div className='CurlyBraces projectAbout'>
                <p className='projectAbout-name'>CurlyBraces</p>
                <div className='projectAbout-about'>This is a fullstack data structures and algorithms project. Main goal - learn basic creation and implementation of various data structures and algorithms.</div><br></br>
                <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                <ul className='projectAbout-technologies'>
                    <li>The big three(JS,HTML,CSS)</li>
                    <li>MVC(modal-view-controller) principle</li>
                    <li>React</li>
                </ul>
                <div className='projectAbout-view'>
                    <a href='https://github.com/Justasrimavicius/curly-braces'>View code</a>
                    <a href='https://curly-braces.netlify.app/'>Live view</a>
                </div>
            </div>
            <div className='Battleships projectAbout'>
            <p className='projectAbout-name'>Battleships</p>
                <div className='projectAbout-about'>This is a popular old-school game "Battleships" copy. Main reason for this project was to learn mathematical logic in javascript.</div><br></br>
                <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                <ul className='projectAbout-technologies'>
                    <li>The big three(JS,HTML,CSS)</li>
                    <li>Javascript loops and game logic implementation.</li>
                </ul>
                <div className='projectAbout-view'>
                    <a href='https://github.com/Justasrimavicius/battleship'>View code</a>
                    <a href='https://jr-battleships.netlify.app/'>Live view</a>
                </div>
            </div>
            <BashTerminal outerRef={terminalRef4} name={'Battleships'} picture={<img src={require('../../photos/battleshipsIcon.png')} alt='battleships project'></img>}/>
            </div>
        </div>
    );
}

export default Projects;