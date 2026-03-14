// export default function ToDo({learn,duration,isDone}){
//     if (isDone){
//         return <li>Learn:{learn} duration:{duration} </li>
//     }
//     else{
//         return <li>Learn:{learn} duration:{duration} </li>
//     }
// }

//ternary operation

export default function ToDo({learn,duration,isDone}){
    return isDone? <li>Learn:{learn} duration:{duration}</li>:
    <li>Learn:{learn} duration:{duration}</li>

       }