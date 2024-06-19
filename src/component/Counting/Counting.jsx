import React,{useState} from "react";
import './counting.css'
export default function Counting() {
    const [count,setCount] = useState(0);
    function CountingPush() {
      setCount(c => c + 1)
    }
    function CountingReset() {
      setCount(c => 0)
    }
    function CountingPull() {
      setCount(c => c - 1)
    }
  return(
    <div className="container">
        <h1>Counting Number</h1>
        <p>{count}</p>
        <button className="push" onClick={CountingPush}>PUSH ME UP!!!</button>
        <button className="reset" onClick={CountingReset}>RESET</button>
        <button className="pull" onClick={CountingPull}>PULL ME UP!!!</button>
    </div>
  );
}
