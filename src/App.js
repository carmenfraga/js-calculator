import './App.css';
import React, { useEffect, useState } from "react";


function App() {

const [displayValue, setDisplayValue] = useState(0)

const handleClearClick = () => {
  setDisplayValue(0)
}

const handleNumberClick = (event) => {
  setDisplayValue(event.target.value)
}

  return (
    <div className="App">
      <h1>My Javascript Calculator</h1>
      <button id="equals">=</button>
      <button id="zero" onClick={handleNumberClick} value="0">0</button>
      <button id="one" onClick={handleNumberClick} value="1">1</button>
      <button id="two" onClick={handleNumberClick} value="2">2</button>
      <button id="three" onClick={handleNumberClick} value="3">3</button>
      <button id="four" onClick={handleNumberClick} value="4">4</button>
      <button id="five" onClick={handleNumberClick} value="5">5</button>
      <button id="six" onClick={handleNumberClick} value="6">6</button>
      <button id="seven" onClick={handleNumberClick} value="7">7</button>
      <button id="eight" onClick={handleNumberClick} value="8">8</button>
      <button id="nine" onClick={handleNumberClick} value="9">9</button>
      <button id="add">+</button>
      <button id="subtract">-</button>
      <button id="multiply">X</button>
      <button id="divide">/</button>
      <button id="decimal">.</button>
      <button id="clear" onClick={handleClearClick}>AC</button>
      <div id="display">{displayValue}</div>


</div>
  );
}

export default App;
