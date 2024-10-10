import React, { useEffect, useState } from "react";

export interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(Number(initialCount));

  useEffect(() => {
    setCount(Number(initialCount));
    console.log("count", count);
    return () => console.log("Counter component unmounted");
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
