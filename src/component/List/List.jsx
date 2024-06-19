import React, { useState } from "react";
import "./List.css";
function List() {
  const [todo, setTodo] = useState(["study", "play video game"]);
  const [done, setDone] = useState([]);
  function handleAddTodo() {
    const newTodo = document.getElementById("inputTodo").value;

    document.getElementById("inputTodo").value = "";
    setTodo((t) => [...t, newTodo]);
  }

  function handleDoneTodo(index) {
    const newDone = todo[index];
    setTodo(todo.filter((_, i) => i !== index));
    setDone((d) => [...d, newDone]);
  }
  function handleUnDo(index) {
    const unDo = done[index];
    setDone(done.filter((_, i) => i !== index)); //Remove from list of Done
    setTodo((t) => [...t, unDo]); // trans to Todo-list
  }

  return (
    <div className="container-List">
        <h1>TODO - LIST</h1>
      <div className="input-todo">
        <input type="text" id="inputTodo" placeholder="Enter the Todo" />
        <button id="btn-add" onClick={handleAddTodo}>add</button>
      </div>
      <div className="display">
        <div className="todo">
          <h1>Todo</h1>
          <ul>
            {todo.map((todo, index) => (
              <li key={index}>
                {todo}{" "}
                <button onClick={() => handleDoneTodo(index)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="done">
          <h1>Done</h1>
          <ul>
            {done.map((done, index) => (
              <li key={index}>
                {done} <button onClick={() => handleUnDo(index)}>undo</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
