import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ todos, onDeleteTask, onUpdateTask }) {
    const list = todos.map(todo => {
        return (
            <TaskItem key={todo.id} todo={todo} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
        )
    })
  return (

    <div className="list">
    <ul>
      {list}
    </ul>
  </div>
  )
}

export default TaskList