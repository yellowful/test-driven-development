import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputNumber, setInputNumber] = useState(1);
  const handleOnChange = (e) => {
    setInputNumber(parseInt(e.target.value));
  }
  const handleOnClickAdd = (e) => {
    setCounter(counter+inputNumber);
  }
  const handleOnClickSubstract = (e) => {
    setCounter(counter-inputNumber);
  }
  return (
    <div>
      <h3 data-testid='header'>計數器</h3>
      <h2 
        className={`${counter>=100? 'green':''}${counter<=-100? 'red':''}`}
        data-testid='counter'
      >{counter}</h2>
      <button 
        data-testid='substract-btn'
        onClick={handleOnClickSubstract}
      >-</button>
      <input
        data-testid='input'
        value={inputNumber}
        style={{ textAlign: 'center' }}
        onChange={handleOnChange}
      />
      <button 
        data-testid='add-btn'
        onClick={handleOnClickAdd}
      >+</button>
    </div>
  )
}

export default Counter
