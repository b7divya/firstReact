import React, { useState } from 'react'
import "./TrialSeven.css"

function TrialSeven () {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setNumber(e.target.value)
    };

    const checkNumber = () => {
        const num = parseInt(number);
        if (isNaN(num)) {
            setResult('PLease Enter a Valid Number');
        } else {
            const isEven = num % 2 === 0;
            setResult(`The number ${num} is ${isEven ? 'even' : 'odd'}.`);
        }
    }


  
    return (
      <div class="section-seven">
        <h3>Check Check Even/Odd Numbers</h3>
        <input type='number' placeholder='Enter Number' style={{backgroundColor: 'pink'}} onChange={handleChange}  />
        <button class="six-input" onClick={checkNumber}>Check Number</button>
        <output class="six-output">{result}</output>
      </div>
    )
  }

export default TrialSeven