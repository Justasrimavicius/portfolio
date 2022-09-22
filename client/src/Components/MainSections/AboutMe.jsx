import React from 'react';

import TextTypingEffect from '../../Animations/TextTypingEffect';

function AboutMe() {
    return (
        <div className='about'>
            <div className='divider'></div>
            <h5>About me</h5>
            <div className='about-first-paragraph'>
                <TextTypingEffect text={{eraseText:'01001000 01000101 01011001', fullText:'Hello. My name is Justinas.'}} speed={'200'} />
                <h6 className='aboutMe-text'>
                    One chilly spring evening i was sitting on my bed bored out of my mind. That evening i decided, that my time spent mindlessly browsing through
                    social media will not get me anywhere. That's where my self-taught developer journey has started.
                </h6>
            </div>
        </div>
    );
}

export default AboutMe;