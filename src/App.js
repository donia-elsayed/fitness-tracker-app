import { Link, Route, Routes } from "react-router-dom";
import WorkoutLogger from "./components/WorkoutLogger";
import ProgressDashboard from "./components/ProgressDashboard";
import GoalSetting from "./components/GoalSetting";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <nav className="bg-sky-700 text-white p-4">
        <ul className="flex justify-evenly font-semibold">
          <li>
            <Link to="/" className="capitalize">
              Workout log
            </Link>
          </li>
          <li>
            <Link to="/prograss" className="capitalize">
              Progress Dashboard
            </Link>
          </li>
          <li>
            <Link to="/goals" className="capitalize">
              {" "}
              goals
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<WorkoutLogger />} />
        <Route path="/prograss" element={<ProgressDashboard />} />
        <Route path="/goals" element={<GoalSetting />} />
      </Routes>
    </div>
  );
}

export default App;
