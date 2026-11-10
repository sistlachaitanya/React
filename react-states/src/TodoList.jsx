import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: newTodo, isDone: false },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      }),
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>

      <div className="input-section">
        <input
          placeholder="Add a task..."
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button onClick={addNewTask} className="add-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className={todo.isDone ? "done" : ""}>{todo.task}</span>

            <div className="actions">
              <button className="done-btn" onClick={() => markAsDone(todo.id)}>
                Done
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="all-done-btn" onClick={markAllDone}>
        Mark All Done
      </button>
    </div>
  );
}
