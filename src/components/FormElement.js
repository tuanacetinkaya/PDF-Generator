import React from "react";
import { Alert } from "react-bootstrap";

import Address from "./form_elements/Address";
import CheckBox from "./form_elements/CheckBox";
import DateTime from "./form_elements/DateTime";
import DropDown from "./form_elements/DropDown";
import Email from "./form_elements/Email";
import FileUpload from "./form_elements/FileUpload";
import FullName from "./form_elements/FullName";
import Head from "./form_elements/Head";
import Number from "./form_elements/Number";
import Phone from "./form_elements/Phone";
import Radio from "./form_elements/Radio";
import Spinner from "./form_elements/Spinner";
import Text from "./form_elements/Text";
import TextArea from "./form_elements/TextArea";
import TextBox from "./form_elements/TextBox";
import { EmptyElement } from "./syled_cmps/CardContainer.style";

const FormElement = ({
  key,
  field: { type, qid, text, name, hint, subLabel, headerType, options },
}) => {
  switch (type) {
    case "control_address":
      return <Address text={text} id={qid} name={name}></Address>;
    case "control_checkbox":
      return <CheckBox text={text} id={qid} options={options}></CheckBox>;
    case "control_datetime":
      return <DateTime text={text} id={qid}></DateTime>;
    case "control_dropdown":
      return <DropDown text={text} id={qid} options={options}></DropDown>;
    case "control_email":
      return <Email text={text} id={qid} sublabel={subLabel}></Email>;
    case "control_fileupload":
      return <FileUpload text={text} name={name} id={qid} />;
    case "control_fullname":
      return <FullName text={text} id={qid}></FullName>;
    case "control_head":
      return <Head text={text} header_type={headerType}></Head>;
    case "control_spinner":
      return <Spinner text={text} id={qid}></Spinner>;
    case "control_number":
      return <Number text={text} id={qid}></Number>;
    case "control_phone":
      return <Phone id={qid}></Phone>;
    case "control_radio":
      return <Radio text={text} id={qid} name={name} options={options}></Radio>;
    case "control_text":
      return <Text text={text}></Text>;
    case "control_textarea":
      return (
        <TextArea
          text={text}
          id={qid}
          hint={hint}
          subLabel={subLabel}
        ></TextArea>
      );
    case "control_textbox":
      return (
        <TextBox
          text={text}
          hint={hint}
          subLabel={subLabel}
          name={name}
          id={qid}
        />
      );
    case "control_button":
    case "control_pagebreak":
    case "control_divider":
      //ignored button input since we only need one submit button
      // which is implemented inside the FormFactory class
      // also ignored the page break since, you know... page break.
      return <EmptyElement></EmptyElement>;
    default:
      return (
        <div>
          <Alert key={key} variant="danger">
            Rendering Error: Field Type '{type}' has NOT been implemented!
          </Alert>
        </div>
      );
  }
};

export default FormElement;
