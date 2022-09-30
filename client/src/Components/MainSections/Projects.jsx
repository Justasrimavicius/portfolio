import React from 'react';

import BashTerminal from './BashTerminal.jsx';


function Projects(props) {
    return (
        <div className='projects' ref={props.myWorkRef}>
            <div className='divider'></div>
            <h4>My projects</h4>
            <div className='projects-holder'>
                {/* picture location prop is from the BashTerminal.jsx perspective */}
                <BashTerminal name={'GroupProject'} picture={<img src={require('../../photos/groupProject.jpeg')} alt='group project'></img>}/>
                <div className='GroupProject projectAbout'>
                    group project
                </div>
                <div className='CoinTrace projectAbout'>
                    coin trace
                </div>
                <BashTerminal name={'CoinTrace'} picture={<img src={require('../../photos/coinTrace.png')} alt='coinTrace project'></img>}/>
                <BashTerminal name={'CurlyBraces'} picture={<img src={require('../../photos/dsa.png')} alt='data structures algorithms project'></img>}/>

                <div className='CurlyBraces projectAbout'>
                    curly braces
                </div>
                <div className='Battleships projectAbout'>
                    batleships
                </div>
                <BashTerminal name={'Battleships'} picture={<img src={require('../../photos/battleship.jpeg')} alt='battleships project'></img>}/>
            </div>
        </div>
    );
}

export default Projects;