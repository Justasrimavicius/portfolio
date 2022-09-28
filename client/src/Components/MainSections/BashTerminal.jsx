import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// css rules are on projectSct.css
import Warning from '../Warning.jsx';

// import '../../photos/dsa.jpeg';


function BashTerminal(props) {

    const [projectName, setProjectName] = useState(props.name);

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
    
    function minimizeProject(e){
        e.stopPropagation();
        console.log(e);


        const project = document.getElementById(projectName);
        
        const left = project.getBoundingClientRect().left;
        const width = project.getBoundingClientRect().width;
        const height = project.getBoundingClientRect().height;

        console.log(project.getBoundingClientRect())
        project.classList.add('minimized-BashTerminal-preAnim');
        project.style.position='fixed';

        // very weird way of setting the positions, but it worked for this case. .getBoundingClientRect() values for right were inacurate and i can use left value
        // because the terminal, when minimzed, should stay at the bottom right corner at the same place(it moves a little when the value is left and not right)
        project.style.bottom=`${window.innerHeight-height-e.clientY+24}px`;
        project.style.right=`${window.innerWidth-width-left-5}px`;
        project.style.width=`${width}px`;
        project.style.height=`${height}px`;
        

        setTimeout(() => {
            project.classList.add('minimized-BashTerminal');
        }, 50);

        const projectAbout = document.querySelector(`.${projectName}`);
        projectAbout.style.display='none';


    }
    
    function bashTerminalClicked(){
            const project = document.getElementById(projectName);
            const projectAbout = document.querySelector(`.${projectName}`);
            if(project.classList.contains('minimized-BashTerminal')){
                project.classList.remove('minimized-BashTerminal');
                project.classList.remove('minimized-BashTerminal-preAnim');
                project.style.position='relative';
                project.style.bottom='unset';
                project.style.right='unset';
                projectAbout.style.display='block';
                
                // should add animations to get the bashTerminal(project) back to the grid
            }      

    }

    return (
        <div className='BashTerminal' id={props.name} onClick={()=>{bashTerminalClicked()}}>
            <div className='upper-stripe'>
                <div className='BashTerminal-buttons' onMouseEnter={()=>{setBashButtons(true)}} onMouseLeave={()=>{setBashButtons(false)}}>
                    {canClickRedButton == true ? <div className='red' onClick={()=>{callWarning()}}><div className='red-dot'></div></div> :
                    <div className='red'><div className='red-dot'></div></div>}
                    
                    
                    
                    <div className='orange' onClick={(e)=>{minimizeProject(e)}}>
                        {bashButtons == true ? <div className='orange-dash'></div> : null}
                    </div>
                    <div className='green'>
                        {bashButtons == true ? <svg id="eX0bv67xGBD1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M0,0v8L8,0h-8Z" transform="translate(1.878667 1.735637)" stroke="#191919" strokeWidth="0.5"/><path d="M16,8v8h-8l8-8Z" transform="translate(-2.714344-2.264363)" stroke="#191919" strokeWidth="0.5"/></svg> : null}
                    </div>
                </div>
                <div className='BashTerminal-name'><span>{props.name}-zsh--80x24</span></div>

            </div>
            <div className='terminal'>
                <div>justinas@Justinass-MacBook-Pro client % npm load-image</div>
                {props.picture}
                <Warning message={warning}></Warning>
            </div>
        </div>
    );
}

export default BashTerminal;