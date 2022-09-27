import React from 'react';

// css rules are on projectSct.css

function BashTerminal() {
    return (
        <div className='BashTerminal'>
            <div className='upper-stripe'>
                <div className='BashTerminal-buttons'>
                    <div className='red'></div>
                    <div className='orange'></div>
                    <div className='green'></div>
                </div>
                <div className='BashTerminal-name'><span>client-zsh--80x24</span></div>

            </div>
            {/* <img src='../../curlyBraces.png' alt='curlybraces project'></img> */}
        </div>
    );
}

export default BashTerminal;