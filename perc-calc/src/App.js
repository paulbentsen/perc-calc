import React, { useState } from "react";

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
    setOutput1(result);
  }

  const handleCalculate2 = () => {
    const result = (input3 / input4) * 100;
    setOutput2(result);
  }

  const handleCalculate3 = () => {
    const result = ((input6 - input5) / input5) * 100;
    setOutput3(result);
  }

  return (
    <div>
      <div>
        What is 
        <input value={input1} onChange={e => setInput1(e.target.value)} /> % of 
        <input value={input2} onChange={e => setInput2(e.target.value)} />?
        <button onClick={handleCalculate1}>Calculate</button>
        <div>{output1}</div>
      </div>
      <div>
        <input value={input3} onChange={e => setInput3(e.target.value)} /> is what percentage of 
        <input value={input4} onChange={e => setInput4(e.target.value)} />?
        <button onClick={handleCalculate2}>Calculate</button>
        <div>{output2}</div>
      </div>
      <div>
        What is the percentage increase/decrease from 
        <input value={input5} onChange={e => setInput5(e.target.value)} /> to 
        <input value={input6} onChange={e => setInput6(e.target.value)} />?
        <button onClick={handleCalculate3}>Calculate</button>
        <div>{output3}</div>
      </div>
    </div>
  );
}

export default App;
