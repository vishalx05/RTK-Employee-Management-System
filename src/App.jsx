import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LikeEmp from "./components/Employees/LikeEmp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/like" element={<LikeEmp />} />
    </Routes>
  );
}

export default App;