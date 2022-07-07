import React,{useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className="bubbles">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
        <span className="five"></span>
        <span className="six"></span>
        <span className="seven"></span>
      </div>
      <div className="calculator">
        <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
        <div className="buttons">
          <input type="button" value="AC" onClick={()=>setValue("")}/>
          <input type="button" value="DEL" onClick={()=>setValue(val=>{return val.substring(0,val.length-1)})}/>
          <input type="button" value="%" onClick={()=>setValue(val=>{return val+"%"})}/>
          <input type="button" value="/" onClick={()=>setValue(val=>{return val+"/"})}/>
        </div>
        <div className="buttons">
          <input type="button" value="7" onClick={()=>setValue(val=>{return val+"7"})}/>
          <input type="button" value="8" onClick={()=>setValue(val=>{return val+"8"})}/>
          <input type="button" value="9" onClick={()=>setValue(val=>{return val+"9"})}/>
          <input type="button" value="*" onClick={()=>setValue(val=>{return val+"*"})}/>
        </div>
        <div className="buttons">
          <input type="button" value="4" onClick={()=>setValue(val=>{return val+"4"})}/>
          <input type="button" value="5" onClick={()=>setValue(val=>{return val+"5"})}/>
          <input type="button" value="6" onClick={()=>setValue(val=>{return val+"6"})}/>
          <input type="button" value="-" onClick={()=>setValue(val=>{return val+"-"})}/>
        </div>
        <div className="buttons">
          <input type="button" value="1" onClick={()=>setValue(val=>{return val+"1"})}/>
          <input type="button" value="2" onClick={()=>setValue(val=>{return val+"2"})}/>
          <input type="button" value="3" onClick={()=>setValue(val=>{return val+"3"})}/>
          <input type="button" value="+" onClick={()=>setValue(val=>{return val+"+"})}/>
        </div>
        <div className="buttons">
          <input type="button" value="0" onClick={()=>setValue(val=>{return val+"0"})}/>
          <input type="button" value="00" onClick={()=>setValue(val=>{return val+"00"})}/>
          <input type="button" value="." onClick={()=>setValue(val=>{return val+"."})}/>
          <input type="button" value="=" onClick={()=>setValue(eval(value))}/>
        </div>
      </div>
    </div>
  );
}

export default App;
