import { useState } from "react"

const Counter=()=>{

    const[count, setCount]=useState(0);

    const clickedButton=()=>{
         const newCount= count + 1;
        
        setCount(newCount);
    }

    const countStyle={
        border: '2px solid gold',
       'marginTop': '30px'
    }
    return(
        <div style={countStyle}>
            <p>Count:{count}</p>
            <button onClick={clickedButton}>Add More</button>
        </div>
    )
}

export default Counter