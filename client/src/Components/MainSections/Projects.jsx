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
                <BashTerminal />
                <BashTerminal />
                <BashTerminal />
            </div>
        </div>
    );
}

export default Projects;