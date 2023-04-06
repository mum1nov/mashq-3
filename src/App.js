import './App.css';
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0)
  function inscerement() {
    if (counter <= 98) {
      setCounter(counter + 1)

    }
  }
  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1)
    }

  }

  return (
    <div className="App" >
      <button onClick={inscerement}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
    </div >
  );
}

export default App;
