import React, { useEffect, useState } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

function Tasks() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((r) => r.json())
      .then((data) => setTodos(data));
  }, []);

  function handleAddTask(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTask(id) {
    // shorten the list of messages
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <MainLayout>
      <div className=" tw-mt-8">
        <CreateTask
          onAddTask={handleAddTask}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      <div className="center tw-bg-secondary-dark tw-py-6 tw-px-16 tw-rounded-lg tw-w-2/3">
        <div className="tasks">
        <TaskList todos={todos} onDeleteTask={handleDeleteTask} />
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
