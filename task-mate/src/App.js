import { useState } from 'react';
import './App.css';
// import React from 'react'

function App() {
  const[count,setCount]=useState(0)
  function handleAdd(){
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    console.log(count)
  }
  function handlesub(){
    setCount(count-1);
    console.log(count)
  }
  function Reset(){
    setCount(0);
    console.log(count)
  }
  return (
    <>
    <div className="box">
      <p>{count}</p>
      <button onClick={handleAdd} className='add'>ADD</button>
      <button onClick={handlesub} className='sub'>SUB</button>
      <button onClick={Reset} className='Reset'>Reset</button>
    </div>
  
    </>
  )
}

export default App;
