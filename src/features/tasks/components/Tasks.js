import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../../components/layout/MainLayout";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

function Tasks({ user, onLogout }) {

  const navigate = useNavigate()  
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const token = user.data.token

  

console.log({ user })
  useEffect(() => {
    if (!user) {
        return navigate('/login')
      }    
    fetch("/todos", {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${user.data.token}`,
        }
    })
      .then((r) => r.json())
      .then((data) => setTodos(data.data));
  }, [user, navigate]);

  function handleAddTask(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTask(id) {
   
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  function handleUpdateTask(updatedTaskObj) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === updatedTaskObj.id) {
        return updatedTaskObj
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  console.log(todos)


  return (
    <MainLayout user={user} onLogout={onLogout}>
      <div className=" tw-mt-8">
        <CreateTask
        token={token}
          onAddTask={handleAddTask}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      <div className="center tw-bg-secondary-dark tw-py-6 tw-px-16 tw-rounded-lg tw-w-2/3">
        <div className="tasks">
        <TaskList todos={todos} onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask} token={token} />
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="tw-flex tw-gap-3 tw-items-center tw-mt-4 add"
        >
          <p className=" tw-text-sunflower tw-text-xl">+</p>
          <p>Add task</p>
        </button>
      </div>
    </MainLayout>
  );
}

export default Tasks;
