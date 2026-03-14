
import './App.css'

function App() {

  return (
    <>

    <h1>Hello react</h1>
    <Person></Person>
    <Developer name="niloy" tech="Web"></Developer>
    <Developer name="Sabuj" tech="back-end"></Developer>
      
    </>
  )
}
function Developer(props){
  return(
    <div style={{
      border: '1px solid green',
      borderRadius: '20px',
      marginTop:'20px'
    }}>

      <p>Name: {props.name}</p>
      <p>Tech: {props.tech}</p>

    </div>
  )
}
function Person(){
  const name= 'Niloy';
    const age= 20;
  return (
    <>
    <h3>How's your day</h3>
    <p> my name is {name} & my age is {age}</p>
    </>
    
    
  )
}

export default App
