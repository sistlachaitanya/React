import { useState } from "react";

export default function LudoBoard() {
  let [blueMoves, setBlueMoves] = useState(0);
  let [yellowMoves, setYellowMoves] = useState(0);
  let [greenMoves, setGreenMoves] = useState(0);
  let [redMoves, setRedMoves] = useState(0);
  return (
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue moves = {blueMoves}</p>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setBlueMoves((prevVal) => prevVal + 1)}
        >
          +1
        </button>
        <p>Yellow moves = {yellowMoves}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => setYellowMoves((prevVal) => prevVal + 1)}
        >
          +1
        </button>
        <p>Green moves = {greenMoves}</p>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setGreenMoves((prevVal) => prevVal + 1)}
        >
          +1
        </button>
        <p>Red moves = {redMoves}</p>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setRedMoves((prevVal) => prevVal + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
