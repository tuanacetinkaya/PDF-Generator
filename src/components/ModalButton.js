import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const ModalButton = ({ letterName, imageFile, form_id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="buttonContainer">
      <Button className="btn" variant="primary" onClick={handleShow}>
        {letterName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{letterName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageFile} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Link
            to={{ pathname: "/form", state: form_id }}
            className="btn btn-primary"
          >
            Continue
          </Link>

          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalButton;
