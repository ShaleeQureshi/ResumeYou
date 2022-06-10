import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const PopupModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="popup_modal">
      <Button
        variant="primary"
        onClick={handleShow}
        className={props.btn_class}>
        {props.btn_text}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modal_heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modal_body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.btn_close_modal}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {props.btn_save}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default PopupModal;
