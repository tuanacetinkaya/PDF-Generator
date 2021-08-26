import React, { useContext, useState } from "react";

import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../FormContext";

const DateTime = ({ text, id }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <Form.Label as="legend" column sm={2}>
        {text}
      </Form.Label>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          handleChange(date, id);
        }}
      />
    </div>
  );
};

export default DateTime;
