import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { FormContext } from "../FormContext";

const CheckBox = ({ text, options, id }) => {
  const allOptions = options.split("|");
  const { handleChange } = useContext(FormContext);

  return (
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label as="legend" column sm={2}>
        {text}
      </Form.Label>
      {allOptions.map((opt, i) => (
        <Form.Check
          onChange={(event) => handleChange(event, id)}
          type="checkbox"
          label={opt}
          name={opt}
          key={i}
        />
      ))}
    </Form.Group>
  );
};

export default CheckBox;
