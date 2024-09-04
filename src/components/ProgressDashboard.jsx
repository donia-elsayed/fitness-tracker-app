import React, { useEffect, useState } from "react";

const ProgressDashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const allWorkouts = JSON.parse(localStorage.getItem("workouts"));
    setWorkouts(allWorkouts);
  }, []);
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Progress</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <table className="w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Exercise Type</th>
              <th className="border px-4 py-2">Duration (min)</th>
              <th className="border px-4 py-2">Calories Burned</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {workouts.map((workout, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{workout.exerciseType}</td>
                <td className="border px-4 py-2">{workout.duration}</td>
                <td className="border px-4 py-2">{workout.caloriesBurned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProgressDashboard;
