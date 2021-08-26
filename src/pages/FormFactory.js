// import tempForm from "./tempForm.json";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import FormElement from "../components/FormElement";
import { FormContext } from "../components/FormContext";
import classes from "./pages.css";

const FormFactory = () => {
  let location = useLocation();
  const [elements, setElements] = useState(null);
  useEffect(() => {
    //TODO: if the json is formatted as an array, keep the brackets
    // else: you can reach the form content by form['content']
    // setElements(tempForm["content"]);
    fetch(
      `https://vc-sisman.jotform.dev/intern-api/form/with_question/${location.state}?api_key=ee185c012b2e0fb26c99af20c40a729f`
    )
      .then((response) => response.json())
      .then((data) => setElements({ ...data.content, content: {} }));

    // setAnswerState(...elements, { content: {} });
  }, [location.state]);

  //todo : header will be added here
  const { questions, title } = elements ?? {};

  // content format for each question is: qid_name
  var element = { ...elements, content: {} };
  // console.log(questions);
  // questions.sort(function (a, b) {
  //   return a.order.localeCompare(b.order);
  // });

  const handleSubmit = (e) => {
    //TODO: fetch, axios
    console.log(elements);
    // e.preventDefault();
    // https://vc-sisman.jotform.dev/intern-api/submission/add
  };

  // created another JSON object to hold the element in
  // updated the keys depending the event and record the change inside it
  const handleChange = (event, id) => {
    // element = answerState;
    // const answerState = Object.assign({}, elements);
    Object.values(questions).forEach((field) => {
      const { qid, name, type } = field;
      const key = qid + "_" + name;

      if (id === qid) {
        switch (type) {
          case "control_spinner":
          case "control_number":
            element.content[key] = event;
            break;

          case "control_checkbox":
            if (typeof element.content[key] === "undefined") {
              // initialize the key if not been already
              element.content[key] = [];
            }
            if (event.target.checked) {
              element.content[key].push(event.target.name);
            } else {
              //find the element in list
              const index = element.content[key].indexOf(event.target.name);
              //if it exists remove it
              if (index > -1) {
                element.content[key].splice(index, 1);
              }
            }
            break;
          case "control_datetime":
            const dateSelected = {
              day: event.getDate(),
              //month for Date object is index based
              month: event.getMonth() + 1,
              year: event.getFullYear(),
            };
            element.content[key] = dateSelected;

            break;
          case "control_radio":
            element.content[key] = event.target.id;
            break;
          case "control_address":
          case "control_fullname":
            element.content[key] = {
              ...element.content[key],
              [event.target.name]: event.target.value,
            };
            break;
          default:
            element.content[key] = event.target.value;
            break;
        }
        // FIXME: setElements prevents element to hold more than one value
        // setAnswerState(element);
        // setAnswerState((prevState) => {
        //   let content = Object.assign({}, prevState.content); // creating copy of state variable content
        //   content = element.content; // update the name property, assign a new value
        //   return { content }; // return new object content object
        // });

        console.log(element.content);
      }
    });
  };

  //TODO:
  return (
    <div>
      <Link to="/" className="btn previous">
        &laquo; Back
      </Link>
      //TODO: submit attributes
      <FormContext.Provider submit={handleSubmit} value={{ handleChange }}>
        <div>
          {/* <button onClick={handleChange}>Change</button> */}
          <form>
            {questions
              ? Object.values(questions).map((field, i) => (
                  <FormElement key={i} field={field} />
                ))
              : null}
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </FormContext.Provider>
    </div>
  );
};

export default FormFactory;
