import React from 'react';

function ContactMe(props){

    function formSubmit(){
        const email = document.querySelector('#email');
        if(/[a-z0-9]((\.|\+)?[a-z0-9]){5,}@g(oogle)?mail\.com$/g.test(email.value)){
            email.setCustomValidity('');
            email.reportValidity();
            document.querySelector('form').submit();
        } else {
            email.setCustomValidity('Not a valid email. Format: example@gmail.com');
            email.reportValidity();
        }
    }

    return (
        <div className='contactMe' ref={props.contactMeRef}>
            <div className='divider'></div>
            <div className='contacting-form'>
            <div className='contacting-form-text'>
                <h6>Contacts</h6>
                <p>I still have a lot to tell about myself!</p>
                <p>Send me a message.</p>
            </div>
            <form action='https://getform.io/f/113db32c-0971-4362-8959-974a6d6fd184' method="post">
            {/* <form action='' method="post"> */}
            <p onClick={()=>{navigator.clipboard.writeText('justinas.rimavicius1@gmail.com'); props.setEmailCopiedAlert(true)}} style={{cursor:'pointer'}}>justinas.rimavicius1@gmail.com</p>

                <div className='mailDiv'>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" name='email' id='email' placeholder='little-johhny@yahoo.com'></input>
                </div>
                <div className='nameDiv'>
                    <label htmlFor='name'>Name:</label>
                    <input type={'text'} name='name' id='name' placeholder='About the pizza recipe'></input>
                </div>
                <div className='second-row'>
                    <label htmlFor='message'>Message:</label>
                    <textarea type={'text'} name='message' id='message'></textarea>
                </div>
                <button type='submit' onClick={()=>{formSubmit()}}>Let's talk!</button>
            </form>
            </div>

        </div>
    );
}

export default ContactMe;