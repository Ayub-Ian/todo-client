import React from 'react'
import { Link } from 'react-router-dom'

const TaskItem = ({ todo, onDeleteTask }) => {

  function handleDelete() {
    fetch(`/messages/${todo.id}`, {
      method: "DELETE"
    })
    onDeleteTask(todo.id)
  }
  return (
    <li>      
    <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
    <div className="tw-flex tw-items-center tw-justify-between">
    <span className="time">27/07/2007</span>
     <span className=" tw-text-sm tw-relative tw-flex tw-items-center">
        <p className="high">{todo.priority}</p></span>
    </div>
    <div className="actions">
      <button>
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
      <button onClick={handleDelete}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </div>
  </li>
  )
}

export default TaskItem