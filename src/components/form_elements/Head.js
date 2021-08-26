import React from "react";

const Head = ({ text, header_type }) => {
  if (header_type === "Large") {
    return <h1>{text}</h1>;
  }

  return <h3>{text}</h3>;
};

export default Head;
