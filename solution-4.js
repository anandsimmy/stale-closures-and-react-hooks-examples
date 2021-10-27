import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const clickHandlerRef = useRef(() => {});
  clickHandlerRef.current = () => {
    if (count > 0) {
      setCount(100);
    } else {
      setCount(-100);
    }
  };
  useEffect(() => {
    const countHeader = document.getElementById('count');
    const clickHandler = () => clickHandlerRef.current();
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
