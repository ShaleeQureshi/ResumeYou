import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface CustomModalInterface {
  openBtnText: string;
  openBtnVariant: string;
  openBtnId: string | undefined;
  modalTitle: string;
  modalBody: JSX.Element | JSX.Element[];
  modalButtonCloseText: string;
  modalButtonSaveText: string;
  modalButtonSaveFunction: Function;
}

const CustomModal = (props: CustomModalInterface) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseOnSaveBtn = () => {
    props.modalButtonSaveFunction();
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleShow}
        variant={props.openBtnVariant}
        id={props.openBtnId}
        className="w-100 text-center">
        {props.openBtnText}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        {props.modalBody}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.modalButtonCloseText}
          </Button>
          <Button variant="primary" onClick={handleCloseOnSaveBtn}>
            {props.modalButtonSaveText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomModal;
