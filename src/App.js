import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Dashboard />}> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
