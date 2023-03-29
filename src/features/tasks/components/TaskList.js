import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ todos, onDeleteTask, onUpdateTask, token }) {

  console.log(todos)
  if (!todos === null) {
    return <p>No available todos</p>
  }
    
  return (

    <div className="list">
      
       <ul>
      
      
      {todos.map(todo => {
        return (
            <TaskItem key={todo.id} todo={todo} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} token={token} />
        )
    })}
    </ul>

  </div>
  )
}

export default TaskList