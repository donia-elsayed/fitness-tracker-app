import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const GoalSetting = () => {
  const intialGoalsValues = { goalType: "", targetValue: "", deadline: "" };
  const validationGoalsSchema = Yup.object({
    goalType: Yup.string().required("Goal type is required"),
    targetValue: Yup.number()
      .positive("Target value must be positive")
      .required("Target value is required"),
    deadline: Yup.date()
      .min(new Date(), "Deadline must be in the future")
      .required("Deadline is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    alert(`Goal ${values.goalType} is setting Successfully`);
    resetForm();
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <Formik
        initialValues={intialGoalsValues}
        validationSchema={validationGoalsSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="goalType" className="mt-1">
              Goal Type
            </label>
            <Field
              as="select"
              name="goalType"
              id="goalType"
              className="block w-full p-2 border mt-1 border-gray-300 rounded-md"
            >
              <option value="">Select a goal type</option>
              <option value="weightLoss">Weight Loss</option>
              <option value="muscleGain">Muscle Gain</option>
              <option value="endurance">Endurance</option>
            </Field>
            <ErrorMessage
              name="goalType"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="targetValue">Target Value</label>
            <Field
              type="number"
              name="targetValue"
              id="targetValue"
              className="block w-full p-2 border mt-1 border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="targetValue"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="deadline">Deadline</label>
            <Field
              type="date"
              name="deadline"
              id="deadline"
              className="block w-full p-2 border mt-1 border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="deadline"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-sky-700"
          >
            Set Goals
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default GoalSetting;
