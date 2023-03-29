import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UpdateTask from './UpdateTask';

const priority = {
  'high' : 'high',
  'low' : 'low',
  'medium' : 'medium'
}

const TaskItem = ({ todo, onDeleteTask, onUpdateTask, token }) => {

  const [showModal, setShowModal] = useState(false);

  const getDate = () => {
    const date = new Date(todo.created_at)
    let day = date.toLocaleDateString()
    return day

  }

  function handleDelete() {
    fetch(`/messages/${todo.id}`, {
      method: "DELETE",
      'Authorization': `Bearer ${token}`,
    })
    onDeleteTask(todo.id)
  }
  return (
    <>
    <li>      
    <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
    <div className="tw-flex tw-items-center tw-justify-between">
    <span className="time">{getDate()}</span>
     <span className=" tw-text-xs tw-relative tw-flex tw-items-center tw-capitalize tw-mr-2">
        <p className={priority[todo.priority]}>{todo.priority}</p></span>
    </div>
    <div className="actions">
      <button onClick={() => setShowModal(true)}>
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
           <UpdateTask
           todo={todo}
           token={token}
           showModal={showModal}
           setShowModal={setShowModal}
           onUpdateTask={onUpdateTask}
         />
         </>
  )
}

export default TaskItem