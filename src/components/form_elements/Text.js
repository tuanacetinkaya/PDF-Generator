// this is a class for read only paragraph elements
import React from 'react'
import {Form} from "react-bootstrap";

const Text = ( {text} ) => {
    return (
        <Form.Label as="legend" column sm={2}>
          {text}
        </Form.Label>
    )
}

export default Text
