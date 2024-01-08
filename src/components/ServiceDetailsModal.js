import React from "react";
import { Modal, Button } from "react-bootstrap";

const ServiceDetailsModal = ({ service, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{service.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{service.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ServiceDetailsModal;
