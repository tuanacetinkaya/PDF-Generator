// this is a class for read only paragraph elements
import React from "react";
import { Form } from "react-bootstrap";
import parse from "html-react-parser";

const Text = ({ text }) => {

  return (
    <Form.Label as="legend" column>
      {parse(text)}
    </Form.Label>
  );
};

export default Text;
