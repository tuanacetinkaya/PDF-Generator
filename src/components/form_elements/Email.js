import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { FormContext } from "../FormContext";

const Email = ({ text, sublabel, id }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{text}</Form.Label>
      <Form.Control type="email" onChange={(event) => handleChange(event, id)}placeholder="Enter email" />
      <Form.Text className="text-muted">{sublabel}</Form.Text>
    </Form.Group>
  );
};

export default Email;
