import React, { useState } from 'react';
import Header from '../Components/Header';
import './App.css';


const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); 
  };

  return <button onClick={handleClick}>{count}</button>; 
};

function App() {
  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
