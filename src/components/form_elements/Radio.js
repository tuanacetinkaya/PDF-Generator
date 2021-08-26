import React, { useContext, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FormContext } from "../FormContext";

const Radio = ({ text, options, id, name }) => {
  const allOptions = options.split("|");
  const { handleChange } = useContext(FormContext);
  const [checkedBox, setChecked] = useState(null);

  return (
    <fieldset>
      <Form.Group as={Row} className="mb-3">
        <Form.Label as="legend" column sm={2}>
          {text}
        </Form.Label>

        <Col sm={10}>
          {allOptions.map((opt, i) => (
            <Form.Check
              onClick={(event) => {
                handleChange(event, id);
                setChecked(opt);
              }}
              type="radio"
              label={opt}
              checked={checkedBox === opt}
              name={id + "_" + name}
              id={opt}
              key={i}
            />
          ))}
        </Col>
      </Form.Group>
    </fieldset>
  );
};

export default Radio;
