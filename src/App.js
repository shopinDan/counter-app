import './App.css';
import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [res, setRes] = useState(5)
    useEffect(() => {
        console.log('first')
    }, [])
    useEffect(() => {
        console.log('update')
    }, [count])
    useEffect(() => {
        return (() => {
            console.log('will unmount')
        })
    }, [res])
    useEffect(() => {
        console.log('UPDATE!!!')
    })
  return (
    <div className="App">
        <h1 className={count >= 0? "positive" : "negative"}>{count}</h1>
        <div className="button__wrapper">
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <button onClick={()=>setRes(res * 0)}>*</button>
            {res > 0 && res}
        </div>

    </div>
  );
}

export default App;
