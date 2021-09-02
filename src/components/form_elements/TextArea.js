import React, { useContext } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { FormContext } from "../FormContext";

const TextArea = ({ text, hint, sublabel, id }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      {/* <FloatingLabel controlId="floatingTextarea2" label={text}> */}
      <Form.Label>{text}</Form.Label>
        <Form.Control
          as="textarea"
          placeholder={hint}
          style={{ height: "100px" }}
          onChange={(event) => handleChange(event, id)}
        />
        <Form.Text className="text-muted">{sublabel}</Form.Text>
      {/* </FloatingLabel> */}
    </>
  );
};

export default TextArea;
