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
                <span>XX</span>
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
            <BashTerminal outerRef={terminalRef3} name={'CurlyBraces'} picture={<img src={require('../../photos/dsa.png')} alt='data structures algorithms project'></img>}/>

            <div className='CurlyBraces projectAbout'>
                curly braces
            </div>
            <div className='Battleships projectAbout'>
                batleships
            </div>
            <BashTerminal outerRef={terminalRef4} name={'Battleships'} picture={<img src={require('../../photos/battleship.jpeg')} alt='battleships project'></img>}/>
            </div>
        </div>
    );
}

export default Projects;