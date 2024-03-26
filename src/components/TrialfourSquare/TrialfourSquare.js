import React, { useState } from 'react'
import './Trialfour.css'

function TrialfourSquare() {
  
    //state for input text
    const [value, setValue] = useState("");

    //state for input number 
    const [number, setNumber] = useState('');

    //state for square calculation 
    const [square, setSquare] = useState(null)

    const textModify = (e) => {
        setNumber(e.target.value);
    }

    const calculateSquare = () => {
        const num = parseFloat(number);
        const squareResult = num * num;
        setSquare(squareResult);
    }

    return (
        <div class="section-four">
            <h3>Square Calculator</h3>
            <input type='number' placeholder="Enter Number" onChange={textModify} style={{padding: '50px', padding: '8px', backgroundColor: 'pink'}}  />
            <button class="four-input" onClick={calculateSquare}>Calculate Square</button>
            <output class="four-output">{square}</output>
        </div>
    )
  
}

export default TrialfourSquare