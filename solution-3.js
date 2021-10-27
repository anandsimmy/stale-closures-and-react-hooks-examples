import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  useEffect(() => {
    const countHeader = document.getElementById('count');
    const clickHandler = () => {
      if (countRef.current > 0) {
        setCount(100);
      } else {
        setCount(-100);
      }
    };
    countHeader.addEventListener('click', clickHandler);
    return () => countHeader.removeEventListener('click', clickHandler);
  }, []);

  return (
    <div>
      <h1 id="count">Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
