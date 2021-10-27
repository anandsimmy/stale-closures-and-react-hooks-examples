import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countHeader = document.getElementById('count');
    const clickHandler = () => {
      if (count > 0) {
        setCount(100);
      } else {
        setCount(-100);
      }
    };
    countHeader.addEventListener('click', clickHandler);
    return () => countHeader.removeEventListener('click', clickHandler);
  }, [count]);

  return (
    <div>
      <h1 id="count">Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
