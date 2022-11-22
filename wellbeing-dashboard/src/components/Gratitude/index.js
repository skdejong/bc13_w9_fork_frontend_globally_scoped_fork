import React, { useState } from 'react';
import App from '../App/index.js';
import GratitudeInput from './GratitudeInput/index.js'
import GratitudeList from './GratitudeList/index.js'

export default function Gratitude(){
    
    const [ gratitude, setGratitude] = useState('');

    function handleClick(userInput){
        setGratitude(...gratitude, userInput);
    }
return(
    <>
        <GratitudeInput handleClick={handleClick} />
        <GratitudeList list={gratitude} />
    </>
)

}