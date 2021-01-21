import React from "react";
import { get } from "lodash";
import { Field } from "formik";
import { v4 as uuid } from "uuid";

const parentFieldName = (name) => {
  const path = name.split(".");
  path.pop(); // drop the last bit of the path to get to the parent
  return path.join(".");
};

const FollowupField = ({ name, options, onRemove, ...field }) => {
  return (
    <div className="followup">
      <h3>
        Followup Question <button onClick={onRemove}>Remove Followup</button>
      </h3>
      <div>
        <label>Show this question if the answer is:</label>
        <select name={`${name}.forAnswer`} {...field}>
          {options.map((option, i) => (
            <option key={i} value={option.text}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <Field name={`${name}.text`} />
    </div>
  );
};

const FollowupQuestion = ({ name }) => {
  return (
    <Field name={`${name}.forAnswer`}>
      {({ field, form: { values, setFieldValue } }) => {
        const parentName = parentFieldName(name);
        const followupQuestionName = `${parentName}.followupQuestion`;
        const parentRequiresFollowup = get(values, followupQuestionName);
        const availableOptionsName = `${parentName}.options`;
        const availableOptions = get(values, `${availableOptionsName}`, []);
        const addFollowupField = () => {
          setFieldValue(followupQuestionName, { key: uuid() });
        };

        const removeFollowupField = () => {
          setFieldValue(followupQuestionName, null);
        };

        return parentRequiresFollowup ? (
          <FollowupField
            {...field}
            name={followupQuestionName}
            options={availableOptions.filter((option) => option.text)}
            onRemove={removeFollowupField}
          />
        ) : (
          <button onClick={addFollowupField}>Add Followup Question</button>
        );
      }}
    </Field>
  );
};

export default FollowupQuestion;
