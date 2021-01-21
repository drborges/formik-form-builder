import React from "react";
import { Formik } from "formik";
import { v4 as uuid } from "uuid";

import FormQuestions from "./FormQuestions";

import "./styles.css";

const retroSurvey = {
  questions: [
    {
      id: uuid(),
      text: "How happy are you?",
      options: [
        { id: uuid(), text: "Super happy" },
        { id: uuid(), text: "Happy" },
        { id: uuid(), text: "Neutral" },
        { id: uuid(), text: "Sad" }
      ],
      followupQuestion: {
        id: uuid(),
        text: "Why so sad?",
        forAnswer: "Sad"
      }
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>Questions</h1>
      <Formik
        initialValues={retroSurvey}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <FormQuestions name="questions" />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
