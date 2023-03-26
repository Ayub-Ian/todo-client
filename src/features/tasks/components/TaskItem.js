import React from 'react'

const TaskItem = ({ todo }) => {
  return (
    <div className=' tw-bg-note tw-rounded-lg tw-px-6 tw-py-3'>
        <h3 className=' tw-font-semibold tw-text-lg'>{todo.title}</h3>
        <span className=' tw-rounded-full tw-bg-pomodoro tw-px-3 tw-text-xs tw-py-0.5 tw-capitalize' >{todo.priority}</span>
        <p>{todo.description}</p>
    </div>
  )
}

export default TaskItem