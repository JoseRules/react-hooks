import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev+1);
  const decrease = () => setCount(prev => prev-1);

  return (
    <>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </>
  );
}

export default UseStateHook;
