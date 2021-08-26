import React from "react";
import { Form } from "react-bootstrap";

const FileUpload = ({text, name, id}) => {
  return (
    <div>
      <Form.Group controlId={name} className="mb-3">
        <Form.Label>{text}</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </div>
  );
};

export default FileUpload;
