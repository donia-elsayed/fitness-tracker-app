import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const WorkoutLogger = () => {
  const intialWorkloutValues = {
    exerciseType: "",
    duration: "",
    caloriesBurned: "",
  };
  const workoutValidationSchema = Yup.object({
    exerciseType: Yup.string().required("Exercise type is required"),
    duration: Yup.number()
      .positive("Duration should be positive")
      .required("Duration is required"),
    caloriesBurned: Yup.number()
      .positive("Calories must be positive")
      .required("Calories burned is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const existingWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    const updatedWorkouts = [...existingWorkouts, values];
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    alert("Done successfully");
    resetForm();
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Log Your Workout</h2>
      <Formik
        initialValues={intialWorkloutValues}
        validationSchema={workoutValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="exerciseType">Exercise Type</label>
            <Field
              type="text"
              id="exerciseType"
              name="exerciseType"
              className="block mt-1 w-full p-2 border border-gray-400 rounded"
            />
            <ErrorMessage
              name="exerciseType"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="duration">Duration (minutes)</label>
            <Field
              type="number"
              id="duration"
              name="duration"
              className="block w-full p-2 border border-gray-400 mt-1 rounded"
            />
            <ErrorMessage
              name="duration"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="caloriesBurned">Calories Burned</label>
            <Field
              type="number"
              id="caloriesBurned"
              name="caloriesBurned"
              className="block w-full p-2 border border-gray-400 mt-1 rounded"
            />
            <ErrorMessage
              name="caloriesBurned"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-sky-700"
          >
            Log Workout
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default WorkoutLogger;
