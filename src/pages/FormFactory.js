// import tempForm from "./tempForm.json";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Promise } from "q";
import { Redirect } from "react-router-dom";
import axios from "axios";

import FormElement from "../components/FormElement";
import { FormContext } from "../components/FormContext";
import classes from "./pages.css";

//TODO: #1 form values failes to load
const FormFactory = () => {
  let location = useLocation();
  const [elements, setElements] = useState(null);
  const [submissionID, setSubmissionID] = useState(0);
  const [apiKey, setApiKey] = useState("ee185c012b2e0fb26c99af20c40a729f");

  function sortJsonArrayByProperty(objArray, prop, direction) {
    if (elements.length < 2)
      throw new Error("sortJsonArrayByProp requires 2 arguments");
    var direct = arguments.length > 2 ? arguments[2] : 1; //Default to ascending

    if (objArray && objArray.constructor === Array) {
      var propPath = prop.constructor === Array ? prop : prop.split(".");
      objArray.sort(function (a, b) {
        for (var p in propPath) {
          if (a[propPath[p]] && b[propPath[p]]) {
            a = a[propPath[p]];
            b = b[propPath[p]];
          }
        }
        // convert numeric strings to integers
        a = a.match(/^\d+$/) ? +a : a;
        b = b.match(/^\d+$/) ? +b : b;
        return a < b ? -1 * direct : a > b ? 1 * direct : 0;
      });
    }
  }

  useEffect(() => {
    // fetch(
    //   `https://vc-sisman.jotform.dev/intern-api/form/with_question/${location.state}?api_key=ee185c012b2e0fb26c99af20c40a729f`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setElements({ ...data.content, content: {} }));

    //TODO: figure out a way to have a visual output of the catched error
    // GET request using fetch with error handling
    fetch(
      `https://vc-sisman.jotform.dev/intern-api/form/with_question/${location.state}?api_key=${apiKey}`
    )
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.content;
          return Promise.reject(error);
        }
        console.log("mountedd");
        setElements({ ...data.content, content: {} });
        // const { questions } = elements ?? {};
        // Object.values(questions).sort(function (a, b) {
        //   return a["order"] > b["order"] ? 1 : a["order"] < b["order"] ? -1 : 0;
        // });

        // setElements({ ...elements, questions: questions });
      })
      .catch((error) => {
        setElements({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });

    // setAnswerState(...elements, { content: {} });
  }, [location.state]);

  //todo : header will be added here
  const { questions, title } = elements ?? {};

  // content format for each question is: qid_name
  // var element = { ...elements, content: {} };
  // console.log(questions);
  // questions.sort(function (a, b) {
  //   return a.order.localeCompare(b.order);
  // });

  const handleSubmit = (e) => {
    //TODO: fetch, axios
    e.preventDefault();
    // console.log(e);
    // console.log("elements: ", elements);
    // https://vc-sisman.jotform.dev/intern-api/submission/add
    const formatSubmission = { content: elements.content, id: elements.id };
    var submission;
    console.log(JSON.stringify(formatSubmission));
    axios
      .post(
        `https://vc-sisman.jotform.dev/intern-api/submission/add?api_key=${apiKey}`,

        JSON.stringify(formatSubmission)
      )
      .then((response) => {
        submission = response.data.content.submissionID;
        console.log("response", response);
        console.log("response subID", response.data.content.submissionID);
      })
      .catch((error) => {
        console.log("There's an error: ", error);
      });

    setSubmissionID(submission);
    console.log("subID", submissionID);

    // https://api.jotform.com/generatePDF?type=PDFv2&formid=%7BFORMID%7D&reportid=%7BreportId%7D&submissionid=%7BsubmissionId%7D&apikey=%7BAPI_KEY%7D&useNew=1

    axios
      .get(
        `https://api.jotform.com/generatePDF?type=PDFv2&formid=${location.state}&submissionid=${submissionID}&apikey=${apiKey}&useNew=1`
      )
      .then((response) => {
        
        console.log("pdfff ", response.data.content);
      })
      .catch((error) => {
        console.log("There's an error: ", error);
      });
    console.log("done pdf");

    
    <Redirect to='/'/>;
  };

  // created another JSON object to hold the element in
  // updated the keys depending the event and record the change inside it
  const handleChange = (event, id) => {
    Object.values(questions).forEach((field) => {
      const { qid, name, type } = field;
      const key = qid + "_" + name;

      if (id === qid) {
        switch (type) {
          case "control_spinner":
          case "control_number":
            elements.content[key] = event;
            break;

          case "control_checkbox":
            if (typeof elements.content[key] === "undefined") {
              // initialize the key if not been already
              elements.content[key] = [];
            }
            if (event.target.checked) {
              elements.content[key].push(event.target.name);
            } else {
              //find the element in list
              const index = elements.content[key].indexOf(event.target.name);
              //if it exists remove it
              if (index > -1) {
                elements.content[key].splice(index, 1);
              }
            }
            break;
          case "control_datetime":
            // const dateSelected = {
            //   day: event.getDate(),
            //   //month for Date object is index based
            //   month: event.getMonth() + 1,
            //   year: event.getFullYear(),
            // };
            elements.content[qid + "_day"] = event.getDate();
            elements.content[qid + "_month"] = event.getMonth();
            elements.content[qid + "_year"] = event.getFullYear();

            break;
          case "control_radio":
            elements.content[key] = event.target.id;
            break;
          case "control_address":
          case "control_fullname":
            elements.content[qid + "_" + event.target.name] =
              event.target.value;
            break;
          default:
            elements.content[key] = event.target.value;
            break;
        }
        // Debug
        // console.log(elements.content);
      }
    });
  };

  //TODO:
  return (
    <div>
      <Link to="/" className={`${classes.previous} ${classes.round} `}>
        &laquo; Back
      </Link>
      {/* //TODO: submit attributes */}
      <FormContext.Provider value={{ handleChange }}>
        <div>
          {/* <button onClick={handleChange}>Change</button> */}
          <form>
            {questions
              ? Object.values(questions).map((field, i) => (
                  <FormElement key={i} field={field} />
                ))
              : null}
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Download PDF
            </button>
          </form>
        </div>
      </FormContext.Provider>
    </div>
  );
};

export default FormFactory;
