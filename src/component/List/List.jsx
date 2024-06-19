import React, { useState } from "react";
import "./List.css";
function List() {
  const [todo, setTodo] = useState(["เรียน", "เล่นเกม"]);
  const [done, setDone] = useState([]);

  //Add to array todo
  function handleAddTodo() {
    const newTodo = document.getElementById("inputTodo").value;
    document.getElementById("inputTodo").value = "";
    if (newTodo !== "") {
      setTodo((t) => [...t, newTodo]);
    }
  }

  //Delete from array todo
  function handleDeleteTodo(index) {
    setTodo(todo.filter((_, i) => i !== index));
  }

  //Add to array done
  function handleDoneTodo(index) {
    const newDone = todo[index];
    setTodo(todo.filter((_, i) => i !== index));
    setDone((d) => [...d, newDone]);
  }
  //remove from done to todo
  function handleUnDo(index) {
    const unDo = done[index];
    setDone(done.filter((_, i) => i !== index)); //Remove from list of Done
    setTodo((t) => [...t, unDo]); // trans to Todo-list
  }

  return (
    <div className="container-List">
      <h1 className="header">TODO - LIST</h1>
      <div className="input-todo">
        <input
          type="text"
          id="inputTodo"
          placeholder="Enter Todo"
          maxLength="20"
        />
        <button id="btn-add" onClick={handleAddTodo}>
          add
        </button>
      </div>

      <div className="display">
        <div className="todo">
          <h1>- Todo -</h1>
          <span>{todo.length} Task</span>
          <ul>
            {todo.map((todo, index) => (
              <li key={index}>
                <div className="text-wrap">{todo}</div>
                <div className="btn">
                  <button onClick={() => handleDoneTodo(index)}>Done</button>
                  <button
                    onClick={() => handleDeleteTodo(index)}
                    className="delete-todo">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="done">
          <h1>- Done -</h1>
          <span>{done.length} Task</span>
          <ul>
            {done.map((done, index) => (
              <li key={index}>
                <div className="text-wrap">{done}</div>
                <button onClick={() => handleUnDo(index)}>Undo</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
