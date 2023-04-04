import "./App.css";
import {useState} from 'react';

function App() {

    const [name,setName]= useState("");
    const [age,setAge]= useState(0);
    const [country,setCountry] = useState("");
    const [postiion,setPosition] = useState("");
    const [wage,setWage]= useState(0);

    const display=()=>{
      console.log(name + age + country + postiion + wage); 
    }

  return (
    <div className="App"> 

    

      <div className="information">
          <label>Name </label>
          <input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
          <label>Age </label>
          <input type='number' onChange={(event)=>{setAge(event.target.value)}}></input>
          <label>Country</label>
          <input type='text' onChange={(event)=>{setCountry(event.target.value)}}></input>
          <label>Position</label> 
          <input type='text' onChange={(event)=>{setPosition(event.target.value)}}></input>
          <label>Wage</label>
          <input type='number' onChange={(event)=>{setWage(event.target.value)}}></input>
          <button onClick={display}>Add Employee</button>


      </div>
  

    </div>
  );
}

export default App;
