import './App.css';
import './calculator.css';
import Card from './components/card/Card';
import Output from './components/output/Output';
import Buttons from './components/buttons/Buttons';
import { useState } from 'react';

function App() {
  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (value) => {
    if (value === 'C') {
      setCurrentValue(0);
    } else {
      // Handle operations here (for example, simple addition)
      setCurrentValue((prev) => prev + Number(value));
    }
  };

  const numbers = Array.from({ length: 10 }, (_, index) => index);
  const operators = ['+', '-', '*', '/', 'C', '='];

  return (
    <div className="App">
      <h1 className='heading'>Calculator</h1>
      <Card>
        <Output value={currentValue} />
        <Buttons items={numbers} className="btn" onButtonClick={handleClick} />
        <Buttons items={operators} className="btn operator" onButtonClick={handleClick} />
      </Card>
 
   
    </div>
  );
}

export default App;
