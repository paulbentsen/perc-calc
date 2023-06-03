//App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [output1, setOutput1] = useState('');

  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [output2, setOutput2] = useState('');

  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [output3, setOutput3] = useState('');

  const handleCalculate1 = () => {
    const result = (input1 / 100) * input2;
    setOutput1(result.toFixed(2));
  }

  const handleCalculate2 = () => {
    const result = (input3 / input4) * 100;
    setOutput2(result.toFixed(2));
  }
  
  const handleCalculate3 = () => {
    const result = ((input6 - input5) / input5) * 100;
    setOutput3(result.toFixed(2));
  }
  

  // JSX code in App.js
return (
  <main className="calculator">
    <div className="form">
      What is 
      <input className="calculator-input" value={input1} onChange={e => setInput1(e.target.value)} /> % of 
      <input className="calculator-input" value={input2} onChange={e => setInput2(e.target.value)} />?
      <button className="calculator-button" data-testid="calculate1-button" onClick={handleCalculate1}>Calculate</button>
      <div className="results">{output1}</div>
    </div>
    <div className="form">
      <input className="calculator-input" value={input3} onChange={e => setInput3(e.target.value)} /> is what percentage of 
      <input className="calculator-input" value={input4} onChange={e => setInput4(e.target.value)} />?
      <button className="calculator-button" data-testid="calculate2-button" onClick={handleCalculate2}>Calculate</button>
      <div className="results">{output2}</div>
    </div>
    <div className="form">
      What is the percentage increase/decrease from 
      <input className="calculator-input" value={input5} onChange={e => setInput5(e.target.value)} /> to 
      <input className="calculator-input" value={input6} onChange={e => setInput6(e.target.value)} />?
      <button className="calculator-button" data-testid="calculate3-button" onClick={handleCalculate3}>Calculate</button>
      <div className="results">{output3}</div>
    </div>
  </main>
);
}

export default App;
