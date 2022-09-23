import React, { useEffect } from 'react';
import { useState } from 'react';

import TextTypingEffect from '../../Animations/TextTypingEffect';

function AboutMe() {

    const [animation, startAnimation] = useState(false);
    const [aboutMe, loadAboutMe] = useState(null);

    useEffect(()=>{
        
        function isScrolledIntoView(elem) {                 // function to check if typing element is in view. Start the animation if it is.
            var rect = elem.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;
          
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            if(isVisible==true){
                startAnimation(true);
                setInterval(() => {
                    loadAboutMe(true);
                }, 11000);
            }
        }

        window.addEventListener('scroll',()=>{
            isScrolledIntoView(document.querySelector('.aboutMe-first-section'));
        })
    },[])

    return (
        <div className='about'>
            <div className='divider'></div>
            <h5>About me</h5>
            <div className='aboutMe-first-section'>
                {animation==true ? <TextTypingEffect text={{eraseText:'01001000 01000101 01011001', fullText:'Hello. My name is Justinas.'}} speed={'200'} /> : <span className='typing-span'>Hey! Over here!</span>}
                    {aboutMe ? 
                        <div className='aboutMe-first-paragraph'>
                            <span className='aboutMe-first-paragraph-text'>
                                Powered by coffee and sleepless nights, my web development journey started in 2022 spring. Following <a href='https://theodinproject.com'>TheOdinProject</a> and
                                other various online and in-person resources I managed to understand how the web and its pieces work.
                            </span>
                            <div className='img-outline'>
                                <img src={require('../../photo.jpg')} ></img>
                                <div></div>
                            </div>
                        </div>
                    : null}
            </div>
        </div>
    );
}

export default AboutMe;