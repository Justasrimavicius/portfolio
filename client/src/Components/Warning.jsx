import React, { useEffect } from 'react';
import { useState } from 'react';

function Warning(props) {

    return (
        <div className='warning'>
            <div>justinas@Justinass-MacBook-Pro client % Hellooo</div>
            {props.message.map((msg,index)=>{
                return(<div key={index}>justinas@Justinass-MacBook-Pro client % {msg}</div>)
            })}
            {/* justinas@Justinass-MacBook-Pro client % {props.message[0]} */}
        </div>
    );
}

export default Warning;