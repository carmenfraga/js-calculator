import "./App.css";
import React, { useState } from "react";

function App() {
  const [displayPrimaryValue, setDisplayPrimaryValue] = useState("0");
  const [displaySecondaryValue, setDisplaySecondaryValue] = useState("");
  const [total, setTotal] = useState(0);
  const [isEqualsClicked, setIsEqualsClicked] = useState(false);

  const handleClearClick = () => {
    setDisplayPrimaryValue("0");
    setDisplaySecondaryValue("");
    setIsEqualsClicked(false);
  };

  const handleNumberClick = (event) => {
    const numberClicked = event.target.value;

    if (isEqualsClicked) {
      setDisplayPrimaryValue(numberClicked);
      setDisplaySecondaryValue(numberClicked);
      setTotal(numberClicked);
      setIsEqualsClicked(false);
      return;
    }

    const primaryValue =
      displayPrimaryValue === "0"
        ? numberClicked
        : displayPrimaryValue + numberClicked;

    const secondaryValue =
      displaySecondaryValue === "0"
        ? numberClicked
        : displaySecondaryValue + numberClicked;

    setTotal(eval(secondaryValue));
    setDisplayPrimaryValue(primaryValue);
    setDisplaySecondaryValue(secondaryValue);
    setIsEqualsClicked(false);
  };

  const handleOperatorClick = (event) => {
    const operatorClicked = event.target.value;

    setDisplayPrimaryValue("0");
    setDisplaySecondaryValue(displaySecondaryValue + operatorClicked);
    setIsEqualsClicked(false);
  };

  const handleEqualsClick = () => {
    setDisplayPrimaryValue(total);
    setIsEqualsClicked(true);
  };

  return (
    <div className="App">
      <h1>My Javascript Calculator</h1>

      <div id="calculator-box">
        <div class="display" id="displaySecondary">
          {displaySecondaryValue}
        </div>
        <div class="display" id="display">
          {displayPrimaryValue}
        </div>
        <button id="clear" onClick={handleClearClick}>
          AC
        </button>
        <button
          class="operator-button"
          id="divide"
          onClick={handleOperatorClick}
          value="/"
        >
          /
        </button>
        <button
          class="operator-button"
          id="multiply"
          onClick={handleOperatorClick}
          value="*"
        >
          X
        </button>
        <button
          class="operator-button"
          id="add"
          onClick={handleOperatorClick}
          value="+"
        >
          +
        </button>
        <button id="seven" onClick={handleNumberClick} value="7">
          7
        </button>
        <button id="eight" onClick={handleNumberClick} value="8">
          8
        </button>
        <button id="nine" onClick={handleNumberClick} value="9">
          9
        </button>
        <button
          class="operator-button"
          id="subtract"
          onClick={handleOperatorClick}
          value="-"
        >
          -
        </button>
        <button id="four" onClick={handleNumberClick} value="4">
          4
        </button>
        <button id="five" onClick={handleNumberClick} value="5">
          5
        </button>
        <button id="six" onClick={handleNumberClick} value="6">
          6
        </button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
        <button id="one" onClick={handleNumberClick} value="1">
          1
        </button>
        <button id="two" onClick={handleNumberClick} value="2">
          2
        </button>
        <button id="three" onClick={handleNumberClick} value="3">
          3
        </button>
        <button id="zero" onClick={handleNumberClick} value="0">
          0
        </button>
      </div>
      <div id="calculator-buttons"></div>
    </div>
  );
}

export default App;
