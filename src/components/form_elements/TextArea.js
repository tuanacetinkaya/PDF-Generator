import React, { useContext } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { FormContext } from "../FormContext";

const TextArea = ({ text, hint, id }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label={text}>
        <Form.Control
          as="textarea"
          placeholder={hint}
          style={{ height: "100px" }}
          onChange={(event) => handleChange(event, id)}
        />
      </FloatingLabel>
    </>
  );
};

export default TextArea;
