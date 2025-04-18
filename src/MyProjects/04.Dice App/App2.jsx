import React, { useState } from 'react';
import './App.css';
import Dice from '../src/MyProjects/04.Dice App/Dice';

function App() {
  const [val, setVal] = useState(6);

  function rollDice() {
    const newVal = Math.floor(Math.random() * 6) + 1;
    setVal(newVal);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <Dice diceVal={val} />
      <button onClick={rollDice} className="roll-btn">Roll</button>
    </div>
  );
}

export default App;