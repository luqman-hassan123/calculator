import "./App.css";
import "./calculator.css";
import Card from "./components/card/Card";
import Input from "./components/Input";
import Output from "./components/output/Output";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState(""); // Track the entire expression
  const [currentValue, setCurrentValue] = useState("0"); // Track current number being entered
  const [isResultShown, setIsResultShown] = useState(false); // Flag to check if result is shown
  const [InputValue, setInputValue] = useState("");


  // handle function for input numbers
  const handleInputChnage = (e) => {
    setInputValue(e.target.value);
  };
  
  // handle function for buttons click
  const handleClick = (value) => {
    if (value === "C") {
      // Clear the expression and current value
      setExpression("");
      setCurrentValue("0");
      setIsResultShown(false);
    } else if (value === "=") {
      // Evaluate the expression when '=' is clicked
      try {
        // Use eval to calculate the result
        let result = eval(expression);

        // Check if the result is a float, and limit to 4 decimal places if so
        if (!Number.isInteger(result)) {
          result = result.toFixed(4);
        }

        setCurrentValue(result.toString());
        setExpression(`${result}`); // Show full expression with result
        setIsResultShown(true);
      } catch (error) {
        setCurrentValue("Error");
      }
    } else {
      // Append the clicked value to the expression
      if (isResultShown) {
        // If result was shown, start a new expression
        setExpression(value.toString());
        setIsResultShown(false);
      } else {
        setExpression((prev) => prev + value.toString());
      }

    

      // Update current value if a number is clicked
      if (!isNaN(value)) {
        setCurrentValue((prev) =>
          prev === "0" || isResultShown ? value.toString() : prev + value
        );
      }
    }
  };

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operators = ["+", "-", "*", "/", "C", "="];

  return (
    <div className="App">
      <h1 className="heading">Calculator</h1>
      <Card>
        <Input
          type="text"
          value={expression}
          className="input"
          handlClick={handleInputChnage}
        />
 

        {/* number buttons  */}
        <div className="box">
          {numbers.map((item) => (
            <Button
              key={item}
              title={item}
              onButtonClick={() => handleClick(item)}
              classes="btn"
            >
              {item}
            </Button>
          ))}
        </div>

        {/*  Operator buttons  */}
        <div className="box">
          {operators.map((item) => (
            <Button
              key={item}
              title={item}
              onButtonClick={() => handleClick(item)}
              classes="btn operator"
            >
              {item}
            </Button>
          ))}
        </div>
      
      </Card>
  
    </div>
  );
}

export default App;
