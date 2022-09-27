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

    useEffect(()=>{
        if(aboutMe!=null){
            setTimeout(() => {
                document.querySelector('.aboutMe-first-paragraph').style.opacity='1';
                document.querySelector('.aboutMe-second-section').style.opacity='1';
            }, 333);
        }
    },[aboutMe])

    return (
        <div className='about'>
            <div className='divider'></div>
            <h4>About me</h4>
            <div className='aboutMe-first-section'>
                {animation==true ? <TextTypingEffect text={{eraseText:'01001000 01000101 01011001', fullText:'Hello. My name is Justinas.'}} speed={'200'} /> : <span className='typing-span'>Hey! Over here!</span>}
                    {aboutMe ?
                        <div className='aboutMe-first-paragraph'>
                            <span className='aboutMe-first-paragraph-text'>
                                Powered by coffee and sleepless nights, my web development journey started in 2022 spring. Following <a href='https://theodinproject.com'>TheOdinProject</a> and
                                other various online and in-person resources I managed to get an understanding of how the web and its pieces work.
                            </span>
                            <div className='img-outline'>
                                <img src={require('../../photos/photo.jpg')} ></img>
                                <div></div>
                            </div>
                        </div>
                    : null}
            </div>
            {aboutMe ?
            <div className='aboutMe-second-section'>
                <h5>acquired skills:</h5>
                <div style={{width:'100vw',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <div className='skills'>
                        <div className='development-skills'>
                            <div>
                                <button className='js'>Javascript</button>
                                <button className='html'>HTML</button>
                                <button className='css'>CSS</button>
                                <button className='fb'>Firebase</button>

                                <button className='mdb'>MongoDB</button>
                                <button className='rjs'>React.js</button>
                                <button className='mui'>MaterialUI</button>


                                <button className='njs'>NodeJS ecosystem</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div> : null}
        </div>
    );
}

export default AboutMe;