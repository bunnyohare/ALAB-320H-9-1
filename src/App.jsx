import React, { useState, useReducer } from 'react'
import Todo from './Todo.jsx'
import './App.css'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action){
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id){
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    case ACTIONS.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });
    default:
      return todos;
  }
}


function newTodo(name) {
  return { id: Date.now(), name: name, complete:false }
}
export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function  handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name} })
    setName('')
  }

  const handleSave = () => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: todo.id, name: editedName }
    });
    setEditMode(false);
  };
  

  console.log(todos)
  
  return (
    <>
    <div className="container">
    <h2>Create Todo List</h2>
    <form onSubmit={handleSubmit} className='form'>
    <div className="form-wrapper">
      <input type="text" placeholder="Add task" value={name} onChange={e => setName(e.target.value)} className="input-field" />
      <button type="submit" className="add-button">Add</button>
      </div>
    </form>
    {todos.map(todo => {
      return<Todo key={todo.id} todo={todo} dispatch={dispatch} />
    })}   
    </div> 
    </>
  )
}

