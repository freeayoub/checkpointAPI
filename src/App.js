
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState([]);
 useEffect(() => {
 axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setState(res.data))
 }, [])
  return (
    <div className="App">
    {state.map((user) => {
      return <div key={user.id}> {user.name} </div>;
    })}
    </div>
  );
}

export default App;



 
  
  
