
import './App.css'
import ToDo from './TodoNew';

function App() {

  return (
    <>

    <h1>Hello react</h1>
    <ToDo learn='react' duration='30' isDone={false}></ToDo>
    <ToDo learn='wordpress' duration='50' isDone={true}></ToDo>
    <ToDo learn='shopify' duration='30' isDone={true}></ToDo>
    {/* <Person></Person>
    <Developer name="niloy" tech="Web"></Developer>
    <Developer name="Sabuj" tech="back-end"></Developer>
    <Address name="Niloy" location="Dhaka"></Address> */}
      
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
function Address({name , location}){
  return(
  <div style={{
      border: '1px solid green',
      borderRadius: '20px',
      marginTop:'20px'
    }}>    <p>Name:{name}</p>
    <p>Location:{location}</p>
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
