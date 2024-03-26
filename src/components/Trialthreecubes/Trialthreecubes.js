import React, {useState}from 'react' 

import './TrialThree.css'

const Trialthreecubes = (props) => {
 


//state for input number
  const [number, setNumber] = useState('');

//state for cube Calculation
  const [cube, setCube] = useState(null)
  
    const handleNumberChange = (e) => {
    setNumber(e.target.value);
    };
    const calculateCube = () => {
      const num = parseFloat(number);
      const cubeResult = num * num * num;
      setCube(cubeResult);
    };

    return (
        <div class= "section-three">
            <h1>{props.cubes}</h1>
            <h3>Cube Calculator</h3>
            <input type="number" onChange={handleNumberChange} placeholder="Enter Number" style={{padding: '2rem', backgroundColor:'pink'}} />
            <button class="three-input" onClick ={calculateCube}> Calculate Cube</button>
            <output class="three-output">{cube}</output>
            {/* <Trialthreecubes cubes={number} /> */}
        </div>
        
    )
}

export default Trialthreecubes