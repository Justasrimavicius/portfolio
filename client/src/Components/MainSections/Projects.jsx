import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import BashTerminal from './BashTerminal.jsx';


function Projects(props) {

    const terminalRef1 = useRef(null);
    const terminalRef2 = useRef(null);
    const terminalRef3 = useRef(null);
    const terminalRef4 = useRef(null);
    const terminalRef5 = useRef(null);

    const hasAnimatedT1 = useRef(false);
    const hasAnimatedT2 = useRef(false);
    const hasAnimatedT3 = useRef(false);
    const hasAnimatedT4 = useRef(false);
    const hasAnimatedT5 = useRef(false);

    const project1 = useRef(null);
    const project2 = useRef(null);
    const project3 = useRef(null);
    const project4 = useRef(null);
    const project5 = useRef(null);
    
    const projectsHolder = useRef(null);

    // personally liked the most sort - five, two, one, tree, four
    // creation date sort - one, five, three, two, four

    const [sortingVariants, showSortingVariants] = useState(false);
    const [sort, setSort] = useState('default');
    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            isScrolledIntoView(terminalRef1.current,hasAnimatedT1);
            isScrolledIntoView(terminalRef2.current,hasAnimatedT2);
            isScrolledIntoView(terminalRef3.current,hasAnimatedT3);
            isScrolledIntoView(terminalRef4.current,hasAnimatedT4);
            isScrolledIntoView(terminalRef5.current,hasAnimatedT5);
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
            document.querySelector(`.${elem.id}`).classList.add('popAnim');

        }
    }

    useEffect(()=>{
        if(sort=='personallyLiked'){
            projectsHolder.current.innerHtml='';
            projectsHolder.current.append(project5.current);
            projectsHolder.current.append(project2.current);
            projectsHolder.current.append(project1.current);
            projectsHolder.current.append(project3.current);
            projectsHolder.current.append(project4.current);
        } else if(sort=='creationDate'){
            projectsHolder.current.innerHtml='';
            projectsHolder.current.append(project1.current);
            projectsHolder.current.append(project5.current);
            projectsHolder.current.append(project3.current);
            projectsHolder.current.append(project2.current);
            projectsHolder.current.append(project4.current);
        }
    // creation date sort - one, five, three, two, four
    },[sort])

    return (
        <div className='projects' ref={props.myWorkRef}>
            <div className='divider'></div>
            <div className='sorting-variants'>
                {!sortingVariants ? <button className='projectSort-button' onClick={()=>{showSortingVariants(true)}}>Sort projects</button> :
                <>
                <button className='projectSort-button' onClick={()=>{setSort('creationDate')}}>Creation date(latest to oldest)</button>
                <button className='projectSort-button' onClick={()=>{setSort('personallyLiked')}}>Personally liked the most</button>
                </>}
            </div>
            <h4>My projects</h4>
            <div className='projects-holder' ref={projectsHolder}>
            <div className='single-project-holder' ref={project5}>
                <div className='Microgoogol projectAbout'>
                <p className='projectAbout-name'>Microgoogol(IN PROGRESS)</p>
                    <div className='projectAbout-about'>Microgoogol is a language learning platform that allows you to take lithuanian language lessons, check your mistakes, acquire and use currency, maintain daily streaks and more.</div><br></br>
                    <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                    <ul className='projectAbout-technologies'>
                        <li>The big three(JS,HTML,CSS).</li>
                        <li>Testing(its done in most projects, but i tried to make it better here).</li>
                        <li>Typescript.</li>
                    </ul>
                    <div className='projectAbout-view'>
                        <a href='https://github.com/Justasrimavicius/microgoogol'>View code</a>
                        <a href='https://microgoogol.netlify.app/'>Live view</a>
                    </div>
                </div>
                <BashTerminal outerRef={terminalRef5} name={'Microgoogol'} picture={<img src={require('../../photos/microgoogol.png')} alt='microgoogol project'></img>}/>
            </div>
            <div className='single-project-holder' ref={project1}>
                <div className='GroupProject projectAbout'>
                    <p className='projectAbout-name'>Scrapyard(IN PROGRESS)</p>
                    <div className='projectAbout-about'>This is a group project, that scrapes twitter/reddit information.</div><br></br>
                    <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                    <ul className='projectAbout-technologies'>
                        <li>The big three(JS,HTML,CSS) + PYTHON</li>
                        <li>Real-time data manipulation.</li>
                        <li>Teamwork, more in-depth github usage, code reviews, contribution to meetings.</li>
                    </ul>
                    <div className='projectAbout-view'>
                        <a href='https://github.com/Justasrimavicius/teamProject'>View code</a>
                        {/* <a href='https://cointrace.netlify.app/'>Live view</a> */}
                        <a>Live view currently not available</a>
                    </div>
                </div>
                <BashTerminal outerRef={terminalRef1} name={'GroupProject'} picture={<img src={require('../../photos/groupProject.png')} alt='group project'></img>}/>
            </div>

            <div className='single-project-holder' ref={project2}>
                <div className='CoinTrace projectAbout'>
                    <p className='projectAbout-name'>Cointrace</p>
                    <div className='projectAbout-about'>This is a crypto exchange project - it uses <a href='https://coingecko.com'>coingecko.com</a> API for trading crypto with fake money.</div><br></br>
                    <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                    <ul className='projectAbout-technologies'>
                        <li>The big three(JS,HTML,CSS).</li>
                        <li>(A lot of)API calls and data manipulation.</li>
                        <li>React.</li>
                        <li>Material UI.</li>
                    </ul>
                    <div className='projectAbout-view'>
                        <a href='https://github.com/Justasrimavicius/cointrace'>View code</a>
                        <a href='https://cointrace.netlify.app/'>Live view</a>
                    </div>
                </div>
                <BashTerminal outerRef={terminalRef2} name={'CoinTrace'} picture={<img src={require('../../photos/coinTrace.png')} alt='coinTrace project'></img>}/>
            </div>
            
            <div className='single-project-holder' ref={project3}>
                <div className='CurlyBraces projectAbout'>
                    <p className='projectAbout-name'>CurlyBraces</p>
                    <div className='projectAbout-about'>This is a fullstack data structures and algorithms project. Main goal - learn basic creation and implementation of various data structures and algorithms.</div><br></br>
                    <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                    <ul className='projectAbout-technologies'>
                        <li>The big three(JS,HTML,CSS).</li>
                        <li>MVC(modal-view-controller) principle.</li>
                        <li>Stacks, queues, binary trees, their traversal methods.</li>
                    </ul>
                    <div className='projectAbout-view'>
                        <a href='https://github.com/Justasrimavicius/curly-braces'>View code</a>
                        <a href='https://curly-braces.netlify.app/'>Live view</a>
                    </div>
                </div>
                <BashTerminal outerRef={terminalRef3} name={'CurlyBraces'} picture={<img src={require('../../photos/dsaPhoto.jpeg')} alt='data structures algorithms project'></img>}/>
            </div>

            <div className='single-project-holder' ref={project4}>
                <div className='Battleships projectAbout'>
                <p className='projectAbout-name'>Battleships</p>
                    <div className='projectAbout-about'>This is a popular old-school game "Battleships" copy. Main reason for this project was to learn mathematical logic in javascript.</div><br></br>
                    <div className='projectAbout-technologiesHeading'>Technologies/principles used:</div>
                    <ul className='projectAbout-technologies'>
                        <li>The big three(JS,HTML,CSS).</li>
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

        </div>
    );
}

export default Projects;