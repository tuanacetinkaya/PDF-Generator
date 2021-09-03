import React, { useContext, useState } from "react";
import { FormContext } from "../FormContext";


const Phone = ({ id }) => {
  const [state, setState] = useState({ phone: "" });

  const { handleChange } = useContext(FormContext);

  const normalizeInput = (value, previousValue) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  const handleAllChanges = (event) => {
    setState((prevState) => ({
      phone: normalizeInput(event.target.value, prevState.phone),
    }));

    handleChange(event.target.value.substring(0, 14).replace(/\D/g, ""), id);
  };

  return (
    <div>
      <div className="input-container">
        <p className="label">Phone:</p>
        <input
          className="input"
          type="text"
          name="phone"
          placeholder="(xxx) xxx-xxxx"
          value={state.phone}
          onChange={(event) => handleAllChanges(event, id)}
        />
        {state.error && <p className="error">{state.error}</p>}
      </div>
      {/* <div className="btn-container">
        <button className="btn info " type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div> */}
    </div>
  );
};

export default Phone;
