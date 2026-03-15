import { useState } from "react"

 export default function Sports(){

        const runStyle={
        border: '2px solid gold',
       'marginTop': '30px'
    }

    const[ runs , setRun]= useState(0);
    const singles=()=>{
        const countSingle= runs+1;
        setRun(countSingle);
    }
    
    const fours=()=>{
        const countSingle= runs+4;
        setRun(countSingle);
    }
    const six=()=>{
        const countSingle= runs+6;
        setRun(countSingle);
    }


    return(
       
        
        <div style={runStyle}>
             {
            runs >50 && <p>You Score:50</p>
        }


        <h3>Score:{runs}</h3>
        <button onClick={singles}>Add Single</button>
        <button onClick={fours}>Add Four</button>
        <button onClick={six}>Add Six</button>
        </div>
    )
 }