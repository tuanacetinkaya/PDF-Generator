import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { FormContext } from "../FormContext";

const DropDown = ({ text, options, id }) => {
  const allOptions = options.split("|");
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <Form.Label as="legend" column sm={2}>
        {text}
      </Form.Label>
      <Form.Select
        onChange={(event) => handleChange(event, id)}
        aria-label="Default select example"
      >
        <option key="blankChoice" hidden value>
          {" "}
          {text}{" "}
        </option>
        {allOptions.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </Form.Select>
    </div>
  );
};

export default DropDown;
