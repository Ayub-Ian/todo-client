import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ todos }) {
    const list = todos.map(todo => {
        return (
            <TaskItem key={todo.id} todo={todo}/>
        )
    })
  return (

    <div className='tw-grid tw-grid-cols-3 tw-gap-4'>
        {list}
    </div>
  )
}

export default TaskList