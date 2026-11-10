import "./App.css";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
