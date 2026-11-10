import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  console.log("Component is Rendered");

  function incCount() {
    setCount(() => count + 1);
    setCount(() => count + 1);
  }

  return <button onClick={incCount}>count = {count}</button>;
}
