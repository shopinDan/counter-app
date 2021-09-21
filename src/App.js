import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
  return (
    <div className="App">
        <h1 className={count >= 0? "positive" : "negative"}>{count}</h1>
        <div className="button__wrapper">
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
        <h2>test yjsafghsa</h2>

    </div>
  );
}

export default App;
