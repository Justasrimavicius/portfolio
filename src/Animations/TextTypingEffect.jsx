import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function TextTypingEffect(props) {

    let text = '';

    let eraseText = props.text.eraseText;
    const fullText = props.text.fullText;

    const [finalText, setFinalText] = useState('');
    const [startAnimation, setStartAnimation] = useState(null);


    function textTypingRecursion(i){                    // initial text typing. Types out the eraseText, then calls fullTextRecursion.
        text+=eraseText[i];
        setFinalText(text);
        setTimeout(() => {
            if(i<eraseText.length-1){
                i++;
                return textTypingRecursion(i);
            } else {
                let j = 0;
                setTimeout(() => {
                    return fullTextRecursion(j);
                }, 1500);
            }
        }, props.speed/2);
    }

    function fullTextRecursion(j){                      // deletes the eraseText, then types out the fullText.
        if(j==0 && eraseText.length>0){
            setTimeout(() => {
                eraseText = eraseText.replace(/.$/,"");
                text=text.slice(0,-1);
                setFinalText(text);
                fullTextRecursion(j);
            }, 66);
        } else {
            setTimeout(() => {
                text+=fullText[j];
                setFinalText(text);
                if(j<fullText.length-1){
                    j++;
                    return fullTextRecursion(j);
                }
            }, props.speed*0.8);
        }
    }

    useEffect(()=>{

        let i = 0;
        textTypingRecursion(i);

    },[])


    useEffect(()=>{                                         // cursor blinking effect
        const cursor = document.querySelector('.cursor')
        setInterval(() => {
            if(cursor.style.opacity==1){
                cursor.style.opacity='0';
            } else if(cursor.style.opacity==0){
                cursor.style.opacity='1';
            }
        }, 600);
    
    },[])


    return (
        <span className='typing-span'>
            {finalText}<span className='cursor'>|</span>
        </span> 
    );
}

export default TextTypingEffect;