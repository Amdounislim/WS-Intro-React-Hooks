import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
   console.log("Effect")
  }, [counter, show])

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>ShowCounter</button>
      {show && <div>
        <button onClick={() => setCounter(counter + 1)} >+</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>}

    </div>
  );
}

export default App;
