import React, {useState} from 'react' 
import './Trialtwo.css'

const Trialtwo = (props) => {

    //state for input text
const [value, setValue] = useState("");

const handleChange = (e) => {
    setValue(e.target.value);
}
    return (
        <div class= "section-two">
            <h1>{props.abc}</h1>
            <h3>Text Generator</h3>
            <input onChange={handleChange} placeholder= "Click Here" style={{padding: '1.5rem', backgroundColor: 'pink', color:'maroon'}} type = 'text' />
            <p>The content of the box is: {value}</p>
        </div>
        
    )
}



export default Trialtwo