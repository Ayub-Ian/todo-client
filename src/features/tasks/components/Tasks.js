import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../../components/layout/MainLayout'
import CreateTask from './CreateTask';
import TaskList from './TaskList'



function Tasks() {

    const [todos, setTodos] = useState([])
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/todos')
        .then(r => r.json())
        .then(data => setTodos(data))
 
    }, [])

    function handleAddTask(newTodo) {
        setTodos([...todos, newTodo])
    }
    
  return (
    <MainLayout>
        <div className=' tw-mt-8'>
            <button  type='button' onClick={() => setShowModal(true)}  className=' tw-border tw-border-dashed tw-border-grey tw-px-4 tw-py-2 tw-rounded-lg tw-text-grey tw-w-1/3'>Add task</button>
            <CreateTask onAddTask={handleAddTask} showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div className=' tw-mt-8'>
            <TaskList todos={todos} />
        </div>
    </MainLayout>
  )
}

export default Tasks