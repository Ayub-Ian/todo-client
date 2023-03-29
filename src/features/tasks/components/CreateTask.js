import React, { useState } from "react";

function CreateTask({ showModal, setShowModal, onAddTask, token }) {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  }

  function resetForm() {
    setTaskData({
      title: "",
      description: "",
      priority: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskData);

    fetch("/todos/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(taskData) })
      .then((r) => r.json())
      .then((data) => {
        onAddTask(data.data);
        resetForm();
        setShowModal(false);
      });
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
            <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-min-w-[500px] tw-max-w-3xl">
              {/*content*/}
              <div className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none focus:tw-outline-none">
                {/*header*/}
                <div className="tw-flex tw-items-center tw-justify-between tw-p-5">
                  <h3 className=" tw-text-2xl tw-text-black">Create project</h3>

                  <button
                    className="tw-p-1 tw-border-0  tw-leading-none  tw-outline-none focus:tw-outline-none"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <p className=" tw-bg-transparent tw-text-black tw-text-2xl tw-w-6 tw-outline-none focus:tw-outline-none">
                      x
                    </p>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="tw-relative tw-px-6 tw-flex tw-flex-col tw-gap-4 tw-text-black">
                    <div className="tw-w-full">
                      <label className=" tw-font-semibold">Task title</label>
                      <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={taskData.title}
                        placeholder="e.g Groceries shopping"
                        className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
                      />
                    </div>
                    <div className="tw-w-full">
                      <label className=" tw-font-semibold">Description</label>
                      <textarea
                        type="text"
                        rows="5"
                        name="description"
                        onChange={handleChange}
                        value={taskData.description}
                        placeholder="Tell us what you are going to do ..."
                        className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
                      />
                    </div>

                    <div className="tw-w-full">
                      <label className=" tw-font-semibold">Priority</label>
                      <select
                        name="priority"
                        value={taskData.priority}
                        onChange={handleChange}
                        className="tw-w-full tw-py-2 tw-px-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>

                  {/*footer*/}
                  <div className="tw-flex tw-items-center tw-justify-end tw-p-3 tw-mt-4">
                    <button
                      className="tw-text-red-500 tw-background-transparent tw-font-bold tw-px-6 tw-py-2 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="tw-bg-emerald-500 tw-text-white active:tw-bg-emerald-600 tw-font-medium tw-text-sm tw-px-6 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tw-opacity-50 opac tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default CreateTask;
