import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const titleRef = useRef();
  useEffect(() => {
    const countHeader = titleRef.current;
    const clickHandler = () => {
      if (count > 0) {
        setCount(100);
      } else {
        setCount(-100);
      }
    };
    countHeader.addEventListener("click", clickHandler);
    return () => countHeader.removeEventListener("click", clickHandler);
  }, [count]);

  return (
    <div>
      <h1 ref={titleRef}>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
