import React from 'react';

function Warning(props) {

    return (
        <div className='warning'>
            {props.message.map((msg,index)=>{
                return(<div key={index}>justinas@Justinass-MacBook-Pro client % {msg}</div>)
            })}
        </div>
    );
}

export default Warning;