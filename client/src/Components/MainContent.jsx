import React from 'react';
import { useEffect } from 'react';

import MouseCursorEffect from '../Animations/MouseCursorEffect';

function MainContent() {

    useEffect(()=>{
        MouseCursorEffect();
        document.querySelector('.intro-text').classList.add('left-fadein');
    },[])

    return (
        <main className='MainContent'>
            <canvas id='myCanvas'></canvas>
            <div className='above-fold'>
                <div className='intro-text'>
                    <h6 className='intro-text-first'>Hello,<br></br>
                        my name is
                    </h6>
                    <h6 className='intro-text-second'>
                        Justinas.
                    </h6>
                    <h6 className='intro-text-third'>
                        I'm a<br></br>
                        web developer.
                    </h6>
                </div>
            </div>
        </main>
    );
}

export default MainContent;