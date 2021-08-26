import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FormContext } from "../FormContext";

const FullName = ({ text, id }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <Form.Label as="legend" column sm={2}>
        {text}
      </Form.Label>
      <Row>
        <Col>
          <Form.Control
            name="first"
            placeholder="First Name"
            onChange={(event) => handleChange(event, id)}
          />
        </Col>
        <Col>
          <Form.Control
            name="last"
            placeholder="Last Name"
            onChange={(event) => handleChange(event, id)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FullName;
