import React from 'react'
import { Link } from 'react-router-dom'

const TaskItem = ({ todo }) => {
  return (
    <div className=' tw-bg-note tw-rounded-lg tw-px-6 tw-py-3'>
        <Link to={`/todo/${todo.id}`} className=' tw-font-semibold tw-text-lg'>{todo.title}</Link>
        <span className=' tw-rounded-full tw-bg-pomodoro tw-px-3 tw-text-xs tw-py-0.5 tw-capitalize' >{todo.priority}</span>
        <p>{todo.description}</p>
    </div>
  )
}

export default TaskItem