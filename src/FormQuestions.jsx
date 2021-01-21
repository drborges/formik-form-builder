import React from "react";
import { get } from "lodash";
import { v4 as uuid } from "uuid";
import { FieldArray } from "formik";

import SingleSelectionQuestion from "./SingleSelectionQuestion";

const FormQuestions = ({ name }) => {
  return (
    <FieldArray
      name={name}
      render={({ name, push, form, remove }) => {
        const questions = get(form.values, name, []);
        return (
          <ul>
            <button onClick={() => push({ key: uuid() })}>Add Question</button>
            {questions.map((question, i) => (
              <li key={question.id || question.key}>
                <SingleSelectionQuestion
                  name={`${name}.${i}`}
                  title={`Question ${i + 1}`}
                  onRemove={() => remove(i)}
                />
              </li>
            ))}
          </ul>
        );
      }}
    />
  );
};

export default FormQuestions;
