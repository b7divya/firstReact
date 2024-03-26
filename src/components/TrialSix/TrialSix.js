import React, {useState} from 'react'

import './TrialSix.css'

function TrialSix() {
    const [number, setNumber] = useState('');
    const [isPrime, setIsPrime] = useState(null);

    const Change = (e) => {
        setNumber(e.target.value);
    };

    const checkPrime = () => {
        const num = parseInt(number);
        if (isNaN(num) || num <= 1) {
            setIsPrime(false);
            return;
        }

        for (let i = 2; i <= Math.sqrt(num); i++ ) {
            if (num % i === 0) {
                setIsPrime(false);
                return;
            }
        }
        setIsPrime(true);
    }

  return (
    <div class="section-six">
        <h3>Check Prime/Non-Prime Numbers</h3>
        <input type= 'numbers' placeholder='Insert Number' onChange={Change} style={{backgroundColor: 'pink'}} />
        <button class="six-input" onClick={checkPrime}>Check Prime/Non-Prime</button>
        <output class="six-output">
            {
                isPrime !== null &&
                <div>{parseInt(number)} is {isPrime ? 'Prime' : 'Not Prime' }</div>
            }
        </output>
    </div>
  )
}

export default TrialSix