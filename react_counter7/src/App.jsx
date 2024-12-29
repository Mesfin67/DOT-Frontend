import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);
  const stopCounter = () => setIsRunning(false);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <button className="start-button" onClick={startCounter} disabled={isRunning}>
        Start
      </button>
      <button className="stop-button" onClick={stopCounter} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default Counter;
