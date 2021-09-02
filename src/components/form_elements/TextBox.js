import React from "react";
import { useContext } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

import { FormContext } from "../FormContext";

//TODO: see if the onChange is applicable to other components
const TextBox = ({ text, hint, id, sublabel, name }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      {/* <FloatingLabel controlId="floatingTextarea" label={text} className="mb-3"> */}
      <Form.Label>{text}</Form.Label>
        <Form.Control
          name={name}
          placeholder={hint}
          onChange={(event) => handleChange(event, id)}
        />
        <Form.Text className="text-muted">{sublabel}</Form.Text>
      {/* </FloatingLabel> */}
    </div>
  );
};

export default TextBox;
