import React, {useState} from 'react'

import './TrialFive.css'

function TrialFiveString() {
    const [inputValue, setInputValue] = useState('');
    const [reversedValue, setReversedValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const reverseString = () => {
        const reversed = inputValue.split('').reverse().join('')
        setReversedValue(reversed)
    }
        return(
            <div class="section-five">
                <h3>Reverse The String</h3>
                <input type='text' placeholder='Insert Text'  style={{padding: '1.5 rem', backgroundColor: 'pink'}} onChange={handleChange} />
                <button class="five-input" onClick={reverseString}>Reverse String</button>
                <output class="five-output">{reversedValue}</output>
            </div>
        )
}

export default TrialFiveString