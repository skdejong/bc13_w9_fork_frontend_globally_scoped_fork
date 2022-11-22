import React, { useState } from 'react';
import Gratitude from '../index.js';

export default function GratitudeInput({handleClick}){

    const [userInput, setUserInput] = useState('');

    function handleChange(e){
        setUserInput(e.target.value)
    }
return (
    <section>
            <input value={userInput} onChange={handleChange}/>
            <button
            onClick={() => {
            handleClick(userInput);
            }}
        >
            Submit
            </button>
    </section>
)

}