import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import NumericInput from "react-numeric-input";
import { FormContext } from "../FormContext";

const Spinner = ({ text, id }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <Form.Group>
      <Form.Label>{text}</Form.Label>
      <NumericInput
        onChange={(event) => handleChange(event, id)}
        className="form-control"
        strict
      />
    </Form.Group>
  );
};

export default Spinner;
