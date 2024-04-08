import React, { useState } from "react";
import { ACTIONS } from "./App.jsx";

export default function Todo({ todo, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: todo.id, name: editedName }
    });
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedName(todo.name);
    setEditMode(false);
  };

  const handleChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <div className="todo" style={{ marginBottom: "5px", marginRight: "10px!important" }}>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={handleChange}
            className="input-field"
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="output" style={{ color: todo.complete ? "#FF0000" : "#000", textDecoration: todo.complete ? "line-through" : "none" }}>
            {todo.name}
          </span>
          <button className="toggle-button" onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
            Completed
          </button>
          <button className="delete-button" onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
            Delete
          </button>
          <button className="edit-button" style={{ marginLeft: '10px' }} onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
