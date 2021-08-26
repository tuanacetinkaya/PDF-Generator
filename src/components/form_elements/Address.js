import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FormContext } from "../FormContext";

const Address = ({ text, id, name }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      {/* {`${id}_${name}_addr_line1`} */}
      <Form.Group className="mb-3" controlId="addr_line1">
        <Form.Label>{text}</Form.Label>
        <Form.Control
          onChange={(event) => handleChange(event, id)}
          name={`addr_line1`}
          placeholder="1234 Main St"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="addr_line2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          onChange={(event) => handleChange(event, id)}
          name={`addr_line2`}
          placeholder="Apartment, studio, or floor"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(event) => handleChange(event, id)}
            name="city"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            onChange={(event) => handleChange(event, id)}
            name="state"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            onChange={(event) => handleChange(event, id)}
            name="zip"
          />
        </Form.Group>
      </Row>
    </div>
  );
};

export default Address;
