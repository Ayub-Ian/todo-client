import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import TaskDetail from "./features/tasks/components/TaskDetail";
import Tasks from "./features/tasks/components/Tasks";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="todo/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
