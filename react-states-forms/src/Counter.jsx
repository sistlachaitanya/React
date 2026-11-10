import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  useEffect(() => {
    console.log("This is the Side effect");
  }, []);

  let incCountx = () => {
    setCountx((prevCount) => prevCount + 1);
  };
  let incCounty = () => {
    setCounty((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h3>Count = {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <hr></hr>
      <h3>Count = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
