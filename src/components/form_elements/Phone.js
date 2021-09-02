import React, { useContext, useState } from "react";
import { FormContext } from "../FormContext";

// import { FlexGrid, Input } from "react-bootstrap";
// import classes from "./elements.css";

//TODO: find a way to attach FormFactory handleChange to Phone
// https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
// function withMyHook(Component) {
//   return function WrappedComponent(props) {
//     const myHookValue = useMyHook();
//     return <Component {...props} myHookValue={myHookValue} />;
//   }
// }

// const handleChange({ target: { value } }) {
//   this.setState((prevState) => ({
//     phone: normalizeInput(value, prevState.phone),
//   }));
// }

// const handleReset() {
//   this.setState({ phone: "", error: "" });
// }

const Phone = ({ id }) => {
  const [state, setState] = useState({ phone: "" });

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const error = validateInput(this.state.phone);

  //   this.setState({ error }, () => {
  //     if (!error) {
  //       setTimeout(() => {
  //         alert(JSON.stringify(this.state, null, 4));
  //       }, 300);
  //     }
  //   });
  // }
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
