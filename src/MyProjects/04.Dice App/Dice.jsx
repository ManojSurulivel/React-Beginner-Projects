import React from 'react';
import './Dice.css';

function Dice({ diceVal }) {
  return (
    <div className="dice-container">
      <div className={`dot dot-top-left ${diceVal > 3 && diceVal < 7 ? "dot-visible" : ""}`}></div>
      <div className={`dot dot-top-right ${diceVal > 1 && diceVal < 7 ? "dot-visible" : ""}`}></div>
      <div className={`dot dot-middle-left ${diceVal === 6 ? "dot-visible" : ""}`}></div>
      <div className={`dot dot-middle ${[1, 3, 5].includes(diceVal) ? "dot-visible" : ""}`}></div>
      <div className={`dot dot-middle-right ${diceVal === 6 ? "dot-visible" : ""}`}></div>
      <div className={`dot dot-bottom-left ${diceVal > 1 && diceVal < 7 ? "dot-visible" : ""}`}></div>
      <div className={`dot dot-bottom-right ${diceVal > 3 && diceVal < 7 ? "dot-visible" : ""}`}></div>
    </div>
  );
}

export default Dice;