import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// css rules are on projectSct.css
import Warning from '../Warning.jsx';

function BashTerminal() {

    const [bashButtons, setBashButtons] = useState(false);
    const [warning, setWarning] = useState([]);
    const [timesTriedToTurnOff, setTimesTriedToTurnOff] = useState(0);

    const [canClickRedButton, setCanClickRedButton] = useState(true);

    function callWarning(){
        let temp = warning;

        if(timesTriedToTurnOff==0){
            temp.push(`Hey! Don't try to turn me off..`);
            setWarning(temp)
            setTimesTriedToTurnOff(timesTriedToTurnOff + 1);
        } else if(timesTriedToTurnOff==1){
            temp.push('Stop it!')
            setWarning(temp)
            setTimesTriedToTurnOff(timesTriedToTurnOff + 1);

        } else if(timesTriedToTurnOff==2){
            temp.push('I MEAN ITT! THIS IS THE LAST WARNING')
            setWarning(temp)
            setTimesTriedToTurnOff(timesTriedToTurnOff + 1);
        } else{
            temp.push(`That's it. Your red button privilages have been taken away.`)
            setWarning(temp);
            setCanClickRedButton(false);
            setTimesTriedToTurnOff(timesTriedToTurnOff + 1);
        }
        
    }

    return (
        <div className='BashTerminal'>
            <div className='upper-stripe'>
                <div className='BashTerminal-buttons' onMouseEnter={()=>{setBashButtons(true)}} onMouseLeave={()=>{setBashButtons(false)}}>
                    {canClickRedButton == true ? <div className='red' onClick={()=>{callWarning()}}><div className='red-dot'></div></div> :
                    <div className='red'><div className='red-dot'></div></div>}
                    
                    
                    
                    <div className='orange'>
                        {bashButtons == true ? <div className='orange-dash'></div> : null}
                    </div>
                    <div className='green'>
                        {bashButtons == true ? <svg id="eX0bv67xGBD1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M0,0v8L8,0h-8Z" transform="translate(1.878667 1.735637)" stroke="#191919" strokeWidth="0.5"/><path d="M16,8v8h-8l8-8Z" transform="translate(-2.714344-2.264363)" stroke="#191919" strokeWidth="0.5"/></svg> : null}
                    </div>
                </div>
                <div className='BashTerminal-name'><span>client-zsh--80x24</span></div>

            </div>
            {/* <img src='../../curlyBraces.png' alt='curlybraces project'></img> */}
            <Warning message={warning}></Warning>
        </div>
    );
}

export default BashTerminal;