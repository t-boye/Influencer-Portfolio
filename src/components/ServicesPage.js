import React from "react";
import Hero from "./Hero";
import ServiceCards from "./ServiceCards";

function ServicesPage() {
  const pricingData = {
    basic: {
      title: "Basic Plan",
      description: "This is the basic plan",
      price: "$10",
      features: ["10 Images", "Low Resolution", "JPEG format", "No watermark"],
    },
    standard: {
      title: "Standard Plan",
      description: "This is the standard plan",
      price: "$20",
      features: [
        "20 Images",
        "High Resolution",
        "JPEG/PNG format",
        "No watermark",
      ],
    },
    premium: {
      title: "Premium Plan",
      description: "This is the premium plan",
      price: "$30",
      features: [
        "Unlimited Images",
        "High Resolution",
        "JPEG/PNG/TIFF format",
        "No watermark",
        "Priority Support",
      ],
    },
  };

  return (
    <div>
      <Hero
        title="Services Offered"
        subtitle="Explore the range of professional services I provide"
      />
      <div className="container">
        <ServiceCards />
      </div>
    </div>
  );
}

export default ServicesPage;
