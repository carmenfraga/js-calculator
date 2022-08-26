import './App.css';
import React, { useEffect, useState } from "react";


function App() {

const [displayPrimaryValue, setDisplayPrimaryValue] = useState(0)
const [displaySecondaryValue, setDisplaySecondaryValue] = useState('')

const handleClearClick = () => {
  setDisplayPrimaryValue(0)
  setDisplaySecondaryValue('')
}

const handleNumberClick = (event) => {
  const numberClicked = event.target.value
  const newValue = displayPrimaryValue === 0 ? numberClicked : displayPrimaryValue + numberClicked
  const secondaryValue = displaySecondaryValue + numberClicked
  setDisplayPrimaryValue(eval(secondaryValue))
  setDisplaySecondaryValue(secondaryValue)
}

const handleOperatorClick = (event) => {
  const operatorClicked = event.target.value

  setDisplaySecondaryValue(displaySecondaryValue + operatorClicked)
  
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
      <button id="add" onClick={handleOperatorClick} value="+">+</button>
      <button id="subtract" onClick={handleOperatorClick} value="-">-</button>
      <button id="multiply" onClick={handleOperatorClick} value="*">X</button>
      <button id="divide" onClick={handleOperatorClick} value="/">/</button>
      <button id="decimal">.</button>
      <button id="clear" onClick={handleClearClick}>AC</button>
      <div id="displaySecondary">{displaySecondaryValue}</div>
      <div id="display">{displayPrimaryValue}</div>


</div>
  );
}

export default App;
