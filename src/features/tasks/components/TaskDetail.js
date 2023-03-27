import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../../components/layout/MainLayout";

function TaskDetail() {
  let { id } = useParams();
  const [todo, setTodo] = useState(null);
//   const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  if (!todo) {
    return (
      <div className=" tw-bg-primary">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="center tw-bg-secondary-dark tw-py-6 tw-px-16 tw-rounded-lg">
        <h1 className=" tw-text-4xl tw-font-medium">{todo.title}</h1>
        <div className="tw-flex tw-gap-2 tw-my-2">
        <p>Priority:</p>
        <p>{todo.priority}</p>
        </div>
        <div className="tw-flex tw-gap-2 tw-my-2">
        <p>Status:</p>
        <p>{todo.status}</p>
        </div>
        <h1 className="tw-mt-3">Description</h1>
        <p>{todo.description}</p>
      </div>
    </MainLayout>
  );
}

export default TaskDetail;
