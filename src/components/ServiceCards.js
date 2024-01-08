import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import image1 from "./assets/images/services/image-1.jpg";
import image2 from "./assets/images/services/image-2.jpg";
import image3 from "./assets/images/services/image-3.jpg";
import ServiceDetailsModal from "./ServiceDetailsModal";

const services = [
  {
    id: 1,
    title: "Portrait Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci id metus sodales, eget interdum magna hendrerit.",
    image: image1,
  },
  {
    id: 2,
    title: "Landscape Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci id metus sodales, eget interdum magna hendrerit.",
    image: image2,
  },
  {
    id: 3,
    title: "Food Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci id metus sodales, eget interdum magna hendrerit.",
    image: image3,
  },
];

function ServiceCards() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container py-5">
      <div className="row py-5">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <Card>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleLearnMoreClick(service)}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {selectedService && (
        <ServiceDetailsModal
          service={selectedService}
          show={showModal}
          handleClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ServiceCards;
