import React from 'react';

import BashTerminal from './BashTerminal.jsx';

// import '../../curlyBraces.png';

function Projects() {
    return (
        <div className='projects'>
            <div className='divider'></div>
            <h4>My projects</h4>
            <div className='projects-holder'>
                <BashTerminal />
                <div className='group-project'></div>
                <div className='coinTrace'></div>
                <BashTerminal />
                <BashTerminal />
                <div className='curlyBraces'></div>
                <div className='battleships'></div>
                <BashTerminal />
            </div>
        </div>
    );
}

export default Projects;