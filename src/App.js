import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import TaskDetail from "./features/tasks/components/TaskDetail";
import Tasks from "./features/tasks/components/Tasks";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/user/login/check").then((response) => {
      if (response.ok) {
        response.json().then((data) => console.log(data));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Tasks onLogout={handleLogout} user={user} />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
          <Route path="todo/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
