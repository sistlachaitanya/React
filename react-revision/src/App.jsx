import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={incCount}>Inc Count</button>
    </>
  );
}

export default App;

const updater = (prev) => prev + 1;

setCount(updater);