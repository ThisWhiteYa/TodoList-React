import React, { useEffect, useState } from "react";
import "./List.css";
function List() {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const date = new Date();
  //Time Setting
  function handleTime() {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${
      date.getHours() > 10 ? date.getHours() : "0" + date.getHours()
    }:${date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes()}`;
  }
  //Add to array todo
  function handleAddTodo() {
    const newTodo = document.getElementById("inputTodo").value;
    document.getElementById("inputTodo").value = "";
    if (newTodo !== "") {
      //t = todo
      setTodo((t) => [...t, { todo: newTodo, time: handleTime() }]);
    }
  }

  //Delete from array todo
  function handleDeleteTodo(index) {
    setTodo(todo.filter((_, i) => i !== index));
  }

  //Add to array done
  function handleDoneTodo(index) {
    const newDone = todo[index];
    newDone.time  = handleTime()
    console.log('Change');
    setTodo(todo.filter((_, i) => i !== index));
    setDone((d) => [...d, newDone]);
  }
  //remove from done to todo
  function handleUnDo(index) {
    const unDo = done[index];
    unDo.time  = handleTime()
    setDone(done.filter((_, i) => i !== index)); //Remove from list of Done
    setTodo((t) => [...t, unDo]); // trans to Todo-list
  }

  return (
    <>
      <h1 className="header">TODO - LIST</h1>
      <div className="container-List">
        <div className="input-todo">
          <input
            type="text"
            id="inputTodo"
            placeholder="Enter Todo"
            maxLength="20"
          />
          <button id="btn-add" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <div className="display">
          <div className="todo">
            <h1>Todo</h1>
            <span>{todo.length} Task</span>
            <ul>
              {todo.map((todo, index) => (
                <li key={index}>
                  <div className="text-wrap">{todo.todo}</div>
                  <span>{todo.time}</span>
                  <div className="btn">
                    <button onClick={() => handleDoneTodo(index)}>Done</button>
                    <button
                      onClick={() => handleDeleteTodo(index)}
                      className="delete-todo"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="done">
            <h1>Done</h1>
            <span>{done.length} Task</span>
            <ul>
              {done.map((done, index) => (
                <li key={index}>
                  <div className="text-wrap">{done.todo}</div>
                  <span>{done.time}</span>
                  {/* <span>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${minutes()}`}</span> */}
                  <button onClick={() => handleUnDo(index)}>Undo</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
