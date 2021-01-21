import React from "react";
import { Field } from "formik";
import QuestionOptions from "./QuestionOptions";
import FollowupQuestion from "./FollowupQuestion";

const SingleSelectionQuestion = ({ name, onRemove, title }) => {
  return (
    <div className="question">
      <h2>
        {title} <button onClick={onRemove}>Remove Question</button>
      </h2>
      <Field name={`${name}.text`} />
      <QuestionOptions name={`${name}.options`} />
      <FollowupQuestion name={`${name}.followupQuestion`} />
    </div>
  );
};

export default SingleSelectionQuestion;
