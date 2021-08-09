import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const ModalButton = ({ letterName, imageFile }) => {
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
          <Image src={`img/${imageFile}.jpg`} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalButton;
