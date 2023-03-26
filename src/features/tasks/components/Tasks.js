import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../../components/layout/MainLayout'
import TaskList from './TaskList'



function Tasks() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/todos')
        .then(r => r.json())
        .then(data => setTodos(data))
 
    }, [])
    
  return (
    <MainLayout>
        <div>
            <TaskList todos={todos} />
        </div>
    </MainLayout>
  )
}

export default Tasks