import React from "react";
import { ACTIONS } from "./App.jsx";

export default function Todo({ todo, dispatch }) {
  return (
    <div
      className="todo"
      style={{ marginBottom: "5px", marginRight: "10px!important" }}
    >
<span style={{ 
  color: todo.complete ? "#FF0000" : "#000",
  textDecoration: todo.complete ? "line-through" : "none"
}}>
  {todo.name}{" "} &nbsp; {" "}
      </span>
      <button
        className="toggle-button"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        className="delete-button"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
